// 立即执行函数
(function () {
    class Animal {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        sayHello() {
            console.log("动物在叫");
        }
    }

    // 使用继承后，子类将拥有父类所有的属性和方法
    class Dog extends Animal {

        run() {
            console.log(`${this.name}在跑`)
        }

        sayHello() {
            console.log("汪汪汪!");
        }
    }

    class Cat extends Animal {

        feature: string;

        //如果在子类中重写了构造函数，必须调用父类的构造函数；不重写默认调用父类的构造函数
        constructor(name: string, age: number, feature: string) {
            super(name, age);
            this.feature = feature;
        }

        sayHello() {
            // super.sayHello();  //super:父类
            console.log("喵喵喵!");
        }
    }

    const dog = new Dog("旺财", 3);
    dog.sayHello();
    const cat = new Cat("咪咪", 4, "抓");
    cat.sayHello();
})()