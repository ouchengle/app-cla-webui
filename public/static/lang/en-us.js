module.exports = {
    signType: {
        corp: "Corporation",
        emp: "Employee",
        individual: "Individual",
        corpBt: " Sign As Corporation ",
        empBt: " Sign As Employee ",
        individualBt: " Sign As Individual ",
        guideTitle: "Signing CLA Guide for",
        corpStep1_1: "Click",
        corpStep1_2: "to go to the CLA signing page.",
        corpStep2: "Fill in the information and submit for signature.",
        corpStep3: "Receive an e-mail from the community to sign the enterprise CLA. Follow the instructions in the e-mail to sign the CLA.",
        corpStep4: "The community administrator approves the CLA file signed by the enterprise and enables the administrator account of the enterprise in the community.",
        corpStep5: "Receive an e-mail containing the administrator account, indicating that the CLA is signed successfully.",
        corpStep6_1: "Log in to the",
        corpStep6_2:"add an employee as administrator, and download the enterprise CLA file.",
        claSignPlatform: " CLA signing platform ",
        empStep2:'Agree to access your Gitee account on the CLA signing platform and go to the employee CLA signing page.',
        empStep4:'Wait for the administrator of your enterprise in the community to activate the signed CLA file you submitted.',
        empStep5:'Receive an e-mail indicating that the CLA is signed and activated.',
        individualStep2:'Agree to access your Gitee account on the CLA signing platform and go to the individual CLA signing page.',
        individualStep4:'Receive an e-mail indicating that the the CLA is signed and activated.',

    },
    signPage: {
        claTitle: "Contributor License Agreement",
        corp: "Corporation ",
        emp: "Employee ",
        individual: "Individual ",
        requireText: "require field.",
        checkBoxText1: "I have read the",
        privacy: " Privacy Policy ",
        checkBoxText2: "and hereby consent to the processing of my data by",
        claSignPlatform: " CLA signing platform ",
        checkBoxText3: "in Hong Kong.",
        sendCode:'send code',
        reSendCode:'{second}s can resend',
        sign:'SIGN',
    },
    tips:{
        failedTitle:'Failed',
        successTitle:'Successfully',
        dialogBt:'OK',
        no_cla_binding:'There is no CLA to sign for organization.',
        has_signed:'The CLA has been signed before.',
        invalid_parameter:'The parameter is invalid and cannot be signed',
        no_corp_manager:'Your company has not added any managers for this project.You can\'t sign',
        has_not_signed:'Your corporation has not signed.',
        invalid_token:'Token expired, please login again.',
        missing_token:'Token invalid, please login again.',
        unknown_token:'Token invalid, please login again.',
        uncompleted_signing:'The signing process of corporation is not finish yet.',
        unknown_email_platform:'This type of mailbox is not supported at the moment',
        failed_to_send_email:'Failed to send mail.',
        wrong_verification_code:'Verification code error.',
        expired_verification_code:'Verification code expired.',
        pdf_has_not_uploaded:'Signature of organization is not uploaded.',
        num_of_corp_managers_exceeded:'The number of managers exceeds the limit.',
        corp_manager_exists:'The name is exists already.',
        not_same_corp:'Email does not belong to the corporation.',
        not_ready_to_sign:'The organization is not ready.',
        system_error:'System error, please try again',
        title_type_repeat:'Same titles or types are filled.',
        individual_sign:'Thanks for your sign.',
        corp_sign:'An email has been sent to you. Please complete the signing according to the steps in the email.',
        emp_sign:'An email has been sent to you. Please take a look to review the signing.',
        invalid_telephone_num:'An invalid telephone number.',
        not_fill_telephone_num:'Please enter the telephone number of corporation',
        not_fill_address:'Please enter the address of corporation',
        invalid_email:'An invalid E-mail address.',
        sending_email:'A verification code is sent to your Email.',
        not_fill_email:'Please enter the Email.',
        not_commit_email:'Sorry, it is failed to fetch the email for committing code from your {platform} account. Please check the email setting and try again.',
        not_authorize_email:'You didn\'t authorize us to access your email. Please check and try again.',
        lang_error:'Language wrong',
        fill_name:'Please input name',
        fill_corp_name:'Please enter the name of corporation.',
        fill_representative_title:'Please enter the title of representative.',
        fill_representative_name:'Please enter the name of representative.',
        fill_date:'Please input date',
        fill_verification_code:'Please enter the verification code.',
        review_privacy:'Please review the privacy statement.',
        not_fill_id:'Please enter the id.',
        invalid_account_or_pw:'The old password is invalid, please try again.',
    },
    header:{
        home:'Home',
        manager:'Manager',
        emp:'Employee',
        createManager:'Create Manager',
        resetPwd:'Reset Password',
        corpCla:'CLA',
        loginOut:'Login out',
    },
    corp:{
        id:'ID',
        name:'Name',
        email:'Email',
        role:'Role',
        operation:'Operation',
        delete:'delete',
        cancel:'cancel',
        batch:'Batch',
        deleteTips:'Are you sure to delete ?',
        yes:'Yes',
        no:'No',
        submit:'Submit',
        manager_limit:'Create up to {limit} users',
        fill_complete:'Please fill in the complete information.',
        input_old_pwd:'please input old password',
        input_new_pwd:'please input new password',
        input_new_pwd_again:'Please enter the new password again',
        newPwd_diff_with_oldPwd:'The new password cannot be the same as old one.',
        newPwd_diff:'The repeated password is not the same as the first one.',
    },

};
