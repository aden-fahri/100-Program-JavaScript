function string(str, num) {
  if (num < 0) return "";
  return str.repeat(num);
}

console.log(string("abc", 3));
