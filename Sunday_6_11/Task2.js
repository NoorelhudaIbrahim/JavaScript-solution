
str = "";
count = 1
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    str += count;
    count++;
  }
  str += "\n";
}
console.log(str);


