// 年月
function adminInputTimnepickerYM(inputId) {
    // 時間套件的語言物件
    const datepickerLanZh = {
        months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        monthsShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        clear: '清除',
        dateFormat: 'yyyy-mm',
    };
    
    // 選取時間套件
    $(inputId).datepicker({
        language: datepickerLanZh,
        dateFormat: "yyyy-mm",
        minView: "months",
        view: "months",
        timepicker: false,
        autoClose: true,
        clearButton: true
    });
}


// 年月日
function adminInputTimnepickerYMD(inputId) {
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
    $(inputId).datepicker({
        language: datepickerLanZh,
        dateFormat: "yyyy-mm-dd",
        timepicker: false,
        autoClose: true,
        clearButton: true,
    });
}


// 年月日時
function adminInputTimnepickerYMDH(inputId) {
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
    
    const start = new Date();
    start.setMinutes(0)

    // 選取時間套件
    $(inputId).datepicker({
        language: datepickerLanZh,
        dateFormat: "yyyy-mm-dd",
        timepicker: true,
        autoClose: true,
        clearButton: true,
        startDate: start,
        timeFormat: 'hh:ii',
        minMinutes: 0,
        maxMinutes: 0
    });
}

// 年月日時分
function adminInputTimnepickerYMDHI(inputId) {
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
    $(inputId).datepicker({
        language: datepickerLanZh,
        dateFormat: "yyyy-mm-dd",
        timepicker: true,
        autoClose: true,
        clearButton: true,
    });
}

// 時分
function adminInputTimnepickerHI(inputId) {
    // 時間套件的語言物件
    const datepickerLanZh = {
        clear: '清除',
        dateFormat: '',
        timeFormat: 'hh:ii',
    };
    
    // 選取時間套件
    $(inputId).datepicker({
        language: datepickerLanZh,
        dateFormat: "",
        timepicker: true,
        autoClose: true,
        clearButton: true,
        classes: 'event-timepicker'
    });
}

// 範圍篩選
function adminInputTimnepickerFilter(idName){
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
    idName.find(".admin-date-filter__from, .admin-date-filter__to").datepicker({
        language: datepickerLanZh,
        dateFormat: "yyyy-mm-dd",
        timepicker: true,
        autoClose: true,
        clearButton: true,
        position: "top left"
    })
}

export { adminInputTimnepickerYM, adminInputTimnepickerYMD, adminInputTimnepickerYMDH, adminInputTimnepickerYMDHI, adminInputTimnepickerFilter, adminInputTimnepickerHI};