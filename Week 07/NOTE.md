学习笔记

## 表达式

### 运算符与优先级
1. Member运算
2. Call-函数调用 
3. Unary 单目运算
4. Exponental-指数运算
    - 唯一右结合的运算： 3 ** 2 ** 3 => 3 ** (2 ** 3)
5. 简单运算：乘除（* % /）、加减、移位运算、关系比较（>=、<=、>、<、in、instanceof）。
    - 上述几种运算对运算符两边的数据有一定要求，在数字类型和string类型下计算有所不同。（应用中还是以数字为主，涉及字符时容易出错）
6. 相等（!=、==、!==、===）、位运算（|、&、^）。
    - 相等比较时要小心类型转换的坑，一般情况不建议使用双等
7. 逻辑运算（&&、||）、条件运算（三目运算符?:）
    - 存在短路现象，即在前一段表达式能够表示整个表达式结果时，后一段表达式不会被执行，在应用中常常用来替换if-else

### 类型转换  
常见转换现象：
1. a + b：加法运算，当不为number时，会转化成string进行。
2. a == b：双等号比较，类型不同时，会将类型转化为number再进行比较。这是非常反人类的一种设计，生产中尽量少用。
3. a[o] = b：对象中取值操作中，key值常常会进行类型转换。

7大基本类型互相转换总结：  
1. 任何类型都不会转换成undefined和null类型、以及symbol
2. 其他类型转换成number类型时，只有undefined比较特殊，会产生NaN，这个是在js中无法等于自身的对象
3. 除了symbol，其他类型都可转换成boolean类型，原类型的空值一般就对应了false，除了object之外，所有object都会被转换为true

拆箱转换（unboxing）  
**定义 object类型转换为普通类型**
- ToPremitive
- toString vs valueOf
- Symbol.toPremitive  

object转换时都会去调用ToPremitive方法，ToPremitive内部又是通过toString、valueOf或者Symbol.toPremitiv去实现的。优先级Symbol.toPremitive > toString/valueOf;  
toString和valueOf视调用环境不同优先级也有所不同，例如，在加法运算时，会优先调用valueOf，而在对象 a[b] 属性取值时，key值转换中会优先调用toString方法。

装箱转换（boxing）  
**定义 普通类型转换为object类型**
- undefined和null两种类型不存在装箱转换
- 其他类型基本是通过一个包装类或者说包装构造函数来实现的。如 Number => new Number();String => new String()
- symbol类型不能直接new，需要 new Object(Symbol('a'))来实现

<br>

## 语句 —— statement
语法分类：
- 简单语句
- 组合语句
- 声明  

运行时相关
- Completion Record（每段代码的执行结果记录）
- Lexial Environment(作用域)

<br>

### 简单语句
- 表达式
- 空语句 —— 即简单一个分号 “;”，也算构成一个语句
- debugger;
- throw
- continue
- break
- return

### 复合语句
- block块结构中的语句 —— { ...expression... }
- if语句
- switch语句
- 循环语句
  - while
  - do-while
  - for(;;)
  - for in
  - for of
  - for await(of)
- with
- label（一般与break、continue配合使用才有意义）
- try

### 声明
- 普通function
- 迭代器 function*
- 异步 async function
- 异步迭代器 async function*
- var
- class
- let/const  

前5种声明都存在于函数作用域；后两种声明后会创建自己的块级作用域

## JS执行粒度
- 宏任务
- 微任务（例如promise）
- 函数调用
- 语句/声明
- 表达式
- 直接量/变量/this...  

*宏任务由若干微任务组成，微任务之间一般是同步执行的，promise会产生一个微任务，而setTimeout则会产生一个宏任务*  
*函数调用是会在执行上下文中创建一个调用栈，JS的执行顺序以栈式的结构进行调用*

## 执行上下文
**这一部分内容比较晦涩难懂，比较接近js引擎执行的底层原理，有些抽象，需要反复再查阅资料理解，特此标记一下**