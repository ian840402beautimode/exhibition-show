//excel上傳 有顯示送出按鈕
export function excelUplaod(idName,domName){
    $(idName).find('input[name="'+ domName +'"]').change(function(e){
        let fileNmae = e.target.files[0].name;
        if(fileNmae){
            $(this).closest('.excel-block__flex').find('.excel-filename').addClass('show');
            $(this).closest('.excel-block__flex').find('.excel-filename').text(fileNmae);
            $(this).closest('.excel-block').find('.excel-block__send').addClass('show');
        }
    });
}

// 無顯示送出按鈕
export function excelUplaod2(idName,domName){
    $(idName).find('input[name="'+ domName +'"]').change(function(e){
        let fileNmae = e.target.files[0].name;
        if(fileNmae){
            $(this).closest('.admin-input-file__content').find('.admin-input-file__content__file-name').text(fileNmae);
        }
    });
}

