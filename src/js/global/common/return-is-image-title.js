//判斷是否有圖片title
export let isImageTitle = (imageTitle ,loadImageInfo) => {
    if(imageTitle == "" || imageTitle == null){
        //do nothing
    }else{
        loadImageInfo();
    }
}