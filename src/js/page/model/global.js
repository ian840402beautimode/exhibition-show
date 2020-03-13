// 後台Head資訊功能
export let viewAdminHeader = (title,dataSystem) => {
    // favicon
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    // link.href = dataSystem.icon.image;
    document.getElementsByTagName('head')[0].appendChild(link);

    // header資訊
    $(document).attr('title',title);
    $("#admin-header-block").find(".page-title").text(title);
    // $("#admin-header-block").find(".content-logo").append("<img src='"+dataSystem.logo.image+"'>");
}