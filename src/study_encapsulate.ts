(function () {
    class Person {
        //private属性只能在类内部修改
        private _name: string;
        protected _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

        //获取name属性
        getName() {
            return this._name;
        }

        //设置name属性
        setName(value: string) {
            this._name = value;
        }

        setAge(value: number) {
            if (value > 0) {
                this._age = value;
            }
        }

        getAge() {
            return this._age;
        }

        /**
         * ts中获取/设置属性的方式 -get/set
         */
        get name() {
            return this._name;
        }

        set name(value: string) {
            this._name = value;
        }
    }

    const person = new Person("jillian", 18);
    //普通方式
    person.setName("tom");
    console.log(person.getName());
    //ts方式
    person.name = "tom";
    console.log(person.name);

    /**
     * 继承Person, 测试修饰符
     */
    class A extends Person {
        constructor(name: string, age: number) {
            super(name, age);
            // this._name = name; //子类不能改父类的private
            this._age = age;   //子类内部可以改父类的protected
        }
    }

    const a = new A("jean", 19);

    // a._age;  //报错，子类外部不能修改父类的protected

    /**
     * 直接将属性定义在构造函数中(简易写法)
     */
    class B {
        constructor(public name: string, public age: number) {
        }

        // === 等价于 ===
        // name: string;
        // age: number;
        //
        // constructor(name: string, age: number) {
        //     this.name = name;
        //     this.age = age;
        // }
    }

    const b = new B("tom", 3);
    console.log(b);
})()