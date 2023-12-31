# learn-typescript

## 1.认识TypeScript
TypeScript是拥有类型的JavaScript超集，它可以编译成普通、干净、完整的JavaScript代码

- TypeScript理解成加强版的JavaScript
- JavaScript所拥有的特性，TypeScript全部都是支持的，并且它紧随ECMAScript的标准，所以ES6、ES7、ES8等新语法标准，它都是 支持的;
- TypeScript在实现新特性的同时，总是保持和ES标准的同步甚至是领先;
- 并且在语言层面上，不仅仅增加了类型约束，而且包括一些语法的扩展，比如枚举类型(Enum)、元组类型(Tuple)等;
-  并且TypeScript最终会被编译成JavaScript代码，所以你并不需要担心它的兼容性问题，在编译时也可以不借助于Babel这样的工具;

## 2.TypeScript的编译环境

- 安装
```bash
npm install typescript -g
```

- 查看版本

```bash
tsc --version
```


## 3.TypeScript的运行环境
- 通过webpack，配置本地的TypeScript编译环境和开启一个本地服务，可以直接运行在浏览器上;(https://mp.weixin.qq.com/s/wnL1l-ERjTDykWM76l4Ajw)
- 通过ts-node库，为TypeScript的运行提供执行环境;


## 3.1  ts-node


- 安装 ts-node 前置依赖
```bash
npm install tslib @types/node -g
```
- 安装 ts-node
```bash
npm install ts-node -g
```

- 运行
```angular2html
ts-node xxx.ts
```

## 4. TypeScript的基础类型

### 4.1 变量
变量的声明：声明了类型后TypeScript就会进行类型检测，声明的类型可以称之为类型注解(Type Annotation);

>var/let/const 标识符: 数据类型 = 赋值;

string是TypeScript中定义的字符串类型，String是ECMAScript中定义的一个类

### 4.2 number类型

数字类型是我们开发中经常使用的类型，TypeScript和JavaScript一样，不区分整数类型(int)和浮点型(double)，统一为 number类型。

```ts
let num: number = 123;
num = 20;
num = 1.23;
```

ES6新增了二进制和八进制的表示方法，而TypeScript也是支持二进制、八进制、十六进制的表示:

```ts
num = 100 // 十进制
num = 0b100 // 二进制
num = 0o555 // 八进制
num = 0xf23 // 十六进制
```

### 4.3 boolean类型

boolean类型只有两个取值:true和false

```ts
let bool: boolean = true;
bool = false;

// bool = 123; // 报错
// bool = 'abc'; // 报错

bool = 1 < 2;
```

### 4.4 string类型


string类型是字符串类型，可以使用单引号或者双引号表示:
```ts
let str: string = 'abc';
str = "abc";
```

也支持ES6的模板字符串来拼接变量和字符串:

```ts
let name: string = 'Tom';
let age: number = 25;
let sentence: string = `Hello, my name is ${name}. I'll be ${age + 1} years old next month.`;
console.log(sentence);
```

### 4.5 Array类型
数组类型的定义也非常简单，有两种方式:
- Array<string>事实上是一种泛型的写法
- string[]是一种简单的写法
```ts
let arr1: Array<string> = ['a', 'b', 'c'];
let arr2: string[] = ['a', 'b', 'c'];
```

### 4.6 Object类型

- object对象类型可以用于描述一个对象:
```ts
let obj: object = { name: 'Tom', age: 25 };
```

但是从 obj 中我们不能获取数据，也不能设置数据:

```ts
let obj: object = { name: 'Tom', age: 25 };
console.log(obj.name); // 报错
obj.age = 26; // 报错

```

### 4.7 Symbol类型


在ES5中，如果我们是不可以在对象中添加相同的属性名称的，比如下面的做法:


```ts
let obj: object = { name: 'Tom', name: 'Jerry' };
console.log(obj); // { name: 'Jerry' }
```

但是我们也可以通过symbol来定义相同的名称，因为Symbol函数返回的是不同的值:

```ts
    let s1: symbol = Symbol();
    let s2: symbol = Symbol();
    console.log(s1 === s2); // false
```

### 4.8 undefined和null类型

在 JavaScript 中，undefined 和 null 是两个基本数据类型。
在TypeScript中，它们各自的类型也是undefined和null，也就意味着它们既是实际的值，也是自己的类型:

```ts
let u: undefined = undefined;
let n: null = null;
```

### 4.9 any 类型

在某些情况下，我们确实无法确定一个变量的类型，并且可能它会发生一些变化，这个时候我们可以使用any类型(类似于Dart 语言中的dynamic类型)。
any类型有点像一种讨巧的TypeScript手段:
- 我们可以对any类型的变量进行任何的操作，包括获取不存在的属性、方法;
- 我们给一个any类型的变量赋值任何的值，比如数字、字符串的值;

如果对于某些情况的处理过于繁琐不希望添加规定的类型注解，或者在引入一些第三方库时，缺失了类型注解，这个时候我们可 以使用any:

```ts
let any: any = 123;
any = 'abc';
any = true;
any = null;
any = undefined;
any = {};
any = [];
```

### 4.10 unknown类型
unknown是TypeScript中比较特殊的一种类型，它用于描述类型不确定的变量。
- 和any类型有点类似，但是unknown类型的值上做任何事情都是不合法的;

```ts
let value: unknown;
value = 123;
value = 'abc';
value.length; // 报错
```

### 4.11 void类型
void通常用来指定一个函数是没有返回值的，那么它的返回值就是void类型:
```ts
function fn() {
    console.log('fn()');
}
```

这个函数我们没有写任何类型，那么它默认返回值的类型就是void的，我们也可以显示的来指定返回值是void:
```ts
function fn(): void {
    console.log('fn()');
}
```
我们可以将undefined赋值给void类型，也就是函数可以返回undefined


当基于上下文的类型推导(Contextual Typing)推导出返回类型为 void 的时候，并不会强制函数一定不能返回内容。
```ts
type FnType =  ()=> void
const foo: FnType = () => {
    return 123
}

```

### 4.12 never类型

never 表示永远不会发生值的类型，比如一个函数:
- 如果一个函数中是一个死循环或者抛出一个异常，那么这个函数会返回东西吗?
- 不会，那么写void类型或者其他类型作为返回值类型都不合适，我们就可以使用never类型;
```ts
function loopFun(): never {
    while (true) {
        console.log('loopFun');
    }
}

function errorFun(): never {
    throw new Error('errorFun');
}
```

```ts
function handleMessage(message: string | number) {
    if (typeof message === 'string') {
        console.log('string');
    } else if (typeof message === 'number') {
        console.log('number');
    } else {
        // never
        const check: never = message;
    }
}
```

### 4.13 tuple类型

tuple是元组类型，很多语言中也有这种数据类型，比如Python、Swift等。
- 元组类型可以用来表示一个已知元素数量和类型的数组，各元素的类型不必相同，比如我们可以定义一个元组类型表示一个数字和一个字符串:
```ts
let tuple: [number, string] = [1, 'a'];
const num = tuple[0]; // 1 ,已知类型为number
const ss = tuple[1]; // 'a' ,已知类型为string
```

tuple和数组有什么区别呢?
- 首先，数组中通常建议存放相同类型的元素，不同类型的元素是不推荐放在数组中。(可以放在对象或者元组中)
- 其次，元组中每个元素都有自己特性的类型，根据索引值获取到的值可以确定对应的类型;
- 最后，元组的长度是固定的，不可变的，不能添加或者删除元素，也不能修改元素的类型;
  tuple通常可以作为返回的值，在使用的时候会非常的方便;
```ts

function useState<T> (initialState: T): [T, (state: T) => void] {
    let state = initialState;
    const setState = (newState: T) => {
        state = newState;
    }
    return [state, setState];
}
const [state, setState] = useState<number>(1);
```
  
### 4.14 联合类型

- 联合类型是由两个或者多个其他类型组成的类型;
- 表示可以是这些类型中的任何一个值;
- 联合类型中的每一个类型被称之为联合成员(union's members);

```ts
function printId(id: number | string) {
    console.log(id);
}

printId(1);
printId('abc');
```

传入给一个联合类型的值是非常简单的:只要保证是联合类型中的某一个类型的值即可
TypeScript可以根据我们缩小的代码结构，推断出更加具体的类型;

```ts
function printId(id: number | string) {
    if (typeof id === 'string') {
        // id在这里是string类型
        console.log(id.toUpperCase());
    } else {
        // id在这里是number类型
        console.log(id);
    }
}
```


### 4.15 类型别名

通过在类型注解中编写 对象类型 和 联合类型，但是当我们想要多次在其他地方使用时，就要编写多次。
比如我们可以给对象类型起一个别名

```ts
type Point = {
    x: number;
    y: number;
}
function printPoint(point: Point) {
    console.log(point.x, point.y);
}

printPoint({x: 1, y: 2});

type ID = number | string;
function printId(id: ID) {
    console.log(id);
}
```

#### interface和type区别
如果是定义非对象类型，通常推荐使用type，比如Direction、Alignment、一些Function;
如果是定义对象类型，那么他们是有区别的
- interface 可以重复的对某个接口来定义属性和方法;
-  而type定义的是别名，别名是不能重复的;
- interface可以为现有的接口提供更多的扩展。

### 4.16 交叉类型

- 交叉类似表示需要满足多个类型的条件;
- 交叉类型使用 & 符号;

```ts
type First = { first: number };
type Second = { second: number };
type FirstAndSecond = First & Second;  
// FirstAndSecond的类型是 { first: number, second: number }
```
表达的含义是First和Second要同时满足;


### 4.17 类型断言 as
TypeScript只允许类型断言转换为 更具体 或者 不太具体 的类型版本，此规则可防止不可能的强制转换:

###  4.18 非空类型断言!

我们确定传入的参数是有值的，这个时候我们可以使用非空类型断言:
非空断言使用的是 ! ，表示可以确定某个标识符是有值的，跳过ts在编译阶段对它的检测;

```ts
function printId(id?:  string | undefined) {
    console.log(id!.toUpperCase());
}
```

### 4.19 类型缩小
- 类型缩小的英文是 Type Narrowing
- 可以通过类似于 typeof padding === "number" 的判断语句，来改变TypeScript的执行路径;
- 在给定的执行路径中，我们可以缩小比声明时更小的类型，这个过程称之为 缩小( Narrowing );
- 我们编写的 typeof padding === "number 可以称之为 类型保护(type guards);

#### typeof类型保护

检查返回的值typeof是一种类型保护:
因为 TypeScript 对如何typeof操作不同的值进行编码。
```ts
function printAll(strs: string | string[] | null) {
    if (typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    } else {
        // do nothing
    }
}

```

####  instanceof类型保护
JavaScript 有一个运算符来检查一个值是否是另一个值的“实例”:

```ts
function printValue(date:Date | string) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    } else {
        console.log(date.toUpperCase());
    }
}
```

#### in类型保护

in 操作符可以用来检查一个对象中是否含有某个属性，即使这个属性不是对象的实例属性:

```ts
interface Admin {
    id: string;
    role: string;
}

interface User {
    email: string;
}

function redirect(usr: Admin | User) {
    if ("role" in usr) {
        // usr: Admin
        routeToAdminPage(usr.role);
    } else {
        // usr: User
        routeToHomePage(usr.email);
    }
}
```


### 4.20 枚举类型


枚举类型是为数不多的TypeScript特性有的特性之一:
- 枚举类型是对JavaScript标准数据类型的一个补充;
- 枚举类型可以让我们定义一些有名字的数字常量;
- 枚举类型使用 enum 关键字来定义;
- 枚举类型中的每个值都可以叫做枚举成员;
- 枚举成员有两种类型: 常数枚举成员和计算枚举成员;
- 枚举成员的值是只读的，不可修改;
- 枚举允许开发者定义一组命名常量，常量可以是数字、字符串类型;

```ts
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

console.log(Direction.Up); // 0
console.log(Direction.Down); // 1
console.log(Direction.Left); // 2
console.log(Direction.Right); // 3
```

```ts
enum Direction {
    Up = 10,
    Down = 20,
    Left = 30,
    Right = 40,
}

console.log(Direction.Up); // 10
console.log(Direction.Down); // 20
console.log(Direction.Left); // 30
console.log(Direction.Right); // 40
```


## 5. TypeScript的函数

### 5.1 函数的类型

函数是JavaScript非常重要的组成部分，TypeScript允许我们指定函数的参数和返回值的类型。
参数的类型注解
- 声明函数时，可以在每个参数后添加类型注解，以声明函数接受的参数类型:
```ts
function sum(x: number, y: number): number {
    return x + y;
}

sum(1, 2);
```




### 5.2 函数的返回值类型
添加返回值的类型注解，这个注解出现在函数列表的后面:
```ts
function sum(x: number, y: number): number {
    return x + y;
}
```

和变量的类型注解一样，我们通常情况下不需要返回类型注解，因为TypeScript会根据 return 返回值推断函数的返回类型

### 5.3 匿名函数的参数
匿名函数与函数声明会有一些不同:

- 当一个函数出现在TypeScript可以确定该函数会被如何调用的地方时;
- 该函数的参数会自动指定类型;
- 我们并没有指定item的类型，但是item是一个string类型:
  - 这是因为TypeScript会根据forEach函数的类型以及数组的类型推断出item的类型;
  - 这个过程称之为上下文类型(contextual typing)，因为函数执行的上下文可以帮助确定参数和返回值的类型;
```ts
const names= ['Tom', 'Jerry', 'Bob'];
names.forEach(function(item) {
    console.log(item.toUpperCase());
});
```


### 5.4 函数的参数类型和解析
函数是重要的组成部分，并且函数可以作为一等公民(可以作为参数，也可以作为返回值进行传递)。
编写函数类型的表达式(Function Type Expressions)，来表示函数类型;

```ts

type Calculate = (x: number, y: number) => number;

function calc(fn:Calculate) {
    return fn(1, 2);
}
function add(x: number, y: number) {
    return x + y;
}

calc(add);
```

在上面的语法中 (x: number, y: number) => number，代表的就是一个函数类型:
- 接收两个参数的函数:num1和num2，并且都是number类型;
- 并且这个函数是有返回值的，所以是number;

在某些语言中，可能参数名称num1和num2是可以省略，但是TypeScript是不可以的

### 5.5 函数的调用签名
函数除了可以被调用，自己也是可以有属性值的。
函数类型表达式并不能支持声明属性
在一个对象类型中写一个调用签名(call signature);

```ts
type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}
```

注意这个语法跟函数类型表达式稍有不同，在参数列表和返回的类型之间用的是 : 而不是 =>。

### 5.6 函数的构造签名
JavaScript 函数也可以使用 new 操作符调用，当被调用的时候，TypeScript 会认为这是一个构造函数(constructors)，因为 他们会产生一个新对象。
可以写一个构造签名( Construct Signatures )，方法是在调用签名前面加一个 new 关键词;

```ts

type SomeConstructor = {
    new (s: string): SomeObject;
};

function fn(ctor: SomeConstructor) {
    return new ctor("hello");
}
```


### 5.7 函数的默认参数


从ES6开始，JavaScript是支持默认参数的，TypeScript也是支持默认参数的:


```ts
function add(x: number, y: number = 0): number {
    return x + y;
}
```
这个时候y的类型其实是 undefined 和 number 类型的联合。

### 5.8 函数的可选参数
可以指定某个参数是可选的:

```ts

function add(x: number, y?: number): number {
    return x + y;
}
```
这个时候这个参数y依然是有类型的，它是什么类型呢? number | undefined
可选类型需要在必传参数的后面

### 5.9 函数的剩余参数
从ES6开始，JavaScript也支持剩余参数，剩余参数语法允许我们将一个不定数量的参数放到一个数组中。

```ts

function add(x: number, ...rest: number[]): number {
    return x + rest.reduce((pre, cur) => pre + cur, 0);
}
```

### 5.10 函数的重载
在TypeScript中，我们可以去编写不同的重载签名(overload signatures)来表示函数可以以不同的方式进行调用; 
一般是编写两个或者以上的重载签名，再去编写一个通用的函数以及实现;

```ts
function add(...rest: number[]): number;
function add(...rest: string[]): string;
function add(...rest: any[]): any {
    let first = rest[0];
    if (typeof first === "string") {
        return rest.join("");
    }
    if (typeof first === "number") {
        return rest.reduce((pre, cur) => pre + cur, 0);
    }
}
```

### 5.11 函数的this参数
在JavaScript中，this是一个非常重要的概念，它代表函数执行的上下文。
在TypeScript中，我们可以使用this参数来指定函数执行的上下文，this参数是一个假的参数，它出现在参数列表的最前面:

```ts
function fn(this: Window) {
    console.log(this);
}
```

指定 this 类型

- 函数的第一个参数我们可以根据该函数之后被调用的情况，用于声明this的类型(名词必须叫this); 
- 在后续调用函数传入参数时，从第二个参数开始传递的，this参数会在编译后被抹除;

```ts
function fn(this: Window, x: number) {
    console.log(this);
}
fn(1);
```


## 6.TypeScript面向对象

### 6.1 类的定义
使用class关键字来定义一个类;
我们可以声明类的属性:在类的内部声明类的属性以及对应的类型

如果类型没有声明，那么它们默认是any的;
我们也可以给属性设置初始化值;

在默认的strictPropertyInitialization模式下面我们的属性是必须 初始化的，如果没有初始化，那么编译时就会报错;
如果我们在strictPropertyInitialization模式下确实不希望给属 性初始化，可以使用 name!: string语法;
类可以有自己的构造函数constructor，当我们通过new关键字创建 一个实例时，构造函数会被调用;
构造函数不需要返回任何值，默认返回当前创建出来的实例;
类中可以有自己的函数，定义的函数称之为方法

```ts
class Person {
    name!: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    sayHi(msg: string): void {
        console.log(`I am ${this.name}, ${msg}`);
    }
}
```

### 6.2 类的继承


面向对象的其中一大特性就是继承，继承不仅仅可以减少我们的代码量，也是多态的使用前提。

在TypeScript中，我们可以使用extends关键字来实现继承，子类中可以调用父类中的构造函数，也可以调用父类中的方法。

-  Student类可以有自己的属性和方法，并且会继承Person的属性和方法

- 在构造函数中，我们可以通过super来调用父类的构造方法，对父类中的属性进行初始化;

- 在子类中可以重写父类的方法，重写之后父类中的方法就不会被执行了;

- 在子类中可以使用super来调用父类中的方法;

```ts
class Student extends Person {
    sno: number;
    constructor(name: string, age: number, sno: number) {
        super(name, age);
        this.sno = sno;
    }
    sayHi() {
        super.sayHi("I am a student");
    }
}
```





### 6.3 类的修饰符

在TypeScript中，我们可以给类中的属性和方法添加修饰符，来控制成员的访问权限;

- public: 公开的，默认的修饰符，公开的属性和方法可以在任意地方被访问到，默认所有的属性和方法都是公开的;
- private: 私有的，私有的属性和方法不能在声明它的类的外部访问;
- protected: 受保护的，受保护的属性和方法只能在声明它的类或者子类中访问;
- readonly: 只读的，只读属性只能读取不能修改;
- static: 静态的，静态属性和方法只能通过类名来访问，不能通过实例来访问;

### 6.4 getters/setters

一些私有属性我们是不能直接访问的，或者某些属性我们想要监听它的获取(getter)和设置(setter)的过程，这个时候我们 可以使用存取器。

存取器需要使用get和set关键字来进行修饰，get和set关键字是 TypeScript中提供的一种属性访问器;

```ts
class Person {
    private _name: string;
    constructor(name: string) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
}
```
### 6.5 参数属性(Parameter Properties)

在TypeScript中，我们可以在构造函数中使用参数属性，通过给构造函数中的参数添加修饰符来声明参数属性;

```ts
class Person {
    constructor(public name: string) {
    }
    set name(name: string) {
        this._name = name;
    }
}
```

### 6.6 抽象类

在TypeScript中，我们可以使用abstract关键字来定义抽象类和抽象方法，抽象类是不允许被实例化的，只能被子类继承;

抽象类中的抽象方法必须被子类实现;

- 抽象类和抽象方法用来定义标准，标准:Animal这个类要求它的子类必须包含eat方法;
- 抽象类不允许被实例化;
- 抽象方法只能被子类实现;
- 抽象类的子类必须实现抽象类中的所有抽象方法;
- 抽象方法，必须存在于抽象类中;
- 抽象方法，不能包含具体的实现，也就是抽象方法不能有方法体;

```ts

abstract class Animal {
    abstract eat(): any;
}

class Cat extends Animal {
    eat() {
        console.log("吃老鼠");
    }
}


```


### 6.7 类的类型

在TypeScript中，我们可以使用接口来描述类的类型;


```ts
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    sayHi(msg: string): void {
        console.log(`I am ${this.name}, ${msg}`);
    }
    run(): void {
        console.log("I am running");
    }
}

const p: Person = new Person("laoxie", 18);
const p1 : Person = {
    name: "laoxie",
    age: 18,
  run: function () {
    console.log("I am running");
  },
}
```

### 6.8 对象类型的属性修饰符



对象类型中的每个属性可以说明它的类型、属性是否可选、属性是否只读等信息。

- ?: 可选属性，表示该属性可以不存在;
- readonly: 只读属性，表示该属性不能被修改;

```ts

interface Person {
    readonly id: number;
    name: string;
    age?: number;
}

const p: Person = {
    id: 1,
    name: "laoxie",
    age: 18
}

```


  
### 6.9 接口的继承

接口和类一样是可以进行继承的，也是使用extends关键字:
接口是支持多继承的(类不支持多继承)



```ts
interface Animal {
    eat(): void;
}

interface Person{
    work(): void;
}

class Student implements Person,Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat() {
        console.log("吃饭");
    }
    work() {
        console.log("工作");
    }
}

```

### 6.10 接口实现


接口定义后，也是可以被类实现的:

如果被一个类实现，那么在之后需要传入接口的地方，都可以将这个类传入;



```ts
interface Animal {
    eat(): void;
}

class Cat implements Animal {
    eat() {
        console.log("吃老鼠");
    }
}

```


