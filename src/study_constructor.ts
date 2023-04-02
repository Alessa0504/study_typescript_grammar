class Dog {
    name: string;
    age: number;

    // 构造函数 -会在对象创建时(new Dog())调用, this表示当前的对象实例
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        console.log("constructor调用");
    }

    bark() {
        alert(this.name + "汪汪汪!");
    }
}

const dog = new Dog("旺财", 3);
const dog2 = new Dog("小黑", 4);
console.log(dog);
console.log(dog2);
dog.bark();
dog2.bark();
