function UTF8Encoding(str) {
  const utf8Arr = [];
  for (let s of str) {
    const utf8 = `${s.codePointAt(0)}${s.codePointAt(1) ? `,${s.codePointAt(1)}` : ''}${s.codePointAt(2) ? `,${s.codePointAt(2)}` : ''}${s.codePointAt(3) ? `,${s.codePointAt(3)}` : ''}`;
    utf8Arr.push(utf8);
  }
  return utf8Arr;
}