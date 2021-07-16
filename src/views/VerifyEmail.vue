<template>
    <div id="verifyEmail" class="margin-top-3rem margin-bottom-3rem">
        <Step class="margin-top-5rem margin-bottom-2rem" :steping="0"></Step>
        <div class="findPwdBox">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0">
                <el-form-item prop="email">
                    <el-input :placeholder="$t('corp.email_input_holder')" size="small"
                              v-model="ruleForm.email" clearable=""></el-input>
                </el-form-item>
                <el-form-item prop="code">
                    <el-row align="middle" :gutter="20">
                        <el-col :span="16">
                            <el-input v-model="ruleForm.code" :placeholder="$t('signPage.verifyCodeHolder')"
                                      size="small" clearable="">
                            </el-input>
                        </el-col>
                        <el-col :span="8">
                            <el-button :disabled="sendBtTextFromLang!==$t('signPage.sendCode')"
                                       @click="sendCode()">{{sendBtTextFromLang}}
                            </el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <button class="reset_pwd_button" type="button" @click="submitForm('ruleForm')">
                        {{$t('corp.submit')}}
                    </button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import Step from '../components/FindPwdSteps';
    import http from '../util/_axios';
    import * as url from '../util/api';
    import * as util from '../util/util';

    export default {
        name: 'verifyEmail',
        components: {
            Step
        },
        computed: {
            sendBtTextFromLang: {
                get: function () {
                    return this.sendBtText;
                },
                set: function (value) {
                    this.sendBtText = value;
                }
            }
        },
        watch: {
            '$i18n.locale'() {
                if (this.sendBtTextFromLang === 'send code' || this.sendBtTextFromLang === '发送验证码') {
                    this.sendBtTextFromLang = this.$t('signPage.sendCode');
                } else {
                    this.sendBtTextFromLang = this.$t('signPage.reSendCode', {second: this.second});
                }
                this.$refs['ruleForm'] && this.$refs['ruleForm'].fields.forEach(item => {
                    if (item.validateState === 'error') {
                        this.$refs['ruleForm'].validateField(item.labelFor);
                    }
                });
            }
        },
        data() {
            return {
                sendBtText: this.$t('signPage.sendCode'),
                ruleForm: {email: '', code: ''},
                rules: {
                    email: [{required: true, validator: this.verifyFormEmail, trigger: ['blur', 'change']}],
                    code: [{required: true, validator: this.verifyCodeCheck, trigger: ['blur', 'change']}]
                }
            };
        },
        methods: {
            async verifyFormEmail(rule, value, callback) {
                let email = value.trim();
                let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,6}$/;
                if (reg.test(email)) {
                    callback();
                } else {
                    callback(new Error(this.$t('tips.invalid_email')));
                }
            },
            async verifyCodeCheck(rule, value, callback) {
                if (value) {
                    callback();
                } else {
                    callback(new Error(this.$t('tips.fill_verification_code')));
                }
            },
            submitVerifyCode() {
                http({
                    url: url.submitVerifyCode,
                    method: 'post',
                    data: {email: this.ruleForm.email, verifyCode: this.ruleForm.code}
                }).then(res => {
                    this.$store.commit('setFindPwdEmail', this.ruleForm.email);
                    this.$router.push('/reset-password');
                }).catch(err => {
                    util.catchErr(err, '', this);
                });
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.submitVerifyCode();
                    } else {
                        return false;
                    }
                });
            },
            sendCode() {
                let reg = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$');
                let email = this.ruleForm.email;
                if (email && reg.test(email)) {
                    http({
                        url: url.findPwdSendCode,
                        method: 'post',
                        data: {email: email}
                    }).then(res => {
                        console.log(res);
                    }).catch(err => {
                        console.log(err);
                    });
                } else {
                    this.$message.closeAll();
                    this.$message.error(this.$t('tips.not_fill_email'));
                }

            }
        }
    };
</script>

<style lang="less">
    #verifyEmail {
        .el-button.is-disabled, .el-button.is-disabled:focus, .el-button.is-disabled:hover {
            cursor: pointer;
            border: none;
            background: linear-gradient(to right, #97DB30, #319E55);
        }


        & .el-input.el-input--small.el-input-group.el-input-group--append {
            position: relative;
        }

        & .el-button.el-button--default {
            top: 0;
            left: 0;
            width: 100%;
            height: 2.5rem;
            border-radius: 1.25rem;
            font-size: 1rem;
            color: white;
            margin: 0;
            font-family: Roboto-Light, sans-serif;
            background: linear-gradient(to right, #97DB30, #319E55);
        }

        & .el-input-group__append {
            position: absolute;
            right: 0;
            top: 0;
            background: linear-gradient(to right, #97DB30, #319E55);
            width: 11rem;
            height: 2.5rem;
            border-radius: 1.25rem;
            padding: 0;
        }

        & .fontSize12 {
            font-size: 1.2rem;
        }

        & .el-input--small .el-input__inner {
            height: 2.5rem;
        }

        & .el-form-item__label {
            font-size: 1.2rem;
        }

        & .el-input__inner {
            background-color: #F3F3F3;
            border-radius: 1.25rem;
            border: 1px solid #F3F3F3;
            font-size: 1rem;
        }

        .el-input__inner:focus {
            border-color: #319E55
        }

        & .el-form-item {
            margin-bottom: 28px
        }


    }
</style>
