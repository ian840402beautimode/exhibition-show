// 時間篩選
function adminFilterTables(tableId,tableCul, num) {
    var table = $(tableId).DataTable({
        lengthChange: false,
        ordering: true,
        columnDefs: [{ 
            targets: num, 
            orderable: false,
        }],
        sPaginationType: "listbox",
        dom: '<"top-page"ip><"table-wrapper-scroll"t>',
        language: {
            emptyTable: "沒有任何資料",
            lengthMenu: "顯示 _MENU_ 項",
            info: "目前第<span>_PAGE_</span>頁 (共<span>_PAGES_</span>頁)",
            infoEmpty: "沒有相關資料",
            infoFiltered: "(從 _MAX_ 項中查詢)",
            paginate: {
                "first": "第一頁",
                "last": "最後一頁",
                "next": "下一頁",
                "previous": "上一頁"
            },
            zeroRecords: "找不到資料",
        }
    });

    // 時間套件的語言物件
    const datepickerLanZh = {
        days: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        daysShort: ['日', '一', '二', '三', '四', '五', '六'],
        daysMin: ['日', '一', '二', '三', '四', '五', '六'],
        months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        monthsShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        today: '今天',
        clear: '清除',
        dateFormat: 'yyyy-mm-dd',
        timeFormat: 'hh:ii',
        firstDay: 1
    };
    
    // 選取時間套件
    $("#admin-date-filter__from, #admin-date-filter__to").datepicker({
        language: datepickerLanZh,
        dateFormat: "yyyy-mm-dd",
        timepicker: true,
        autoClose: true,
        clearButton: true,
        onSelect: function (fd, d, picker) {
            table.draw();
        }
    })

    // 時間篩選功能
    $.fn.dataTable.ext.search.push(
        function( settings, data, dataIndex ) {
            var min = Date.parse( $('#admin-date-filter__from').val(), 10 );
            var max = Date.parse( $('#admin-date-filter__to').val(), 10 );
            var age = Date.parse( data[tableCul] ) || 0; // use data for the age column
     
            if ( ( isNaN( min ) && isNaN( max ) ) ||
                 ( isNaN( min ) && age <= max ) ||
                 ( min <= age   && isNaN( max ) ) ||
                 ( min <= age   && age <= max ) )
            {
                return true;
            }
            return false;
        }
    );
}

// 一般樣式
function adminListTables(tableId,num) {
    $(tableId).DataTable({
        lengthChange: false,
        ordering: true,
        columnDefs: [{ 
            targets: num, 
            orderable: false,
        }],
        sPaginationType: "listbox",
        dom: '<"top-page"ip><"table-wrapper-scroll"t>',
        language: {
            emptyTable: "沒有任何資料",
            lengthMenu: "顯示 _MENU_ 項",
            info: "目前第<span>_PAGE_</span>頁 (共<span>_PAGES_</span>頁)",
            infoEmpty: "沒有相關資料",
            infoFiltered: "(從 _MAX_ 項中查詢)",
            paginate: {
                "first": "第一頁",
                "last": "最後一頁",
                "next": "下一頁",
                "previous": "上一頁"
            },
        }
    });
}

// 一般樣式 沒有頁數
function adminListNotPageTables(tableId,num) {
    $(tableId).DataTable({
        lengthChange: false,
        ordering: true,
        pageLength: 60,
        columnDefs: [{ 
            targets: num, 
            orderable: false,
        }],
        sPaginationType: "listbox",
        dom: '<"table-wrapper-scroll"t>',
        language: {
            emptyTable: "沒有任何資料",
            lengthMenu: "顯示 _MENU_ 項",
            info: "目前第<span>_PAGE_</span>頁 (共<span>_PAGES_</span>頁)",
            infoEmpty: "沒有相關資料",
            infoFiltered: "(從 _MAX_ 項中查詢)",
            paginate: {
                "first": "第一頁",
                "last": "最後一頁",
                "next": "下一頁",
                "previous": "上一頁"
            },
        }
    });
}

// 搜尋欄
function adminListSearchTables(tableId,num) {
    var table = $(tableId).DataTable({
        lengthChange: false,
        ordering: true,
        pageLength: 60,
        columnDefs: [{ 
            targets: num, 
            orderable: false
        }],
        sPaginationType: "listbox",
        dom: '<"table-wrapper-scroll"t>',
        language: {
            emptyTable: "沒有任何資料",
            lengthMenu: "顯示 _MENU_ 項",
            info: "目前第<span>_PAGE_</span>頁 (共<span>_PAGES_</span>頁)",
            infoEmpty: "沒有相關資料",
            infoFiltered: "(從 _MAX_ 項中查詢)",
            paginate: {
                "first": "第一頁",
                "last": "最後一頁",
                "next": "下一頁",
                "previous": "上一頁"
            },
            zeroRecords: "找不到資料"
        }
    });

    // 搜尋欄
    $('#admin-list-search').on('keyup', function(){
        table.search(this.value).draw();
    });
}

// 列表層級 select 一個選項
function adminListSelectTables(tableId,num,searchId) {
    $(tableId).DataTable({
        lengthChange: false,
        ordering: true,
        pageLength: 500,
        columnDefs: [{ 
            targets: num, 
            orderable: false,
        }],
        sPaginationType: "listbox",
        dom: '<"table-wrapper-scroll"t>',
        language: {
            emptyTable: "沒有任何資料",
            lengthMenu: "顯示 _MENU_ 項",
            info: "目前第<span>_PAGE_</span>頁 (共<span>_PAGES_</span>頁)",
            infoEmpty: "沒有相關資料",
            infoFiltered: "(從 _MAX_ 項中查詢)",
            paginate: {
                "first": "第一頁",
                "last": "最後一頁",
                "next": "下一頁",
                "previous": "上一頁"
            },
            zeroRecords: "找不到資料"
        },
        initComplete: function () {
            this.api().columns(searchId).every( function () {
                var column = this;
                $('#admin-list-select-category').on( 'change', function () {
                    var val = $.fn.dataTable.util.escapeRegex(
                        $(this).val()
                    );
                    column.search( val ? '^'+val+'$' : '', true, false ).draw();
                });
            } );
        }
    });
    const selectValue = sessionStorage.getItem('first-name');
    $('#admin-list-select-category').val(selectValue).trigger('change');
}

// 列表層級 select 二個選項
function adminListTwoSelectTables(tableId,num, categoryId, seriesId) {
    var table = $(tableId).DataTable({
        lengthChange: false,
        ordering: true,
        pageLength: 60,
        columnDefs: [{ 
            targets: num, 
            orderable: false
        }],
        sPaginationType: "listbox",
        dom: '<"table-wrapper-scroll"t>',
        language: {
            emptyTable: "沒有任何資料",
            lengthMenu: "顯示 _MENU_ 項",
            info: "目前第<span>_PAGE_</span>頁 (共<span>_PAGES_</span>頁)",
            infoEmpty: "沒有相關資料",
            infoFiltered: "(從 _MAX_ 項中查詢)",
            paginate: {
                "first": "第一頁",
                "last": "最後一頁",
                "next": "下一頁",
                "previous": "上一頁"
            },
            search: "",
            zeroRecords: "找不到資料",
            searchPlaceholder: "點擊輸入欲搜尋會員資料"
        },
        initComplete: function () {
            // 類別搜尋
            this.api().columns(categoryId).every( function () {
                var column = this;
                $('#admin-list-select-category').on( 'change', function () {
                    var val = $.fn.dataTable.util.escapeRegex(
                        $(this).val()
                    );
                    column.search( val ? '^'+val+'$' : '', true, false ).draw();
                });
            } );

            // 系列搜尋
            this.api().columns(seriesId).every( function () {
                var column = this;
                $('#admin-list-select-series').on( 'change', function () {
                    var val = $.fn.dataTable.util.escapeRegex(
                        $(this).val()
                    );
                    column.search( val ? '^'+val+'$' : '', true, false ).draw();
                });
            } );
        }
    });

    const selectClassValue = sessionStorage.getItem('first-name'),
          selectSeiiesValue = sessionStorage.getItem('second-name');
    $('#admin-list-select-category').val(selectClassValue).trigger('change');
    $('#admin-list-select-series').val(selectSeiiesValue).trigger('change');

    // 搜尋欄
    $('#admin-product-list-search').on('keyup', function(){
        table.search(this.value).draw();
    });
}


//table tr click 上色
function adminListTableClickActive(tableId){
    var selId, id;
    $(tableId).find('tbody tr').on('click',function(){
        selId = $(this).data('id');
        $(tableId).find('tbody tr').each(function(index, elm){
            var id = $(elm).data('id');
            if(selId == id){
                $(elm).addClass('active');
            }else{
                $(elm).removeClass('active');
            }
        })
    })
}


export { 
    adminFilterTables,
    adminListTables,
    adminListNotPageTables,
    adminListSearchTables,
    adminListSelectTables,
    adminListTwoSelectTables,
    adminListTableClickActive,
 };

//----  datatables listbox code

$.fn.dataTableExt.oPagination.listbox = {
    /*
     * Function: oPagination.listbox.fnInit
     * Purpose:  Initalise dom elements required for pagination with listbox input
     * Returns:  -
     * Inputs:   object:oSettings - dataTables settings object
     *             node:nPaging - the DIV which contains this pagination control
     *             function:fnCallbackDraw - draw function which must be called on update
     */
    "fnInit": function (oSettings, nPaging, fnCallbackDraw) {
        var nInput = document.createElement('select');
        var nPage = document.createElement('span');
        var nOf = document.createElement('span');
        nOf.className = "paginate_of";
        nPage.className = "paginate_page";
        if (oSettings.sTableId !== '') {
            nPaging.setAttribute('id', oSettings.sTableId + '_paginate');
        }
        nInput.style.display = "inline";
        nPage.innerHTML = "";           // select前綴文字
        nPaging.appendChild(nPage);
        nPaging.appendChild(nInput);
        nPaging.appendChild(nOf);
        $(nInput).change(function (e) { // Set DataTables page property and redraw the grid on listbox change event.
            window.scroll(0,0); //scroll to top of page
            if (this.value === "" || this.value.match(/[^0-9]/)) { /* Nothing entered or non-numeric character */
                return;
            }
            var iNewStart = oSettings._iDisplayLength * (this.value - 1);
            if (iNewStart > oSettings.fnRecordsDisplay()) { /* Display overrun */
                oSettings._iDisplayStart = (Math.ceil((oSettings.fnRecordsDisplay() - 1) / oSettings._iDisplayLength) - 1) * oSettings._iDisplayLength;
                fnCallbackDraw(oSettings);
                return;
            }
            oSettings._iDisplayStart = iNewStart;
            fnCallbackDraw(oSettings);
        }); /* Take the brutal approach to cancelling text selection */
        $('span', nPaging).bind('mousedown', function () {
            return false;
        });
        $('span', nPaging).bind('selectstart', function () {
            return false;
        });
    },
      
    /*
     * Function: oPagination.listbox.fnUpdate
     * Purpose:  Update the listbox element
     * Returns:  -
     * Inputs:   object:oSettings - dataTables settings object
     *             function:fnCallbackDraw - draw function which must be called on update
     */
    "fnUpdate": function (oSettings, fnCallbackDraw) {
        if (!oSettings.aanFeatures.p) {
            return;
        }
        var iPages = Math.ceil((oSettings.fnRecordsDisplay()) / oSettings._iDisplayLength);
        var iCurrentPage = Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength) + 1; /* Loop over each instance of the pager */
        var an = oSettings.aanFeatures.p;
        for (var i = 0, iLen = an.length; i < iLen; i++) {
            var spans = an[i].getElementsByTagName('span');
            var inputs = an[i].getElementsByTagName('select');
            var elSel = inputs[0];
            if(elSel.options.length != iPages) {
                elSel.options.length = 0; //clear the listbox contents
                for (var j = 0; j < iPages; j++) { //add the pages
                    var oOption = document.createElement('option');
                    oOption.text = "第"+ (j + 1) +"頁";     // 更改option的文字
                    oOption.value = j + 1;
                    try {
                        elSel.add(oOption, null); // standards compliant; doesn't work in IE
                    } catch (ex) {
                        elSel.add(oOption); // IE only
                    }
                }
                // spans[1].innerHTML = "&nbsp;of&nbsp;" + iPages;      // 註解移除總共頁數文字
            }
          elSel.value = iCurrentPage;
        }
    }
};