function newsListChange() {
    let page = [],
        pager = [];

    let pageHash = location.hash,
        hashReg = /^#/;
    
    pageHash = Number(pageHash.replace(hashReg,""));
    
    $("#news-list-block").find(".news-list").each(function(){
        page.push($(this));
    })

    $("#news-list-block").find(".pager-item").each(function(){
        pager.push($(this));
    })


    // 根據網址的hashTag 決定目前是哪一個頁面
    $("#news-list-block").find(".news-list").removeClass("_active");
    $("#news-list-block").find(".pager-item").removeClass("_clicked _pager-on");
    
    if (pager.length > 2) {     //判斷有幾個pager 並決定哪些需要顯示
        if (pageHash === "" || pageHash === 0) {
            $(page[0]).addClass("_active");
            $(pager[0]).addClass("_clicked _pager-on");
            $(pager[1]).addClass("_pager-on");
            $(pager[2]).addClass("_pager-on");
        } else if (pageHash === Number(pager.length-1)) {
            $(page[pageHash]).addClass("_active");
            $(pager[pageHash]).addClass("_clicked _pager-on");
            $(pager[(pageHash-1)]).addClass("_pager-on");
            $(pager[(pageHash-2)]).addClass("_pager-on");
        } else {
            $(page[pageHash]).addClass("_active");
            $(pager[pageHash]).addClass("_clicked _pager-on");
            $(pager[(pageHash+1)]).addClass("_pager-on");
            $(pager[(pageHash-1)]).addClass("_pager-on");
        }
    } else if (pager.length = 2) {
        $(page[0]).addClass("_active");
        $(pager[0]).addClass("_clicked _pager-on");
        $(pager[1]).addClass("_pager-on");
    } else {
        $(page[0]).addClass("_active");
        $(pager[0]).addClass("_clicked _pager-on");
    }

    // 設定上一頁跟下一頁的網址
    if (pageHash === "" || pageHash === 0) {
        $("#pager-prev a").attr("href","#0");
        $("#pager-next a").attr("href","#1");
    } else if (pageHash === Number(pager.length-1)) {
        $("#pager-prev a").attr("href","#"+Number(pager.length-2));
        $("#pager-next a").attr("href","#"+Number(pager.length-1));
    }else {
        $("#pager-prev a").attr("href","#"+(pageHash-1));
        $("#pager-next a").attr("href","#"+(pageHash+1));
    }

    // pager點擊事件
    $("#news-list-block").find(".pager-item").each(function(index,element){
        $(this).on("click",function(){
            $("#news-list-block").find(".news-list").removeClass("_active");
            $("#news-list-block").find(".pager-item").removeClass("_clicked _pager-on");
            page[index].addClass("_active");
            $(this).addClass("_clicked _pager-on");

            if (pager.length > 2) {         // 判斷有幾個pager 以及哪些要顯示
                if (index === 0) {
                    $(this).next().addClass("_pager-on");
                    $(this).next().next().addClass("_pager-on");
                } else if (index === (page.length-1)) {
                    $(this).prev().addClass("_pager-on");
                    $(this).prev().prev().addClass("_pager-on");
                } else {
                    $(this).prev().addClass("_pager-on");
                    $(this).next().addClass("_pager-on");
                }
            } else if (pager.length = 2) {
                if (index === 0) {
                    $(this).next().addClass("_pager-on");
                } else if (index === (page.length-1)) {
                    $(this).prev().addClass("_pager-on");
                }
            }
        })
    })

    $("#pager-prev").on("click", function(){
        let changePage = Number($(this).find("a").attr("href").replace(hashReg,""));
        pager[changePage].trigger("click");
        
        if (changePage !== 0) {
            $("#pager-prev a").attr("href","#"+(changePage-1));
            $("#pager-next a").attr("href","#"+(changePage+1));
        } else {
            $("#pager-prev a").attr("href","#0");
            $("#pager-next a").attr("href","#1");
        }
    });

    $("#pager-next").on("click", function(){
        let changePage = Number($(this).find("a").attr("href").replace(hashReg,""));
        pager[changePage].trigger("click");
        if (changePage !== (pager.length-1)) {
            $("#pager-prev a").attr("href","#"+(changePage-1));
            $("#pager-next a").attr("href","#"+(changePage+1));
        } else {
            $("#pager-prev a").attr("href","#"+(pager.length-2));
            $("#pager-next a").attr("href","#"+(pager.length-1));
        }
    });

}

export { newsListChange };