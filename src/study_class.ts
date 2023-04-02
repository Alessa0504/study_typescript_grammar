class Person {
    //实例属性
    readonly name: string = "jillian"
    //类属性(静态属性)
    static age: number = 18

    //方法 -同样可以加static变成类方法
    sayHello() {
        console.log("大家好");
    }
}

const per = new Person();

// per.name = "tom"  //报错，只读属性不能修改

console.log(per.name);   //通过实例对象访问
console.log(Person.age);  //通过类访问

per.sayHello()