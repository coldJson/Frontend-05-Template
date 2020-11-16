# 学习笔记
- proxy实现双向数据绑定
    1. proxy实现代理用法
    ```javascript
    let proxy = new Proxy(target, handler);
    // target是目标对象，handler是个对象，在对象中通过提供的各种钩子函数实现代理
    ```
    2. 创建reactive函数，封装了为对象生成代理对象的基本方法；
    3. 创建effect函数，将对应监听的对象/属性的回调函数传入。关键涉及三个全局变量：
        - callbacks：Map对象，以键值对形式存储所有reactive化的对象的回调方法；
        - reactives：Map对象。存储所有reactive化对象的proxy对象，避免对象的重复注册。
        - usedReactives：数组，存储callback涉及的所有监听对象和属性，方便构建前两个Map对象的索引。


- Range实现Dom拖拽
    1. 鼠标事件监听-addEventListner，控制滑块拖拽
    2. Range对象-createRange、setStart、setEnd，确定文本节点中文字相对于父节点的相对位置。
        - createRange：创建一个range对象，range对象代表页面上一段连续的区域。
        - setStart（node，offset）：设置range起点位置，node是起点所属的节点，offset代表偏移量；
        - setEnd（node, offset）：与setStart类似
    3. 计算滑块最近的range，借助range对象API插入滑块dom元素。
        - insertNode（node）：在range的起点插入内容。
