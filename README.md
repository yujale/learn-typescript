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
