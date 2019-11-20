export function imageUploadPriview(idName) {
    showImageInfo(idName);
    idName.closest('.imgae-upload__controller').find('.info__close').click(function(){
      var dom = $(this);
      clearImageInfo(dom);
      dom.closest('.imgae-upload__controller').find('.button__input')[0].value = "";
      dom.closest('.imgae-upload__controller').find('.item-image-file').val('');
    });
 }

 function showImageInfo(idName){
  var dom;
  $(idName).bind('change', function(){
    var file = this.files[0], sizeimit = 2048000;
    dom = $(this).closest('.admin-imgae-upload');
    //判斷檔案上傳視窗選擇or取消
    if(file){
      //判斷圖片size
      var fizeSize = Math.round(file.size / 1000)
      if(fizeSize <= sizeimit){
        if (this.files && this.files.length >= 0) {
          for (var i=0; i < this.files.length; i++) {
            //清除舊的圖片資料
            clearImageInfo(idName);
            var fileName = this.files[i].name;
            dom.find('.imgae-upload__controller__info').addClass('show');
            dom.find('.info__content').text(fileName);
            dom.find(".item-image-file").val(fileName).trigger("change");   // 觸發條件從keyup改成change
            var reader = new FileReader();
            reader.onload = function (e) {
              console.log(e);
              dom.addClass('show');
              dom.find('.imgae-upload__picture').append('<img src="'+ e.target.result +'"/>');
            }
            reader.readAsDataURL(this.files[i]);
          }
        }
      }else{
        var msg = "您所選擇的檔案大小為 " + fizeSize + " kb\n已超過上傳上限 " + sizeimit + " kb ";
        alert(msg);
      }
    }else{
      console.log('do nothing');
    }
  });
 }

 function clearImageInfo(dom){
  //清空內容
  dom.closest('.admin-imgae-upload').find('.imgae-upload__picture').empty();
  dom.closest('.admin-imgae-upload').find('.imgae-upload__picture img').attr('src','');
  dom.closest('.admin-imgae-upload').removeClass('show');
  dom.closest('.admin-imgae-upload').find('.info__content').text('');
  dom.closest('.admin-imgae-upload').find('.imgae-upload__controller__info').removeClass('show');
}

//網站資訊管理
imageUploadPriview($("#backend-system-edit-logo-upload"));
imageUploadPriview($("#backend-system-edit-icon-upload"));

//工廠介紹管理
 //機械設備
 imageUploadPriview($("#factory-device-item1-icon-upload"));
 imageUploadPriview($("#factory-device-item1-picture-upload"));
 imageUploadPriview($("#factory-device-item2-icon-upload"));
 imageUploadPriview($("#factory-device-item2-picture-upload"));
 imageUploadPriview($("#factory-device-item3-icon-upload"));
 imageUploadPriview($("#factory-device-item3-picture-upload"));
 //專業實驗室
 imageUploadPriview($("#factory-laboratory-picture1-upload"));
 imageUploadPriview($("#factory-laboratory-picture2-upload"));
 imageUploadPriview($("#factory-laboratory-picture3-upload"));
 imageUploadPriview($("#factory-laboratory-picture4-upload"));
 //工藝技術
 imageUploadPriview($("#factory-skill-item1-icon-upload"));
 imageUploadPriview($("#factory-skill-item1-picture-upload"));
 imageUploadPriview($("#factory-skill-item2-icon-upload"));
 imageUploadPriview($("#factory-skill-item2-picture-upload"));
 imageUploadPriview($("#factory-skill-item3-icon-upload"));
 imageUploadPriview($("#factory-skill-item3-picture-upload"));

//服務項目管理 
  //精密原型
  imageUploadPriview($("#service-prototype-item1-picture-upload"));
  imageUploadPriview($("#service-prototype-item2-picture-upload"));
  imageUploadPriview($("#service-prototype-item3-picture-upload"));
  imageUploadPriview($("#service-prototype-item4-picture-upload"));
  imageUploadPriview($("#service-prototype-item5-picture-upload"));
  //加工品項
  imageUploadPriview($("#service-machining-item1-icon-upload"));
  imageUploadPriview($("#service-machining-item2-icon-upload"));
  imageUploadPriview($("#service-machining-item3-icon-upload"));
  imageUploadPriview($("#service-machining-item4-icon-upload"));
  imageUploadPriview($("#service-machining-item5-icon-upload"));
  imageUploadPriview($("#service-machining-item6-icon-upload"));
  imageUploadPriview($("#service-machining-item1-picture-upload"));
  imageUploadPriview($("#service-machining-item2-picture-upload"));
  imageUploadPriview($("#service-machining-item3-picture-upload"));
  imageUploadPriview($("#service-machining-item4-picture-upload"));
  imageUploadPriview($("#service-machining-item5-picture-upload"));
  imageUploadPriview($("#service-machining-item6-picture-upload"));
  //快速模具
  imageUploadPriview($("#service-skill1-icon-upload"));
  imageUploadPriview($("#service-skill1-picture-upload"));
  //表面處理
  imageUploadPriview($("#service-skill2-icon-upload"));
  imageUploadPriview($("#service-skill2-picture-upload"));

//關於我們
 //關於飛碩
 imageUploadPriview($("#about-info-picture-upload"));
//首頁管理
  //slideshow
  
  //編輯頁-橫幅腰帶管理
  imageUploadPriview($("#index-edit-item1-icon-upload"));
  imageUploadPriview($("#index-edit-item2-icon-upload"));
  imageUploadPriview($("#index-edit-item3-icon-upload"));
  //編輯頁-關於我們管理
  imageUploadPriview($("#index-edit-about-picture1-upload"));
  imageUploadPriview($("#index-edit-about-picture2-upload"));
  //編輯頁-服務項目管理
    //item1
    imageUploadPriview($("#index-edit-service-item1-icon1-upload"));
    imageUploadPriview($("#index-edit-service-item1-picture-upload"));
    //item2
    imageUploadPriview($("#index-edit-service-item2-icon1-upload"));
    imageUploadPriview($("#index-edit-service-item2-picture-upload"));
    //item3
    imageUploadPriview($("#index-edit-service-item3-icon1-upload"));
    imageUploadPriview($("#index-edit-service-item3-picture-upload"));
    //item4
    imageUploadPriview($("#index-edit-service-item4-icon1-upload"));
    imageUploadPriview($("#index-edit-service-item4-picture-upload"));
  //編輯頁-工廠介紹管理
    //主圖
    imageUploadPriview($('#index-edit-factory-main-picture-upload'));
    //item1
    imageUploadPriview($("#index-edit-factory-item1-picture-upload"));
    //item2
    imageUploadPriview($("#index-edit-factory-item2-picture-upload"));
    //item3
    imageUploadPriview($("#index-edit-factory-item3-picture-upload"));
    //item4
    imageUploadPriview($("#index-edit-factory-item4-picture-upload"));

    imageUploadPriview($("#about-flow-picture-upload"));