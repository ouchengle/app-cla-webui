<template>
    <div>
        <div class="itemBox">
            <div class="stepTitle">
                {{$t('org.config_cla_paste_url_title')}}
                <el-tooltip class="item" effect="light"
                            :content="$t('org.config_cla_paste_url_title_tooltips')"
                            placement="right">
                    <svg-icon icon-class="bangzhu"></svg-icon>
                </el-tooltip>
            </div>
            <div>
                <div class="margin-top-1rem">
                    {{$t('org.config_cla_paste_corp_url')}}
                </div>
                <div class="margin-top-1rem">
                    {{$t('org.config_cla_corp_url_desc',{platform:this.$store.state.platform})}}
                </div>
                <div class="margin-top-1rem">
                    <el-row class="margin-top-1rem">
                        <el-col>
                            <el-input clearable="" :placeholder="$t('org.config_cla_url_placeholder')" size="medium"
                                      v-model="cla_link_corporation">
                            </el-input>
                        </el-col>
                    </el-row>
                    <el-row class="margin-top-1rem">
                        {{$t('org.config_cla_corp_lang')}}
                    </el-row>
                    <el-row class="margin-top-1rem">
                        <el-col>
                            <el-select v-model="corpClaLanguageValue"
                                       :placeholder="$t('org.config_cla_select_lang')"
                                       style="width: 100%"
                                       size="medium"
                                       clearable
                                       filterable
                                       @change="changeCorpLanguage">
                                <el-option
                                        v-for="item in languageOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-row>
                    <div class="margin-top-1rem">
                        {{$t('org.config_cla_upload_file_title')}}
                    </div>
                    <div class="margin-top-1rem">
                        {{$t('org.config_cla_corp_file')}}
                        <span @click="downloadFile"
                              class="downloadText">{{$t('org.config_cla_corp_file_download')}}</span>
                    </div>
                    <div class="margin-top-1rem">
                        <div>
                            <button class="showBox">
                                <input class="inputFile" id="corp_pdf" @change="changeFile" type="file" name="file">
                                {{$t('org.config_cla_corp_choose_file')}}
                            </button>
                            <span class="signatureName">
                                {{this.$store.state.corpFDName}}
                                <svg-icon class="delete-icon" v-if="this.$store.state.corpFDName" @click="deleteFile"
                                          icon-class="clear"></svg-icon>
                            </span>

                        </div>
                        <div class="margin-top-1rem file_size_tips">
                            {{$t('org.config_cla_corp_file_size',{max_size_kb:this.max_size})}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="itemBox">
            <div style="padding: .5rem">
                <p style="font-size: 1.2rem">{{$t('org.config_cla_fields')}}
                    <el-tooltip class="item" effect="dark"
                                :content="$t('org.config_cla_fields_desc')"
                                placement="right">
                        <svg-icon icon-class="bangzhu"></svg-icon>
                    </el-tooltip>
                </p>
            </div>
            <div class="margin-top-1rem">
                <div>
                    <div class="margin-top-1rem">
                        {{$t('org.config_cla_corp_metadata')}}
                    </div>
                    <div class="margin-top-1rem">
                        <div class="margin-top-1rem">
                            {{$t('org.config_cla_corp_metadata_desc')}}
                        </div>
                        <div>
                            <el-row class="margin-top-1rem" type="flex" align="middle" :gutter="20">
                                <el-col :span="5">
                                    {{$t('org.config_cla_check_fields_title_title')}}
                                </el-col>
                                <el-col :span="5">
                                    {{$t('org.config_cla_check_fields_type_title')}}
                                </el-col>
                                <el-col :span="5">
                                    {{$t('org.config_cla_check_fields_describe_title')}}
                                </el-col>
                                <el-col :span="5" style="height: 100%">
                                    {{$t('org.config_cla_check_fields_require_title')}}
                                </el-col>
                            </el-row>
                            <el-row style="padding: 0.5rem 0;" type="flex" align="middle" :gutter="20"
                                    v-for="(item,index) in corporationMetadataArr">
                                <el-col :span="5">
                                    <el-input disabled="" v-model="item.title" size="medium" readonly="">

                                    </el-input>
                                </el-col>
                                <el-col :span="5">
                                    <el-input disabled="" v-model="item.type" size="medium" readonly></el-input>
                                </el-col>
                                <el-col :span="5">
                                    <el-input disabled="" v-model="item.description" size="medium" readonly></el-input>
                                </el-col>
                                <el-col :span="5" style="height: 100%">
                                    <el-checkbox v-model="item.required" disabled="">
                                        {{$t('org.config_cla_fields_required')}}
                                    </el-checkbox>
                                </el-col>
                            </el-row>
                        </div>
                        <div>
                            <el-row style="padding: 0.5rem 0;" type="flex" align="middle" :gutter="20"
                                    v-for="(item,index) in corporationCustomMetadataArr">
                                <el-col :span="5">
                                    <el-input v-model="item.title" size="medium"
                                              :placeholder="$t('org.config_cla_fields_title_placeholder')">
                                    </el-input>
                                </el-col>
                                <el-col :span="5">
                                    <el-select :disabled="!add_bind_first" style="width: 100%" v-model="item.type"
                                               :placeholder="$t('org.config_cla_fields_type_placeholder')"
                                               size="medium">
                                        <el-option
                                                v-for="i in dataTypeOptions"
                                                :key="i.value"
                                                :label="i.label"
                                                :value="i.value">
                                        </el-option>
                                    </el-select>
                                </el-col>
                                <el-col :span="5" style="height: 100%">
                                    <el-input v-model="item.description" size="medium"
                                              :placeholder="$t('org.config_cla_fields_desc_placeholder')"></el-input>
                                </el-col>
                                <el-col :span="5" style="height: 100%">
                                    <el-checkbox :disabled="!add_bind_first" v-model="item.required">
                                        {{$t('org.config_cla_fields_required')}}
                                    </el-checkbox>
                                </el-col>
                                <el-col v-show="add_bind_first" :span="4">
                                    <button class="add_button" @click="addCorpRow(index)">+</button>
                                    <button class="deleteBt" @click="myCorpDeleteRow(index)">-</button>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="nextStepBtBox">
            <button class="step_button" @click="toNextPage">{{$t('org.next_step')}}</button>
        </div>
        <ReTryDialog :message="reLoginMsg" :dialogVisible="reTryVisible"></ReTryDialog>
        <ReLoginDialog :dialogVisible="reLoginDialogVisible" :message="reLoginMsg"></ReLoginDialog>
    </div>
</template>

<script>
    import ReTryDialog from '../components/ReTryDialog'
    import ReLoginDialog from '../components/ReLoginDialog'
    import http from '../util/http'
    import * as url from '../util/api'
    import * as util from '../util/util'

    export default {
        name: "AddCorpUrl",
        components: {
            ReTryDialog,
            ReLoginDialog,
        },
        computed: {
            add_bind_first() {
                return this.$store.state.add_bind_first
            },
            reTryVisible() {
                return this.$store.state.reTryDialogVisible
            },
            reLoginDialogVisible() {
                return this.$store.state.orgReLoginDialogVisible
            },
            reLoginMsg() {
                return this.$store.state.dialogMessage
            },
            corporationCustomMetadataArr() {
                if (this.$store.state.add_bind_first) {
                    if (this.$store.state.corporationCustomMetadataArr && this.$store.state.corporationCustomMetadataArr.length) {
                        return this.$store.state.corporationCustomMetadataArr
                    } else {
                        return this.initCorpCustomMetadata;
                    }
                } else {
                    return this.$store.state.corporationCustomMetadataArr
                }
            },
            cla_link_corporation: {
                get() {
                    return this.$store.state.claLinkCorp;
                },
                set(value) {
                    this.$store.commit('setClaLinkCorp', value)
                },
            },
            corpClaLanguageValue: {
                get() {
                    return this.$store.state.corpLanguage;
                },
                set(value) {
                    this.$store.commit('setCorpLanguage', value)
                }
            },
        },
        data() {
            return {
                corpMetadata: [],
                max_size: SIGNATURE_PAGE_MAX_SIZE,
                corp_pdf_name: '',
                dataTypeOptions: DATATYPEOPTIONS,
                languageOptions: [{value: 'english', label: 'English'}, {value: 'chinese', label: '中文'}],
                corporationMetadataArr: CORPORATIONMETADATAARR_EN,
                initCorpCustomMetadata: INITCUSTOMMETADATA,
            }
        },
        methods: {
            addCorpRow(index) {
                let metadata = this.corporationCustomMetadataArr;
                metadata.splice(index + 1, 0, {
                    title: '',
                    type: '',
                    description: '',
                    required: false,
                });
                this.$store.commit('setCorporationCustomMetadataArr', metadata)
            },
            myCorpDeleteRow(index) {
                let metadata = this.corporationCustomMetadataArr;
                if (metadata.length === 1) {
                    metadata[0].type = '';
                    metadata[0].title = '';
                    metadata[0].description = ''
                } else {
                    metadata.splice(index, 1);
                }
                this.$store.commit('setCorporationCustomMetadataArr', metadata)
            },
            deleteFile() {
                let input = document.getElementById('corp_pdf');
                input.value = '';
                this.$store.commit('setCorpFDName', '');
                this.$store.commit('setCorpFD', '');
                sessionStorage.removeItem('corpFDName');
                sessionStorage.removeItem('corpFD');
            },
            changeFile() {
                let formData = new FormData();
                let input = document.getElementById('corp_pdf');
                let fs = input.files;
                let _size = 1024 * this.max_size;
                for (let i = 0; i < fs.length; i++) {
                    let d = fs[i];
                    if (/.(PDF|pdf)$/.test(d.name)) {
                        if (d.size <= _size) {
                            formData.append("files", fs[i]);
                            this.$store.commit('setCorpFDName', formData.get('files').name);
                            let reader = new FileReader();
                            reader.readAsDataURL(formData.get('files'));
                            reader.onload = () => {
                                this.$store.commit('setCorpFD', reader.result)
                            };
                        } else {
                            input.value = '';
                            this.$store.commit('errorCodeSet', {
                                dialogVisible: true,
                                dialogMessage: this.$t('tips.file_too_large'),
                            });
                            return false
                        }
                    } else {
                        input.value = '';
                        this.$store.commit('errorCodeSet', {
                            dialogVisible: true,
                            dialogMessage: this.$t('tips.not_pdf'),
                        });
                        return false
                    }
                }
            },
            downloadFile() {
                if (this.corpClaLanguageValue) {
                    http({
                        url: `${url.getBlankSignature}/${this.$store.state.corpLanguage}`,
                        responseType: "blob",
                    }).then(res => {
                        if (res.data) {
                            let time = util.getNowDateToTime();
                            download((new Blob([res.data])), `${this.$store.state.corpLanguage}_blank_signature${time}.pdf`, 'application/pdf');
                        }
                    }).catch(err => {
                        if (err.data && err.data.hasOwnProperty('data')) {
                            switch (err.data.data.error_code) {
                                case 'cla.invalid_token':
                                    this.$store.commit('setOrgReLogin', {
                                        dialogVisible: true,
                                        dialogMessage: this.$t('tips.invalid_token'),
                                    });
                                    break;
                                case 'cla.missing_token':
                                    this.$store.commit('setOrgReLogin', {
                                        dialogVisible: true,
                                        dialogMessage: this.$t('tips.missing_token'),
                                    });
                                    break;
                                case 'cla.unknown_token':
                                    this.$store.commit('setOrgReLogin', {
                                        dialogVisible: true,
                                        dialogMessage: this.$t('tips.unknown_token'),
                                    });
                                    break;
                                case 'cla.system_error':
                                    this.$store.commit('errorCodeSet', {
                                        dialogVisible: true,
                                        dialogMessage: this.$t('tips.system_error'),
                                    });
                                    break;
                                default :
                                    this.$store.commit('errorCodeSet', {
                                        dialogVisible: true,
                                        dialogMessage: this.$t('tips.unknown_error'),
                                    });
                                    break;
                            }
                        } else {
                            this.$store.commit('errorCodeSet', {
                                dialogVisible: true,
                                dialogMessage: this.$t('tips.system_error'),
                            })
                        }
                    })
                } else {
                    this.$message.closeAll();
                    this.$message.error(this.$t('org.config_cla_download_empty_signature_tips'));
                }
            },
            initMetadata(lang) {
                if (lang === 'chinese') {
                    this.corporationMetadataArr = CORPORATIONMETADATAARR_ZH
                } else if (lang === 'english') {
                    this.corporationMetadataArr = CORPORATIONMETADATAARR_EN
                }
            },
            corpInit() {
                this.$store.commit('setCorpLanguage', '');
                this.$store.commit('setClaLinkCorp', '');
                sessionStorage.removeItem('corpLanguage');
                sessionStorage.removeItem('claLinkCorp');
                this.$store.commit('setCorpMetadata', this.corporationMetadataArr);
                sessionStorage.removeItem('corporationMetadata');
                sessionStorage.removeItem('corporationCustomMetadataArr');
            },
            toNextPage() {
                if (this.cla_link_corporation && this.corpClaLanguageValue && this.$store.state.corpFD) {
                    let corpArr = this.checkMetadata();
                    if (corpArr) {
                        this.$store.commit('setCorpMetadata', corpArr);
                        this.$store.commit('setCorporationCustomMetadataArr', this.corpMetadata);
                        this.$router.replace('/config-check');
                    } else {
                        this.$message.closeAll();
                        this.$message.error(this.$t('tips.title_type_repeat'))
                    }
                } else if (this.cla_link_corporation) {
                    if (this.corpClaLanguageValue) {
                        this.$store.commit('errorCodeSet', {
                            dialogVisible: true,
                            dialogMessage: this.$t('tips.upload_signature_file'),
                        });
                    } else {
                        this.$store.commit('errorCodeSet', {
                            dialogVisible: true,
                            dialogMessage: this.$t('tips.select_corp_language'),
                        });
                    }
                } else {
                    this.$store.commit('errorCodeSet', {
                        dialogVisible: true,
                        dialogMessage: this.$t('tips.paste_corp_link'),
                    });
                }
            },
            checkMetadata() {
                let corpMetadata = [];
                this.corporationCustomMetadataArr && this.corporationCustomMetadataArr.forEach((item) => {
                    if (item.title !== '' && item.type !== '') {
                        corpMetadata.push(item)
                    }
                });
                let corpArr = this.corporationMetadataArr.concat(corpMetadata);
                for (let i = 0; i < corpArr.length; i++) {
                    for (let j = i + 1; j < corpArr.length; j++) {
                        if (corpArr[i].title === corpArr[j].title || corpArr[i].type === corpArr[j].type) {
                            return false;
                        }
                    }
                }
                this.corpMetadata = corpMetadata;
                return corpArr
            },
            changeCorpLanguage(value) {
                this.initMetadata(value);
                this.$store.commit('setCorpLanguage', value);
                this.$store.commit('setAddLang', value)
            },
        },
        created() {
            this.initMetadata(this.$store.state.individualLanguage);
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                if (from.path === '/') {
                    vm.corpInit();
                }
            })
        },
    }
</script>

<style scoped>
    .file_size_tips {
        font-size: 0.8rem;
    }

    .delete-icon {
        cursor: pointer;
        margin-left: .5rem;
    }

    .signatureName {
        font-size: .8rem;
        vertical-align: text-top;
    }

    .inputFile {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        opacity: 0;
        width: 100%;
        height: 100%;
    }

    .showBox {
        position: relative;
        top: 0;
        left: 0;
        z-index: 1;
        margin-right: 1rem;
        font-family: Roboto-Regular, sans-serif;
        width: 5rem;
        height: 2rem;
        border-radius: 1rem;
        border: none;
        color: white;
        font-size: 0.8rem;
        cursor: pointer;
        background: linear-gradient(to right, #97DB30, #319E55);
    }

    .nextStepBtBox {
        text-align: right;
        margin-bottom: 2rem;
    }

    .stepTitle {
        font-size: 1.2rem;
        padding: .5rem;
    }

    .itemBox {
        border-radius: 1.25rem;
        box-shadow: 0 0 20px 10px #F3F3F3;
        padding: 2rem;
        margin-bottom: 2rem;
    }

    .deleteBt {
        width: 3rem;
        height: 3rem;
        border-radius: 1.5rem;
        border: none;
        color: white;
        font-size: 1rem;
        cursor: pointer;
        background: linear-gradient(to right, #FF9D58, #E22424);
        margin-right: 1rem;
    }

    .deleteBt:focus {
        outline: none;
    }

    .add_button {
        width: 3rem;
        height: 3rem;
        border-radius: 1.5rem;
        border: none;
        color: white;
        font-size: 1rem;
        cursor: pointer;
        background: linear-gradient(to right, #97DB30, #319E55);
        margin-right: 1rem;
    }

    .add_button:focus {
        outline: none;
    }
</style>