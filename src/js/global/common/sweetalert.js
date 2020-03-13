import Swal from 'sweetalert2';

/**
 * 網站所需提示視窗皆是使用sweetalert2
 * https://sweetalert2.github.io/
 */


/**
 * 儲存提示訊息
 */
export let saveSuccess = () => {
  Swal.fire({
    icon: 'success',
    text: '儲存成功!',
  }).then((response) => {
    window.location.reload();
  })
}

/**
 * 新增提示訊息
 */
export let creatSuccess = url => {
    Swal.fire({
        icon: 'success',
        text: '新增成功!',
    }).then((response) => {
      if (url !== undefined) {
        window.location = url;
      } else {
        window.location.reload();
      }
    })
}

/**
 * 編輯提示訊息
 */
export let editSuccess = url => {
    Swal.fire({
        icon: 'success',
        text: '編輯成功!',
    }).then((response) => {
      if (url !== undefined) {
        window.location = url;
      } else {
        window.location.reload();
      }
    })
}

/**
 * 刪除提示訊息
 */
export let deleteSuccess = function(deleteApi,url) {

    Swal.fire({
        title: '確定刪除嗎?',
        text: "刪除後將無法還原!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#dd3333',
        confirmButtonText: '確定刪除!',
        cancelButtonText: '取消',
      }).then((result) => {
        if (result.value) {
          deleteApi();
          Swal.fire({
            icon:'success',
            text:'刪除成功!'
          }).then(result => {
            if (url !== undefined) {
              window.location = url;
            } else {
              window.location.reload();
            }
          });
        }
      })
}

/**
 * 送出提示訊息
 */
export let submitSuccess = url => {
  Swal.fire({
    icon: 'success',
    text: '已傳送!',
  }).then((response) => {
    if (url !== undefined) {
      window.location = url;
    } else {
      window.location.reload();
    }
  })
}

/**
 * 送出提示訊息
 */
export let errorSuccess = (text) => {
  Swal.fire({
    icon: 'error',
    text: text,
  })
}