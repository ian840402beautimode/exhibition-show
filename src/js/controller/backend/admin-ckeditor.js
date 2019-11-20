export let ckEditorEvent = (idName) => {
    CKEDITOR.replace( idName, {
        filebrowserBrowseUrl: '/plugins/ckfinder/ckfinder.html',
        filebrowserImageBrowseUrl: '/plugins/ckfinder/ckfinder.html?type=Images',
        filebrowserFlashBrowseUrl: '/plugins/ckfinder/ckfinder.html?type=Flash',
        filebrowserUploadUrl: '/plugins/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
        filebrowserImageUploadUrl: '/plugins/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
        filebrowserFlashUploadUrl: '/plugins/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'
    });
}
