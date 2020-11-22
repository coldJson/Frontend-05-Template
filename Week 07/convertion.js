function NumberToString(value) {
  return String(value);
}

function StringToNumber(value) {
  const fixedValue = value.trim();
  const prefix = fixedValue.substr(0, 2);
  let result;
  switch (prefix) {
    case '0x':
      result = parseInt(fixedValue.substr(2), 16);
      break;
    case '0o':
      result = parseInt(fixedValue.substr(2), 8);
      break;
    case '0b':
      result = parseInt(fixedValue.substr(2), 2);
      break;
    default:
      result = parseInt(fixedValue, 10);
  }
  return result;
}