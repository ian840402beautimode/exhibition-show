import { errorSuccess } from '../../global/common/sweetalert.js';

$('#login-block').on('keypress', function(e) {
    if(e.which == 13){
        loginValidate();
    }
});
$('#login-block').find('.item-login-button').click(function(e){
    e.preventDefault();
    loginValidate();
});

function loginValidate() {
    var _this = $('#login-block'),
        honeypotInputValue = _this.find('.input-block.ohnohoney input').val();
    switch (true) {
        case honeypotInputValue != "":
            //阻絕機器人
            _this.find('input').val('');
            errorSuccess("登入失敗");
            break;
        default: 
            //表單驗證
            const accountValue = _this.find('input[name="account"]').val(), 
                    passwordValue = _this.find('input[name="password"]').val(),
                    data = {};
            switch (true) {
                case accountValue === "":
                    _this.find('.item-account-error').text('請輸入帳號').addClass('error-color');
                    break;
                case passwordValue === "":
                    _this.find('.item-password-error').text('請輸入密碼').addClass('error-color');
                    break;
                default:
                    _this.find('.item-account-error').text('');
                    _this.find('.item-password-error').text('');
                    const data = {
                        account: accountValue,
                        password: passwordValue
                    };
                    // loginAjax(data);
                    break;
            }
            
            break;
    }
}

function loginAjax(data){

    let cookieTime = 1/3;

    apiLoginPost(data).then(result => {
        Cookies.set('token', result.data.success.token, { expires: cookieTime });
        Cookies.set('user', result.data.user, { expires: cookieTime });
        Cookies.set('last_login', result.data.last_login_at, { expires: cookieTime });
        window.location = '/admin/index/edit';
    }).catch(error =>{
        console.log(error);
        errorSuccess("帳號密碼錯誤");
    });
    
};