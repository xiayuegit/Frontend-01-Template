##### EventLoop

- 同步代码只存在于Call Stack中，先进后出，后进先出。

- 异步代码进入Event Loop中

  ```js
  setTimeout()
  setInterval()
  Promise.resolve().then()
  fetch().then()
  ```

  有宿主环境通知Event Loop js主线程执行完毕，此时Event Loop 把内部的任务压如Call Stack执行。

- 进程(process)与线程(thread)

  - 一个程序可以有多个进程
  - 一个进程可以有多个线程(或者没有)
  - 线程依附于进程存在

  浏览器进程

  - 主进程

  - 三方插件进程

  - GPU进程

  - 渲染进程

    - GUI渲染线程

      - 渲染浏览器界面，构建DOM树，布局和绘制等等
      - 重绘(Repaint) 回流(reflow)

    - JS引擎线程(**js是单线程的**)

      - 解析js脚本并执行。
      - GUI 与 JS引擎线程是互斥的 

    - 事件触发线程

      接受浏览器的操作响应事件

    - 定时器线程

    - 异步Http请求线程




##### 宏任务(Macrotask) 与 微任务(Microtask)

宏任务

- script

- setTimeout
- setInterval
- I/O
- UI交互事件
- postMessage
- setImmediate(NodeJs)

微任务

- Promise.then
- MutationObserver
- process.nextTick(NodeJs)

执行步骤(eventloop)

1. 从宏任务取出一个任务执行

2. 执行过程中若遇到微任务则将其添加到微任务队列中

3. 宏任务执行完毕后，顺序执行微任务列表

4. GUI渲染

5. 回到步骤1



##### JS Context

Realm



##### 函数调用 (Execution Context)

Execution Context Stack

- Running Execution Context
- Execution Context
  - code evaluation state
  - Function
  - Script or Module
  - Generator
  - Realm
  - LexicalEnvironment
    - this
    - new.target
    - super
    - 变量
  - VariableEnvironment



##### Environment Record

- Environment Records

  - Declarative 

  - Global

  - Object

    - Function

      Closure

    - module



