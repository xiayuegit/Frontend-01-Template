// 数字字面量正则
const numberLiteralRegExp = /(?:(?:0|[1-9]\d*)\.\d*(?:(?:e|E)(?:\+|-)?\d*)|(?:\.\d*(?:(?:e|E)(?:\+|-)?\d*){0,1})|(?:0|[1-9]\d*(?:(?:e|E)(?:\+|-)?\d*)))|(?:0(?:b|B)[0-1]+)|(?:0(?:o|O)[0-7]+)|(?:0(?:x|X)[0-9a-fA-F]+)/;

// 字符串转utf8
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

// 字符串字面量正则
const stringLiteralDoubleRegExp = /(?:"(?:(?:\p{L}|\p{N}|\p{P})(?!\\)(?!\n)(?<!"))*")|(?:" *")|(?:"\\(?:(?:['"\\bfnrtv])|(?:0)|(?:x\w\w)|(?:(?:u\w\w\w\w)|(?:u{[0-9]+})))")|(?:"\\(?:\n|\r|\p{Zl}|\p{Zp}|\r\n)")/;
const stringLiteralSingleRegExp = /(?:'(?:(?:\p{L}|\p{N}|\p{P})(?!\\)(?!\n)(?<!'))*')|(?:' *')|(?:'\\(?:(?:[''\\bfnrtv])|(?:0)|(?:x\w\w)|(?:(?:u\w\w\w\w)|(?:u{[0-9]+})))')|(?:'\\(?:\n|\r|\p{Zl}|\p{Zp}|\r\n)')/;
