(function() {
    'use strict';
    // 定义需要点击的时间数组
    var times = [
        ':00:02',
        ':00:00',
    ];

    // 获取所有复选框元素
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // 定义翻页按钮的类名
    var nextPageText = '下一页';
    var buttons = document.querySelectorAll('.next');

    // 处理点击复选框的逻辑
    function clickCheckboxes() {
        // 循环处理每个复选框元素
        for (var k = 0; k < checkboxes.length; k++) {
            var checkbox = checkboxes[k];
            var name = checkbox.getAttribute('name');

            // 确保 name 属性存在且不为空
            if (name && name !== '') {
                // 检查复选框名称是否包含需要点击的时间
                for (var j = 0; j < times.length; j++) {
                    if (name.includes(times[j])) {
                        // 模拟点击事件
                        checkbox.click();
                        break;
                    }
                }
            }
        }
    }

    // 处理点击下一页按钮的逻辑
    function clickNextPage() {
        // 循环遍历下一页按钮
        for (var i = 0; i < buttons.length; i++) {
            var button = buttons[i];
            if (button.innerText === nextPageText) {
                // 模拟点击下一页按钮
                button.click();
                break;
            }
        }
    }

    // 定义总体操作函数
    function performClicks() {
        clickCheckboxes();
        clickNextPage();
    }
    
    performClicks();
})();
