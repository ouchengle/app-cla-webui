<template>
    <el-row id="signSuccessDialog">
        <el-dialog
                title=""
                :visible.sync="dialogVisible"
                :close-on-press-escape="false"
                :show-close="false"
                :close-on-click-modal="false"
                :width="dialogWidth">
            <div class="titleBox">
                <svg-icon icon-class="chenggong" class="dialogIcon"></svg-icon>
                <span>{{$t('tips.successTitle')}}</span>
            </div>
            <el-row>
                <el-col align="center">
                    <p :class="dialogMessage">{{message}}</p>
                    <button class="dialogBt" @click="clickGoHome()">{{$t('tips.dialogBt')}}</button>
                </el-col>
            </el-row>
        </el-dialog>
    </el-row>
</template>

<script>
    import * as util from '../util/util'

    export default {
        name: "SignSuccessDialog",
        props: ['dialogVisible', 'message'],
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
            return {
                signRouter: this.$store.state.signRouter,
            }
        },
        methods: {
            clickGoHome() {
                this.$store.commit('setSignSuccess', {
                    dialogVisible: false,
                    dialogMessage: '',
                });
                let repoInfo = this.$store.state.repoInfo
                let params = repoInfo.repo_id ? `${repoInfo.platform}/${repoInfo.org_id}/${repoInfo.repo_id}` : `${repoInfo.platform}/${repoInfo.org_id}`
                let path = `${this.signRouter}/${util.strToBase64(params)}`;
                this.$router.replace(path)
            },
        },
    }
</script>

<style lang="less">
    #signSuccessDialog {
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
            color: #319E55;
            margin-bottom: 1rem;

            .dialogIcon {
                width: 1.5rem;
                height: 1.5rem;
                margin-right: 1rem;
            }
        }
    }


</style>