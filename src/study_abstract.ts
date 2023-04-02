(function () {
    /**
     * 抽象类只能被继承，无法创建对象
     * 抽象类可以有抽象方法
     */
    abstract class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        //抽象方法，子类必须对抽象方法重写
        abstract sayHello(): void;  //void为返回值
    }

    class Dog extends Animal {

        sayHello(): void {
            console.log("汪汪汪!");
        }
    }

    const dog = new Dog("旺财");
    dog.sayHello()
})()