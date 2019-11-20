import { uploadImageCheck } from '../../controller/common/upload-file-check.js';

// 後台抓取資料
export let transferAdminSystemForm = () => {
    let data = {
        logo: {
            image: uploadImageCheck($("#backend-system-edit-logo-upload-image").find("img").attr("src")),
            image_alt: "",
            image_title: $("#backend-system-edit-logo-upload-title").val()
        },
        icon: {
            image: uploadImageCheck($("#backend-system-edit-icon-upload-image").find("img").attr("src")),
            image_alt: "",
            image_title: $("#backend-system-edit-icon-upload-title").val()
        },
        seoData: {
            keywords: $("#seoKeyword").val(),
            description: $("#seoContent").val(),
            title: $("#seoTitle").val(),
        },
        mailData: {
            mail: $("#customerMail").val(),
            name: $("#customerName").val(),
            pass: $("#customerPassword").val(),
            smtp: $("#customerSMTP").val(),
            port: $("#customerPORT").val()
        },
    }

    return data;
}

// 後台回填資料
export let returnAdminSystemFrom = data => {
    
    if (data.logo.image_title !== "") {
        $("#amin-system-logo-block").find(".admin-imgae-upload,.imgae-upload__controller__info").addClass("show");
        $("#backend-system-edit-logo-upload-image").append("<img src='"+data.logo.image+"'>");
        $("#backend-system-edit-logo-upload-title").val(data.logo.image_title);
        $("#backend-system-edit-logo-upload-title").parents(".imgae-upload__controller").find(".info__content").text(data.logo.image_title);
    }
    if (data.icon.image_title !== "") {
        $("#amin-system-icon-block").find(".admin-imgae-upload,.imgae-upload__controller__info").addClass("show");
        $("#backend-system-edit-icon-upload-image").append("<img src='"+data.icon.image+"'>");
        $("#backend-system-edit-icon-upload-title").val(data.icon.image_title);
        $("#backend-system-edit-icon-upload-title").parents(".imgae-upload__controller").find(".info__content").text(data.icon.image_title);
    }
    $("#seoKeyword").val(data.seo.keywords);
    $("#seoContent").val(data.seo.description);
    $("#seoTitle").val(data.seo.title);
    $("#customerMail").val(data.mail.mail);
    $("#customerName").val(data.mail.name);
    $("#customerPassword").val(data.mail.pass);
    $("#customerSMTP").val(data.mail.smtp);
    $("#customerPORT").val(data.mail.port);
    $("#amin-system-logo-block").find(".admin-imgae-upload,.imgae-upload__controller__info").addClass("show");
}