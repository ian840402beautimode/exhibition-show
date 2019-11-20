export let indexContactValidate = (apiFun) => {
    $('#contact_form').find('.form__submit').click(function(){
        $('#contact_form').validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                },
                title: "required",
                content: "required"
            },
            messages: {
                name: "請輸入姓名",
                phone: "請輸入電話號碼",
                email: {
                    required: "請輸入電子郵件",
                    email: "請輸入有效電子郵件"
                },
                title: "請輸入主旨",
                content: "請輸入詢問內容"
            },
            submitHandler:function(form){
                apiFun();
            },
            errorPlacement: function(error, element) {
                element.siblings('.block__error').css('margin-top','10px');
                error.appendTo(element.siblings('.block__error')); 
            },   
        })
    })
}