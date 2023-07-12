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
