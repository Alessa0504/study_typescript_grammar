"use strict";
(function () {
    const obj = {
        name: 'jillian',
        age: 18
    };
    // 结构为myInterface的合集
    const obj2 = {
        name: 'jillian',
        age: 18,
        gender: "女"
    };
    //实现接口需要满足接口要求
    class myClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("大家好");
        }
    }
})();
