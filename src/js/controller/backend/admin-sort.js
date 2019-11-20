import { saveSuccess } from '../common/sweetalert.js';

/*  backend sort feature
/* 
/*  idname = string, jquery id
/*  ajax data = [{id,sort},....]
/*
/*  success: reload page
/**/

function adminSort(idname,apiFun) {
    let numberReg = /^[0-9]*$/;
    
    $(idname).on('click',function(){
        let item = $("table").find(".admin-item-sort");
        let itemArr = [];
        let rule = true;

        item.parents("td").removeClass('_error');

        for (let i = 0; i < item.length; i++) {
            if (!numberReg.test(item[i].value)) {
                $(item[i]).parents("td").addClass('_error');
            }
        }

        for (let i = 0; i < item.length; i++) {
            let cache = {id:"",sort:""};
            cache.id = $(item[i]).data("id");
            cache.sort = item[i].value;
            itemArr.push(cache);
            if (!numberReg.test(cache.sort)) {
                rule = false;
                break;
            }
        }

        if (rule) {
            $(this).off();
            apiFun(itemArr).then(result => {
                saveSuccess();
            }).catch(err =>{
                console.log(err);
            });
        }
    });
}

export { adminSort };