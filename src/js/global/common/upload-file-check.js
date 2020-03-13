/* 檢查圖片是否為base64
/*
/* fileString type = string
/* return string : ""
/**/

export let uploadImageCheck = fileString => {
    let imageReg = /base64/;
    let file = fileString;

    file = imageReg.test(file) ? file : "";

    return file;
}