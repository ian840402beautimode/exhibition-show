import { editSuccess, deleteSuccess, deleteFail } from '../common/sweetalert.js';
// 列表勾選功能
export function listCheckboxClick() {
    $('body').on('click','.admin-table-first-checkbox',function(){
        let checkAll = $(this)[0].checked;
        $('.admin-item-checkbox').each(function(){
            this.checked = checkAll;
            let checkStatus = this.checked;
            showShowHideDeleteController(checkStatus);
        })
    });
    $('body').on('click','.admin-item-checkbox.item-checkbox', function(){
        let checkStatus = this.checked;
        if (!getSingleCheckStatus()) {
            $('.admin-table-first-checkbox').prop('checked', getSingleCheckStatus())
        }
        showShowHideDeleteController(getSingleCheckStatus());
    });
    
}


// 列表api click event
export const listCheckboxClickApiEvent = (apiAllStatus, apiAllDelete) => {
    $('.all-show-btn').on('click', function (e) {
        let data = getListId('show');
        apiAllStatus(data).then(res => {
            editSuccess()
        }).catch(err =>{})
    })
    $('.all-hide-btn').on('click', function (e) {
        let data = getListId('hide');
        apiAllStatus(data).then(res => {
            editSuccess()
        }).catch(err =>{})
    })
    $('.all-delete-btn').on('click', function (e) {
        let data = getListId('delete');
        console.log(data);
        if (data.some(item => item.count > 0)) {
            deleteFail();
        }else if(data.some(item => item.bannerCount > 0)){
            console.log('bannersccount');
            deleteFail();
        } else {
            const allDelete = () => {
                apiAllDelete(data).then((res) => { console.log(res);  }).catch(err => { console.log(err) })
            }
            deleteSuccess(allDelete)
        }
    })
}

// 列表取得修改編號

export const getListId = (mode) => {
    const dom = $('.item-checkbox')
    let data = []
    switch (mode) {
        case 'hide':
            for (let i = 0; i < dom.length; i++) {
                if (dom[i].checked) {
                    data.push({ id:$(dom[i]).data('id'), display: 0 })
                }
            }
            break;
        case 'show':
            for (let i = 0; i < dom.length; i++) {
                if (dom[i].checked) {
                    data.push({ id:$(dom[i]).data('id'), display: 1 })
                }
            }
            break;
        case 'delete':
            for (let i = 0; i < dom.length; i++) {
                if (dom[i].checked) {
                    data.push({
                        id: $(dom[i]).data('id'),
                        count: $(dom[i]).data('count'),
                        bannerCount: $(dom[i]).data('bannersccount')
                    })
                }
            }

            break;
    }
    return data
}

function getSingleCheckStatus(){
    for (let i = 0; i < $('.item-checkbox').length; i++) {
        if($('.item-checkbox')[i].checked){
            return true
        }
    }
    return false
}

function showShowHideDeleteController(checkStatus) {
    if(checkStatus){
        $('.event-list-show-hide-delete-button').addClass('show');
    }else{
        $('.event-list-show-hide-delete-button').removeClass('show');
    }
}