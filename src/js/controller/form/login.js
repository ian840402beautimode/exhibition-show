$('#login-block').find('.item-login-button').click(function(){
    var _this = $('#login-block'),
        honeypotInputValue = _this.find('.input-block.ohnohoney input').val();
    switch (true) {
        case honeypotInputValue != "":
            //阻絕機器人
            _this.find('input').val('');
            alert('登入失敗');
            break;
        default: 
            //表單驗證
            _this.find('#item-login-form').validate({
                rules: {
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true
                    }
                },
                messages: {
                    email: {
                        required: "請輸入電子郵件",
                        email: "請輸入有效電子郵件"
                    },
                    password: {
                        required: "請輸入密碼"
                    }
                },
                submitHandler:function(form){
                    var emailValue = $(form).find('input[name="email"]').val(),
                        passwordValue = $(form).find('input[name="password"]').val(),
                        obj = {
                            email: emailValue,
                            password: passwordValue
                        };
                    loginAjax(obj);
                },
                errorPlacement:function(error, element){
                    $(element).closest('.item-input-block').find('.item-error').text("").addClass('error-color');
                    error.appendTo(element.closest('.item-input-block').find('.item-error')); 
                }
            })
            break;
    }
});

function loginAjax(obj){
    var email = "a122@gmail.com",
        password = "a122";
    var emailDom = $('#login-block #item-login-form').find('input[name="email"]'),
        passwordDom = $('#login-block #item-login-form').find('input[name="password"]');
    switch (true) {
        case obj.email != email && obj.password != password:
                emailDom.closest('.item-input-block').find('.item-error').text('email錯誤').addClass('error-color');
                passwordDom.closest('.item-input-block').find('.item-error').text('密碼錯誤').addClass('error-color');
            break;
        case obj.email != email:
                emailDom.closest('.item-input-block').find('.item-error').text('email錯誤').addClass('error-color');
                passwordDom.closest('.item-input-block').find('.item-error').text('Please enter your valid email password.').removeClass('error-color');
            break;
        case obj.password != password:
                passwordDom.closest('.item-input-block').find('.item-error').text('密碼錯誤').addClass('error-color');
                emailDom.closest('.item-input-block').find('.item-error').text('Please enter your valid email address.').removeClass('error-color');
            break;
        default:
                passwordDom.closest('.item-input-block').find('.item-error').text('Please enter your valid email password.').removeClass('error-color');
                emailDom.closest('.item-input-block').find('.item-error').text('Please enter your valid email address.').removeClass('error-color');
                emailDom.val("");
                passwordDom.val("");
                alert('登入成功');
            break;
    }
    
};