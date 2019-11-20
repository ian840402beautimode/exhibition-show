//抓取radio 選取狀態
export let radioStatus = (radioName) => {
    let status,
        radioStatus = $('input[name='+ radioName +']').prop('checked');
    if(radioStatus){
        status = 1;
    }else{
        status = 0;
    }
    return status;
}

//設定radio 選擇狀態
export let setRadioStatus = (idName, status) => {
    if(status == 1){
        idName.find('input.item__radio[value="1"]').attr('checked', true);
        idName.find('input.item__radio[value="0"]').attr('checked', false);
    }else{
        idName.find('input.item__radio[value="1"]').attr('checked', false);
        idName.find('input.item__radio[value="0"]').attr('checked', true);
    }
}