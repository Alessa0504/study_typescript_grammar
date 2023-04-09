/**
 * 定义函数或类时，遇到类型不明确可以使用范型
 */
function fn<T>(a: T): T {
    return a;
}

let result = fn(10);  //不指定范型，ts自动推断
let result2 = fn<string>('hello')  //指定范型

//指定多个范型
function fun2<T, K>(a: T, b: K): T {
    console.log(b);
    return a;
}

fun2<number, string>(100, 'hello');

/**
 * 限制范型范围：必须是接口/类的实现类，即传的类型必须有length属性
 */
interface Inter {
    length: number
}

function fun3<T extends Inter>(a: T): number {
    return a.length  //这里指定a是Inter的实现类，所以要有length属性
}

fun3('hello');
fun3({length: 5});

// fun3(100) 报错，没有length属性

/**
 * 在类中使用范型
 */
class MyClass<T> {
    name: T;

    constructor(name: T) {
        this.name = name;
    }
}

const mc = new MyClass<string>('jillian');
