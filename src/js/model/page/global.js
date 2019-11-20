// 後台Head資訊功能
export let viewAdminHeader = (title,dataSystem) => {
    // favicon
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = dataSystem.icon.image;
    document.getElementsByTagName('head')[0].appendChild(link);

    // header資訊
    $(document).attr('title',title);
    $("#admin-header-block").find(".page-title").text(title);
    $("#admin-header-block").find(".content-logo").append("<img src='"+dataSystem.logo.image+"'>");
}

export let frontendPageInfo = (title,dataSystem,dataContact) => {
    let url = location.href;

    // favicon
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = dataSystem.icon.image;
    document.getElementsByTagName('head')[0].appendChild(link);

    // Logo
    $("#logo__image").append("<img src='"+dataSystem.logo.image+"'>");

    // MetaTag
    $('meta[name="keywords"]').attr('content', dataSystem.seo.keywords);
    $('meta[name="description"]').attr('content', dataSystem.seo.description);
    $('meta[property="og:title"]').attr('content', title);
    $('meta[property="og:site_name"]').attr('content', dataSystem.title);
    $('meta[property="og:description"]').attr('content', dataSystem.seo.description);
    $('meta[property="og:url"]').attr('content', url);

    // 網站標題
    $(document).attr('title', dataSystem.seo.title+"-"+title);

    // Header Top
    $("#header-phone-item").text(dataContact[0].phone);
    $("#header-email-item").text(dataContact[0].email);
    $("#header-phone-item_mobile").text(dataContact[0].phone);
    $("#header-email-item_mobile").text(dataContact[0].email);

    // Footer
    $("#footer-phone-item").text(dataContact[0].phone);
    $("#footer-email-item").text(dataContact[0].email);
    $("#footer-address-item").text(dataContact[0].address);
}