<template>
    <el-row id="cla_pdf">
        <pdf class="pdfPage margin-bottom-1rem" ref="pdf" v-for="i in numPages" :key="i" :src="claText"
             :page="i"></pdf>
    </el-row>
</template>

<script>
    import pdf from 'vue-pdf'
    import http from '../util/sign_http'
    import * as url from '../util/api'

    export default {
        name: "ClaPdf",
        components: {
            pdf,
        },
        data() {
            return {
                claText: '',
                numPages: null,
            }
        },
        computed: {
            apply_to() {
                if (this.$store.state.loginType === 'corporation') {
                    return this.$store.state.loginType
                }
                return 'individual'
            },
            claTextUrl() {
                return this.$store.state.domain
            },
        },
        created() {
            this.getData()
        },
        methods: {
            getData() {
                window.addEventListener('message', (event) => {
                    if (event.data) {
                        this.setClaText(event.data)
                    }
                }, false)
            },
            getNumPages(url) {
                let loadingTask = pdf.createLoadingTask(url)
                loadingTask.promise.then(pdf => {
                    this.numPages = pdf.numPages
                }).catch(err => {
                    console.error('pdf 加载失败', err);
                })
            },
            setClaText(obj) {
                let dataFromParent = obj;
                if (dataFromParent.pdfData.length) {
                    for (let i = 0; i < dataFromParent.pdfData.length; i++) {
                        if (dataFromParent.pdfData[i].hasOwnProperty(dataFromParent.lang)) {
                            this.claText && window.URL.revokeObjectURL(this.claText);
                            this.claText = window.URL.createObjectURL(dataFromParent.pdfData[i][dataFromParent.lang]);
                            this.getNumPages(this.claText);
                            return
                        }
                    }
                }
                http({
                    url: `${url.getCLAPdf}/${dataFromParent.link_id}/${this.apply_to}/${dataFromParent.lang}/${dataFromParent.hash}`,
                    responseType: 'blob',
                }).then(res => {
                    if (res && res.data) {
                        let blob = new Blob([(res.data)], {type: 'application/pdf'});
                        let data = dataFromParent.pdfData;
                        data.push({[dataFromParent.lang]: blob});
                        window.parent.postMessage(data, this.claTextUrl);
                        window.URL.revokeObjectURL(this.claText);
                        this.claText = window.URL.createObjectURL(blob);
                        this.getNumPages(this.claText);
                    }
                }).catch(err => {
                    if (err.data && err.data.hasOwnProperty('data')) {
                        switch (err.data.data.error_code) {
                            case 'cla.invalid_token':
                                this.$store.commit('errorSet', {
                                    dialogVisible: true,
                                    dialogMessage: this.$t('tips.invalid_token'),
                                });
                                break;
                            case 'cla.missing_token':
                                this.$store.commit('errorSet', {
                                    dialogVisible: true,
                                    dialogMessage: this.$t('tips.missing_token'),
                                });
                                break;
                            case 'cla.expired_token':
                                this.$store.commit('errorSet', {
                                    dialogVisible: true,
                                    dialogMessage: this.$t('tips.invalid_token'),
                                });
                                break;
                            case 'cla.unknown_token':
                                this.$store.commit('errorSet', {
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
            }
        },
    }
</script>

<style scoped lang="less">
    #cla_pdf > span:not(:last-of-type) {
        box-shadow: 0 0 20px 10px #f3f3f3;
        border-radius: 1rem;
        overflow: hidden;
    }
</style>
