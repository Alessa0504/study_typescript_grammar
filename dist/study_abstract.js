"use strict";
(function () {
    /**
     * 抽象类只能被继承，无法创建对象
     * 抽象类可以有抽象方法
     */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log("汪汪汪!");
        }
    }
    const dog = new Dog("旺财");
    dog.sayHello();
})();
