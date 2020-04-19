#### 编程语言通识

##### 文法形式

* 非形式语言
  * 中文
* 形式语言
  * 0型: 无限制文法
    * 等号左边不止一个 <a><b> ::= "c"
  * 1型: 上下文相关文法
    * "a"<b>"c"::="a""x""c"
  * 2型: 上下文无关文法
    * js, 大部分情况是上下文无关
  * 3型: 正则文法
    * 限制表达能力

##### 产生式(BNF)

- 用尖括号括起来表示语法结构
- 语法结构
  - 基础结构称为终结符
  - 复合结构称为非终结符
- 引号和中间的字符表示终结符
- 可以有括号
- *表示重复多次
- |表示或
- +表示至少一次

四则运算

```
<Number> = "0" | "1" | "2" | ..... | "9"

<DecimalNumber> = "0" | (("1" | "2" | ..... | "9") <Number>* )

<PrimaryExpression> = <DecimalNumber> |
    "(" <LogicalExpression> ")"

<MultiplicativeExpression> = <PrimaryExpression> | 
    <MultiplicativeExpression> "*" <PrimaryExpression>| 
    <MultiplicativeExpression> "/" <PrimaryExpression>

<AdditiveExpression> = <MultiplicativeExpression> | 
    <AdditiveExpression> "+" <MultiplicativeExpression>| 
    <AdditiveExpression> "-" <MultiplicativeExpression>

<LogicalExpression> = <AdditiveExpression> | 
    <LogicalExpression> "||" <AdditiveExpression> | 
    <LogicalExpression> "&&" <AdditiveExpression>
```

**js 词法定义 用 `::`  语法定义 `:`**

##### 图灵完备性

- 图灵完备性
  - 命令式----图灵机
    - goto
    - if  和   while
  - 声明式----lambda
    - 递归



##### 动态与静态

- 动态
  - 在用户的设备/在线服务器上
  - 产品实际运行时
  - Runtime  运行时
- 静态
  - 在程序员的设备上
  - 产品开发时
  - Compiletime  编译

##### 类型系统

- 动态类型系统与静态类型系统
- 强类型与弱类型(有隐式转换)
  - String + Number
  - String == Boolean
- 复合类型
  - 结构体
  - 函数签名
- 子类型
  - 逆变/协变



##### 一般命令式编程语言

- Atom 原子
  - Identifier
  - Literal
- Expression 
  - Atom
  - Operator
  - Punctuator 符号
- Statement  语句
  - Expression
  - Keyword
  - Punctuator
- Structure 结构化
  - Function
  - Class
  - Process
  - Namespce
  - .....
- Program
  - Program
  - Module
  - Package
  - Libray



#### JavaScript

##### Unicode

- Blocks

  - Basic Latn
  - CJK Unified Ideographs(中日韩字符)
  - BMP(基本字符平面) 4位16进制以内可以表示的字符
  - emoji 表情字符(一般是5位以上16进制字符)

  ```js
  let code = "中文".codePointAt(0).toString(16);
  let hexCode = '\u' + code;
  ```

- Categories

  [Separator, Space](https://www.fileformat.info/info/unicode/category/Zs/index.htm)

##### 词法

- WhiteSpace

  \<NBSP> 

- LineTerminator

  - LF: `\n`
  - CR: `\r`

- Comment

  **webpack魔法注释**

- Token(标记)

  - Punctuator 符号

  - IdentifierName

    - Keywords 关键字
    - Identifier 标识符
    - Future reserved Keywords

  - Literal 直接量

    - Number

      小数比较需要转正整数去比

      存储格式 `TypedArray`

      查看一个数字的不同进制  `100.toString(n)` n=2 8 16 32

      作业： 正则匹配js所有numberLiteral

      ```js
      /(?:(?:0|[1-9]\d*)\.\d*(?:(?:e|E)(?:\+|-)?\d*)|(?:\.\d*(?:(?:e|E)(?:\+|-)?\d*){0,1})|(?:0|[1-9]\d*(?:(?:e|E)(?:\+|-)?\d*)))|(?:0(?:b|B)[0-1]+)|(?:0(?:o|O)[0-7]+)|(?:0(?:x|X)[0-9a-fA-F]+)/
      ```

    - String

      - Character 字符

      - Code Point (16)  码点

      - Encoding (8) 编码

      - Grammar

        ``` ` `''` `""` 

      作业：UTF8 encoding函数

      ```js
      const utf8_encoding = (text) => {
        text = encodeURI(text);
        const result = [];
        let i = 0;
        while (i < text.length) {
          const char = text.charCodeAt(i++);
          if (char === 37) {
            result.push(parseInt(text.substr(i, 2), 16))
            i += 2;
          } else {
            result.push(char);
          }
        }
        return new Uint8Array(result);
      }
      ```

      作业：匹配字符串直接量

      ```js
      /(?:"(?:(?:\p{L}|\p{N}|\p{P})(?!\\)(?!\n)(?<!"))*")|(?:" *")|(?:"\\(?:(?:['"\\bfnrtv])|(?:0)|(?:x\w\w)|(?:(?:u\w\w\w\w)|(?:u{[0-9]+})))")|(?:"\\(?:\n|\r|\p{Zl}|\p{Zp}|\r\n)")/
      
      /(?:'(?:(?:\p{L}|\p{N}|\p{P})(?!\\)(?!\n)(?<!'))*')|(?:' *')|(?:'\\(?:(?:[''\\bfnrtv])|(?:0)|(?:x\w\w)|(?:(?:u\w\w\w\w)|(?:u{[0-9]+})))')|(?:'\\(?:\n|\r|\p{Zl}|\p{Zp}|\r\n)')/
      ```

      

    - Boolean

    - Null

    - Undefined



