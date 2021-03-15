<template>
    <div class="margin-top-5rem margin-bottom-3rem">
        <Step class="margin-top-5rem margin-bottom-2rem" :steping="1"></Step>
        <el-form class="findPwdBox" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0">
            <el-form-item prop="newPassword">
                <el-input :placeholder="$t('corp.input_new_pwd')" clearable=""
                          type="password"
                          v-model="ruleForm.newPassword"></el-input>
            </el-form-item>
            <el-form-item prop="newPasswordAgain">
                <el-input :disabled="!haveNewPwd" :placeholder="$t('corp.input_new_pwd_again')" clearable=""
                          type="password"
                          v-model="ruleForm.newPasswordAgain"></el-input>
            </el-form-item>
            <el-form-item>
                <button class="reset_pwd_button" type="button" @click="submitForm('ruleForm')">
                    {{$t('corp.submit')}}
                </button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
    import * as url from '../util/api'
    import http from '../util/_axios'
    import Step from '../components/FindPwdSteps'


    export default {
        name: "FindPassword",
        components: {
            Step,
        },
        watch: {
            '$i18n.locale'() {
                this.$refs['ruleForm'] && this.$refs['ruleForm'].fields.forEach(item => {
                    if (item.validateState === 'error') {
                        this.$refs['ruleForm'].validateField(item.labelFor)
                    }
                });
            },
        },
        data() {
            var validateNewPwd = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error(this.$t('corp.input_new_pwd')));
                } else if (value.length < PWD_MIN_LENGTH || value.length > PWD_MAX_LENGTH) {
                    callback(new Error(this.$t('corp.newPwd_length_err')));
                } else if (this.checkIllegalChar(value)) {
                    callback(new Error(this.$t('corp.newPwd_contains_Illegal_character')));
                } else {
                    this.haveNewPwd = true;
                    callback();
                }
            };
            var validateNewPwdAgain = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error(this.$t('corp.input_new_pwd_again')));
                } else if (value !== this.ruleForm.newPassword) {
                    callback(new Error(this.$t('corp.newPwd_diff')));
                } else {
                    callback();
                }
            };
            return {
                haveNewPwd: false,
                ruleForm: {newPassword: '', newPasswordAgain: ''},
                rules: {
                    newPassword: [{required: true, validator: validateNewPwd, trigger: ['blur', 'change']}],
                    newPasswordAgain: [{required: true, validator: validateNewPwdAgain, trigger: ['blur', 'change']}]
                },
            }
        },
        methods: {
            checkIllegalChar(str) {
                for (let char of str) {
                    if (char.charCodeAt() > PWD_MAX_ASCII || char.charCodeAt() < PWD_MIN_ASCII) {
                        return true
                    }
                }
                return false
            },
            submitNewPassword() {
                http({
                    url: url.submitNewPassword,
                    data: {email: this.$store.state.findPwdEmail, password: this.ruleForm.newPassword}
                }).then(res => {
                    console.log(res);
                    this.$router.push('/reset-done')
                }).catch(err => {
                    console.log(err);
                })
            },
            submitForm(formName) {
                console.log(formName);
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.submitNewPassword()
                    } else {
                        return false;
                    }
                });
            },
        },
    }
</script>

<style scoped lang="less">

</style>