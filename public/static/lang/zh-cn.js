module.exports = {
    signType: {
        corp: '企业',
        emp: '员工',
        individual: '个人',
        corpBt: '签署企业CLA',
        empBt: '签署员工CLA',
        individualBt: '签署个人CLA',
        guideTitle: 'CLA签署指引',
        mobileGuideTitle: '签署指引',
        corpStep1_1: '如果你是作为一家想要为社区贡献代码的企业来签署CLA，请点击“',
        corpStep1_2: '”进入CLA签署页面',
        corpStep2: '填写各项信息，提交签署',
        corpStep3: '企业将接收到社区发出的签署企业CLA的文件，请按照邮件中的提示完成后续签署',
        corpStep4: '社区管理员审批企业签署的企业CLA文件，开通企业在该社区的Administrator账号',
        corpStep5: '企业收到包含Administrator账号的邮件，企业CLA签署成功',
        corpStep6_1: '企业登录',
        corpStep6_2: '增加员工管理员，下载企业CLA文件等',
        empStep1_1: '如果你是作为一家已经签署了企业CLA的企业的员工共来签署CLA，请点击“',
        individualStep1_1: '如果你是一名独立开发者或者你所在的企业还未与社区签署企业CLA，请点击“',
        claSignPlatform: 'CLA签署平台',
        empStep2: '同意CLA签署平台对您授权账号的访问授权跳转至员工CLA签署页面',
        empStep4: '等待您公司在该社区的管理员对您提交的签署进行激活',
        empStep5: '收到员工CLA签署生效的邮件签署完成',
        individualStep2: '同意CLA签署平台对您授权账号的访问授权跳转至个人CLA签署页面',
        individualStep4: '收到个人CLA签署生效的邮件签署完成',
        admin_platform: '超级管理员后台',
        not_support_corp: '暂不支持企业签署',
        not_support_emp: '暂不支持员工签署',
        not_support_individual: '暂不支持个人签署'
    },
    signPage: {
        claTitle: '签署CLA',
        corp: '企业',
        emp: '员工',
        individual: '个人',
        requireText: '为必填项',
        checkBoxText1: '我已经阅读了',
        privacy: '隐私政策',
        checkBoxText2: '，并同意在香港通过',
        claSignPlatform: 'CLA签署平台',
        checkBoxText3: '处理我的数据',
        verifyCode: '验证码',
        sendCode: '发送验证码',
        reSendCode: '{second}秒重发',
        sign: '签 署',
        verifyCodeHolder: '请输入验证码',
        holder: '请输入{title}',
        sendCodeTip: '发送验证码到邮箱'
    },
    tips: {
        failedTitle: '失败',
        successTitle: '成功',
        warningTitle: '警告',
        dialogBt: '确定',
        no_cla_binding_corp: '该组织没有可用的企业贡献者许可协议',
        no_cla_binding_emp: '该组织没有可用的员工贡献者许可协议',
        no_cla_binding_individual: '该组织没有可用的个人贡献者许可协议',
        has_signed: '您已签署过这份贡献者许可协议',
        corp_has_signed: '该企业已经签署过这份贡献者许可协议',
        invalid_parameter: '参数无效，无法签署',
        no_corp_manager: '你所属得公司暂未签署企业CLA或者尚未添加任何管理员。你无法进行员工签署',
        has_not_signed: '该公司尚未签署',
        invalid_token: 'Token已过期，请重新登录',
        missing_token: 'Token无效，请重新登陆',
        unknown_token: 'Token无效，请重新登陆',
        unauthorized_token: 'Token权限不匹配，请重新授权登陆',
        uncompleted_signing: '该公司的签署流程还未完成',
        unknown_email_platform: '目前不支持此类型的邮箱',
        failed_to_send_email: '发送邮件失败',
        wrong_verification_code: '验证码错误',
        restricted_email_suffix: '受限的电子邮件域名,请使用公司的专属邮箱',
        expired_verification_code: '验证码已过期',
        pdf_has_not_uploaded: '未上传组织的签名',
        num_of_corp_managers_exceeded: '管理员人数超出限制',
        corp_manager_exists: '名称已存在',
        not_same_corp: '电子邮件不属于该公司',
        not_ready_to_sign: '组织尚未就绪',
        system_error: '系统错误，请重试',
        unknown_error: '未知错误，请联系社区管理员或提交YAML',
        title_type_repeat: '填充了相同的标题或类型',
        individual_sign: '感谢你的签署',
        corp_sign: '已向您发送电子邮件，请按照邮件中的步骤完成签署',
        emp_sign: '已向您发送电子邮件，请检查签署文件',
        invalid_telephone_num: '无效的电话号码',
        not_fill_telephone_num: '请输入电话号码',
        not_fill_address: '请输入地址',
        not_fill_fax: '请输入传真',
        invalid_email: '无效的电子邮件',
        sending_email: '已向您的邮箱发送了验证码',
        not_fill_email: '请输入正确的电子邮箱',
        no_public_email_1: '抱歉，无法从您的{platform}帐户获取提交代码的电子邮件，请',
        click_here: '点击此处',
        gitee_no_public_email_2: '进入邮箱设置页面，取消勾选不公开我的邮箱地址选项，如果您还未为你的账户绑定任何邮箱，请点击新增，绑定邮箱后再试',
        github_no_public_email_2: '进入邮箱设置页面，取消勾选保持我的邮箱地址私有选项，如果您还未为你的账户绑定任何邮箱，请点击新增，绑定邮箱后再试',
        not_authorize_email: '你没有授权我们访问你的电子邮件，请检查并重试',
        not_authorize_group: '你没有授权我们访问你的组织信息，请授权后再试',
        refuse_authorize: '您未同意授权访问您的{platform}账户信息，无法继续签署',
        lang_error: '语言错误',
        fill_name: '请输入姓名',
        fill_corp_name: '请输入公司名称',
        fill_representative_title: '请输入代表职务',
        fill_representative_name: '请输入代表姓名',
        fill_date: '请输入日期',
        fill_verification_code: '请输入验证码',
        review_privacy: '请查看隐私声明',
        not_fill_id: '请输入ID',
        invalid_account_or_pw: '旧密码无效，请重试',
        fill_pwd: '请输入密码',
        id_pwd_err: '账号或者密码错误，请重试',
        same_email: '不能填写相同的邮箱，请检查后重试',
        same_id: '不能填写相同的ID，请检查后重试',
        exits_email: '邮箱已存在，请检查后重试',
        exits_id: 'ID已存在，请检查后重试',
        invalid_id: 'ID格式错误，ID只能包含大小写字母、数字、_和.',
        paste_individual_link: '请粘贴应用于个人签署的CLA链接',
        select_individual_language: '请选择应用于个人签署的CLA的语言',
        paste_corp_link: '请粘贴应用于企业签署的CLA链接',
        select_corp_language: '请选择应用于企业签署的CLA的语言',
        authorized_email: '请为组织或仓库授权一个邮箱用于与签署者通讯',
        upload_signature_file: '请上传代表社区的签名的PDF文件',
        not_upload_file: '暂未上传文件，请上传后再试',
        no_file_can_download: '暂无可用文件',
        no_lang: '暂不支持{language}，请在右上角切换语言后再试',
        no_pdf_of_corp: '暂未上传企业签署得PDF文件，请上传后再试',
        not_pdf: '上传的文件必须是 PDF!',
        file_too_large: '上传的文件太大了!',
        cla_exists: '{lang}协议已存在，请选择其他语言后再试',
        email_system_error: '邮箱授权失败，请稍后再试',
        error_parsing_api_body: '参数错误，请重试',
        unmatched_email: '签署的邮箱与授权账号邮箱不相同',
        unmatched_user_id: '签署的ID与授权账号ID不相同',
        no_link: '该社区尚未绑定CLA',
        unmatched_cla: '当前的CLA不是最新的CLA，请刷新页面后重试',
        link_exists: '该社区已经存在绑定信息',
        checkRepoMessage: '您输入的仓库不属于该组织或者该仓库为私有仓库或者该仓库不存在，是否继续？',
        cla_is_used: '该CLA已经被使用',
        go_to_sign_employee_cla: '你所在的公司已经签署企业CLA，所以你只能签署员工CLA',
        page_error: '页面错误，请关闭页面重新打开',
        subemailErr: '请输入符合邮箱扩展规则的子邮箱',
        noSession: '系统错误，请刷新邮箱域名列表后再试',
        sameEmailSuffix: '邮箱域名已存在，请勿重复添加',
        no_link_or_unsigned: '无效的绑定信息'
    },
    header: {
        home: '首页',
        manager: '管理员',
        emp: '员工',
        SubEmail: '邮箱域名',
        createManager: '创建管理员',
        resetPwd: '重置密码',
        corpCla: 'CLA',
        loginOut: '退出'
    },
    corp: {
        number: '序号',
        id: '账号',
        name: '姓名',
        email: '邮箱',
        role: '角色',
        operation: '操作',
        delete: '删除',
        cancel: '取消',
        batch: '多选',
        deleteTips: '确定删除？',
        completeDeleteTips: '确认彻底删除？',
        yes: '是',
        no: '否',
        submit: '提交',
        reset: '重置',
        manager_limit: '最多创建{limit}个管理员',
        fill_complete: '请填写完整的信息',
        input_old_pwd: '请输入旧密码',
        input_new_pwd: '请输入新密码',
        input_new_pwd_again: '请再次输入新密码',
        newPwd_diff_with_oldPwd: '新密码不能与旧密码相同',
        newPwd_diff: '两次输入的密码不同',
        pwd: '密码',
        forget_pwd: '忘记密码？',
        login_in: '登陆',
        inactive: '未激活',
        active: '已激活',
        no_data: '暂无数据',
        manager_email_same_with_admin: '不能添加超级管理员为员工管理员',
        select_community: '请选择要管理的社区',
        select_placeholder: '请选择',
        newPwd_length_err: '新密码长度必须是6-16位',
        newPwd_contains_Illegal_character: '新密码包含非法字符',
        email_input_holder: '请输入邮箱',
        find_pwd_step1: '验证邮箱',
        find_pwd_step2: '重置密码',
        find_pwd_step3: '完成',
        resetSuccess: '重置成功',
        goToLogin: '去登陆',
        managerName: '管理员姓名',
        managerEmail: '管理员邮箱',
        managerId: '管理员用户名',
        managerIdDesc: '管理员用于登陆系统的ID，可自定义且不能重复',
        search: '查询',
        corpName: '公司名称',
        addSubEmail: '添加邮箱域名',
        subEmailDesc: '在下方的输入框内输入一个包含你需要添加的域名的邮箱，通过验证之后，即可添加成功，员工就能使用与子邮箱域名相同的邮箱进行员工签署'
    },
    index: {
        org_login: '开源社区管理员',
        corp_login: '企业管理员',
        org_bt_tip: '如果您是开源社区管理员，请单击此按钮登录并管理签署信息',
        corp_bt_tip: '如果您是公司管理员，请单击此按钮登录并管理签署信息'
    },
    org: {
        corp_signed_pdf: '企业已完成签名的PDF',
        resend_tip: '如果企业签署之后未收到包含需要企业签名的PDF的邮件，你可以点击这里重新发送',
        configure_bt: '配置CLA',
        linked_tab: '已绑定的仓库',
        repository: '仓库',
        organization: '组织',
        unlink: '解绑',
        operation: '操作',
        toSign: '签署',
        copy_address: '复制地址',
        toDetail: '详情',
        unlink_p: '你确定想要解绑?',
        unlink_will: '解绑将会...',
        unlink_desc1: '删除仓库/组织中的CLA assistant webhook',
        unlink_desc2: '删除组织/仓库与CLA的绑定',
        keep_it: '取消',
        select_file: '选择文件',
        upload: '上传',
        corporation_name: '企业名称',
        signed_corporation: '已签署的企业',
        create_administrator: '创建超级管理员',
        resend_email: '重发邮件',
        individual_cla: '个人CLA',
        toLanguage: '语言',
        modify_field: '调整字段',
        delete_cla: '删除CLA',
        add_cla_for_other_language: '添加其他语言的CLA',
        corporation_cla: '企业CLA',
        download: '下载',
        preview: '预览',
        upload_file: '上传文件',
        select: '选择',
        resend_email_message: '确定重发邮件?',
        to_email: '邮箱',
        upload_loading_text: '正在上传...',
        file_limit_tips: '只能上传一个文件',
        remove_file_tips: '确定删除{fileName}？',
        success: '成功',
        cancel_remove: '取消',
        confirm_remove: '确定',
        config_cla_select_org_tile: '选择一个组织或者仓库',
        config_cla_select_org: '选择一个需要配置CLA的组织',
        config_cla_select_org_placeholder: '选择组织',
        config_cla_select_org_alias: '你需要为选择的组织起一个别名,如果不填写，别名默认与组织名相同',
        config_cla_select_org_alias_placeholder: '输入一个组织的别名',
        config_cla_select_repo: '如果你想为选择的组织下的某一个特定仓库配置CLA, 就请输入仓库名. 如果不需要, 请忽略',
        config_cla_select_repo_placeholder: '请输入仓库名',
        next_step: '下一步',
        previous_step: '上一步',
        config_cla_email_title: '邮箱',
        config_cla_email_authorize: '授权一个邮箱用于与签署者联系',
        config_cla_email_placeholder: '点击授权电子邮件',
        config_cla_email_platform_select: '你需要为你的组织授权一个邮箱',
        config_cla_email_platform_select_placeholder: '选择邮箱类型',
        config_cla_email_authorize_desc: 'CLA系统将...',
        config_cla_email_authorize_desc1: '通过该邮箱为企业发送超级管理员账号',
        config_cla_email_authorize_desc2: '通过该邮箱给企业发送包含签署文档的邮件',
        config_cla_email_authorize_desc3: '通过该邮箱给企业管理员发送员工签署状态改变的邮件',
        config_cla_paste_url_title: '粘贴一个CLA文件的地址',
        config_cla_paste_url_title_tooltips: '粘贴一个在仓库中的CLA文件的原始数据地址',
        config_cla_paste_individual_url: '个人CLA地址',
        config_cla_individual_url_desc: '你需要粘贴一条来自{platform}公开仓库的应用于个人CLA的PDF文件的下载地址',
        config_cla_url_placeholder: '粘贴一个地址',
        config_cla_individual_lang: '个人CLA语言',
        config_cla_select_lang: '选择语言',
        config_cla_corp_url: '如果你需要让你的设置支持企业签署，请填写以下信息，如果不需要，请忽略',
        config_cla_paste_corp_url: '企业CLA地址',
        config_cla_corp_url_desc: '你需要粘贴一条来自{platform}公开仓库的应用于企业CLA的PDF文件的下载地址',
        config_cla_corp_lang: '企业CLA语言',
        config_cla_download_empty_signature_tips: '下载原始文件之前，请先选择企业CLA语言',
        config_cla_fields: '编辑CLA的字段',
        config_cla_fields_desc: '这些信息是你希望贡献者再签署协议的时候需要填写的信息，标题和类型是必填的，否则将设置失败',
        config_cla_individual_metadata: '用于个人签署的字段',
        config_cla_individual_metadata_desc: '配置用于个人签署者和员工签署者的字段信息',
        config_cla_fields_title_placeholder: '选择标题',
        config_cla_fields_type_placeholder: '选择类型',
        config_cla_fields_desc_placeholder: '描述',
        config_cla_fields_required: '必填',
        config_cla_corp_metadata: '用于企业签署的字段',
        config_cla_corp_metadata_desc: '配置用于企业签署者的字段信息',
        config_cla_field_type_name: '姓名',
        config_cla_field_type_corporationName: '企业名称',
        config_cla_field_type_date: '日期',
        config_cla_field_type_telephone: '电话',
        config_cla_field_type_address: '地址',
        config_cla_field_type_email: '邮箱',
        config_cla_field_type_fax: '传真',
        config_cla_field_individual_default_title1: '姓名',
        config_cla_field_individual_default_title1_desc: '你的名字',
        config_cla_field_individual_default_title2: '邮箱',
        config_cla_field_individual_default_title2_desc: '你的邮箱',
        config_cla_field_corp_default_title1: '授权代表',
        config_cla_field_corp_default_title1_desc: '授权代表的姓名',
        config_cla_field_corp_default_title2: '企业名称',
        config_cla_field_corp_default_title2_desc: '企业名称',
        config_cla_field_corp_default_title3: '邮箱',
        config_cla_field_corp_default_title3_desc: '企业的邮箱',
        config_cla_field_corp_default_title4: '职位',
        config_cla_field_corp_default_title4_desc: '你在企业中的职位',
        config_cla_check_org_repo_title: '组织和仓库',
        config_cla_check_org_title: '组织',
        config_cla_check_org_alias_title: '组织别名',
        config_cla_check_repo_title: '仓库',
        config_cla_check_email_title: '邮箱',
        config_cla_check_url_title: 'CLA文件地址',
        config_cla_check_fields_title: 'CLA的字段',
        config_cla_check_fields_title_title: '标题',
        config_cla_check_fields_type_title: '类型',
        config_cla_check_fields_describe_title: '描述',
        config_cla_check_fields_require_title: '必填',
        submit: '提交',
        signature_file_size: '只能上传pdf/PDF文件，且不超过{max_size_m}M',
        addIndividualCla: '添加个人CLA',
        addCorpCla: '添加企业CLA',
        invalidSignature: '删除的企业',
        reduction: '还原',
        deleteCompletely: '彻底删除',
        date: '日期',
        cla_language: 'CLA语言',
        not_complete: '未完成',
        complete: '已完成',
        cla_format_err: 'CLA文件必须是PDF'
    }
};
