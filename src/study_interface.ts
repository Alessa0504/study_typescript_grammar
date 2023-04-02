(function () {
    /**
     * 类型声明：描述一个对象的类型
     */
    type myType = {
        name: string,
        age: number
    };

    const obj: myType = {
        name: 'jillian',
        age: 18
    };

    /**
     * 也可以用接口来定义一个类的结构，用来定义一个类中包含哪些属性和方法。
     * 同时接口也可以当成类型声明去使用
     */
    interface myInterface {
        name: string;
        age: number;
    }

    interface myInterface {
        gender: string
    }

    // 结构为myInterface的合集
    const obj2: myInterface = {
        name: 'jillian',
        age: 18,
        gender: "女"
    };

    /**
     * 可以通过接口限制类的结构，接口中都是抽象属性/方法
     */
    interface myInterface2 {
        name: string;

        sayHello(): void;
    }

    //实现接口需要满足接口要求
    class myClass implements myInterface2 {
        name: string;

        constructor(name: string) {
            this.name = name
        }

        sayHello(): void {
            console.log("大家好");
        }

    }
})()