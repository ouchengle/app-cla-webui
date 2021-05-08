<template>
    <el-row id="checkSignStatus" class="padding-5rem">
        <el-row class="checkSign">
            <h4 class="margin-bottom-3rem">{{$t('signType.individualSignCheckTitle')}}</h4>
            <el-form @submit.native.prevent :model="formData" :rules="rules" ref="ruleForm">
                <el-form-item prop="email">
                    <el-input @keydown.native="pressEnter" v-model="formData.email" :placeholder="$t('signType.emailHolder')" clearable>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <button class="reset_pwd_button" type="button" @click="submitForm('ruleForm')">
                        {{$t('corp.submit')}}
                    </button>
                </el-form-item>
            </el-form>
        </el-row>
        <el-dialog
                title=""
                :visible.sync="dialogVisible"
                :close-on-press-escape="false"
                :show-close="false"
                :close-on-click-modal="false"
                :width="dialogWidth">
            <el-row>
                <el-col align="center">
                    <p>{{message}}</p>
                    <button class="dialogBt" @click="closeDialog()">{{$t('tips.dialogBt')}}</button>
                </el-col>
            </el-row>
        </el-dialog>
    </el-row>
</template>

<script>
    import _axios from '../util/_axios'
    import * as url from '../util/api'

    export default {
        name: "CheckSignStatus",
        computed: {
            dialogWidth() {
                if (this.IS_MOBILE) {
                    return '80%'
                } else {
                    return '30%'
                }
            },
            dialogMessage() {
                if (localStorage.getItem('lang') === '0') {
                    return 'dialogMessageEn'
                } else if (localStorage.getItem('lang') === '1') {
                    return 'dialogMessage'
                }
            },
        },
        data() {
            let verifyFormEmail = (rule, value, callback) => {
                let email = value.trim();
                let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,6}$/;
                if (reg.test(email)) {
                    callback();
                } else {
                    callback(new Error(this.$t('tips.invalid_email')))
                }
            }
            return {
                message: '',
                dialogVisible: false,
                org_id: this.$store.state.repoInfo.org_id,
                repo_id: this.$store.state.repoInfo.repo_id,
                platform: this.$store.state.repoInfo.platform,
                formData: {
                    email: ''
                },
                rules: {
                    email: [{required: true, validator: verifyFormEmail, trigger: ['change', 'blur']}]
                }
            }
        },
        methods: {
            pressEnter() {
                if (event.keyCode === 13) {
                    this.submitForm('ruleForm')
                }
            },
            closeDialog() {
                this.dialogVisible = false
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.checkSignStatusFunc()
                    } else {
                        return false;
                    }
                });
            },
            checkSignStatusFunc() {
                let _url = '';
                if (this.repo_id) {
                    _url = `${url.individual_signing}/${this.platform}/${this.org_id}:${this.repo_id}`
                } else {
                    _url = `${url.individual_signing}/${this.platform}/${this.org_id}`
                }
                _axios({
                    url: _url,
                    params: {email:this.formData.email}
                }).then(res => {
                    if (res.data && res.data.data) {
                        if (res.data.data.signed) {
                            this.message = this.$t('signType.signed')
                        } else {
                            this.message = this.$t('signType.notSigned')
                        }
                    } else {
                        this.message = this.$t('tips.system_error')
                    }
                    this.dialogVisible = true;
                }).catch(err => {

                })
            },
        },
    }
</script>

<style scoped lang="less">
    @media screen and (min-width: 1200px) {
        #checkSignStatus {
            width: 1200px;
            margin: auto;
        }
    }

    .checkSign {
        min-width: 500px;
        margin: 0 auto;
        background-color: white;
        padding: 2rem 5rem;
        border-radius: 1rem;
        box-shadow: 0 0 20px 10px #F3F3F3;
    }

    #checkSignStatus {
        .dialogBt {
            margin-top: 3rem;
            width: 8rem;
            height: 3rem;
            background: linear-gradient(to right, #97DB30, #319E55);
            border-radius: 1.5rem;
            border: none;
            color: white;
            cursor: pointer;
            outline: none;
        }

        .el-dialog__header {
            padding: 0;
        }

        .el-dialog__body {
            padding: 20px;
        }

        .titleBox {
            text-align: left;
            font-size: 1.5rem;
            color: #E22424;
            margin-bottom: 1rem;

            .dialogIcon {
                width: 1.5rem;
                height: 1.5rem;
                margin-right: 1rem;
            }
        }
    }
</style>
