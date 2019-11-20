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

adminInputTimnepickerYMD("#news-edit-date");

export { adminInputTimnepickerYMD, adminInputTimnepickerYMDHI};