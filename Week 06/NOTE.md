# 学习笔记——javascript的产生式与类型

## Number类型
- IEEE 754标准中，1个符号位、11位指数位、52位有效位数；
- 指数位有一基准值，与基准值的差值才是其所表示的真正指数值
## String类型
- **string的三个基本概念**：
1. 字符（character)
2. 码点 (code point)
3. 编码方式 (encoding)
  
- 编码方式  ：应用较多的是ASCII、Unicode，其余的可不用了解，注明的UTF-8就是Unicode字符集的一种实现
## Null、Undefined
+ null是关键字，而undefined不是。undefined甚至可以重新赋值。
```javascript
// undefined的赋值
var undefined = 'a'; // 对undefined的赋值是合法的，但这会带来很多问题
// 为避免，一般使用void来赋值undefined
var testVar = void 0;
// 在一些标准库中，常见到对变量undefined的判定
...
if (arg === void 0) {
  ...
}
...
```
## 对象
对象三要素：标识、状态、行为
### js对象
- 普通属性集合
- [[Prototype]]属性，指向对象的原型  
属性是键值对形式，键-key值可以用string或symbol类型表示
- 属性可分为数据属性和访问器属性
  - 数据属性：value、writable、enumerable、configurable
  - 访问器属性：get、set、enumerable、configurable