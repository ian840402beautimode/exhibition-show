export function imageUploadPriview(idName) {
  showImageInfo(idName);
  idName.closest('.controller').find('.info__close').click(function(){
    var dom = $(this);
    clearImageInfo(dom);
    dom.closest('.controller').find('.button__input')[0].value = "";
    dom.closest('.controller').find('.controller__hidden-input').val('');
  });
}

function showImageInfo(idName){
  var dom;
  $(idName).bind('change', function(){
    var file = this.files[0], sizeimit = 1500000;
    dom = $(this).closest('.admin-item-block__content__image-upload');
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
            dom.find('.controller__info').addClass('show');
            dom.find('.info__content').text(fileName);
            dom.find(".controller__hidden-input").val(fileName).trigger("change");   // 觸發條件從keyup改成change
            var reader = new FileReader();
            reader.onload = function (e) {
              dom.addClass('show');
              dom.find('.picture').append('<img src="'+ e.target.result +'"/>');
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
  dom.closest('.admin-item-block__content__image-upload').find('.picture').empty();
  dom.closest('.admin-item-block__content__image-upload').find('.picture img').attr('src','');
  dom.closest('.admin-item-block__content__image-upload').removeClass('show');
  dom.closest('.admin-item-block__content__image-upload').find('.info__content').text('');
  dom.closest('.admin-item-block__content__image-upload').find('.controller__info').removeClass('show');
}