//驗證表單
export function formValidate(formName, rulesObj, messagesObj, submitEvent){
    //將form字串轉物件
    $.fn.serializeObject = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    formName.find('.event-form-button').click(function(){
        formName.validate({
            rules: rulesObj,
            messages: messagesObj,
            submitHandler:function(){
                if(submitEvent != null){
                    submitEvent();
                }
                return false;
            },
            errorPlacement: function(error, element) {
                $(element).removeClass('error-message');
                $(element).after(error);
            },
            errorClass: "error-message"   
        })
    });
}