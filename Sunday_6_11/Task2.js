//i=row,j=column,count
"use strict";

str = "";
count = 1
for (let i = 1; i <= 4; i++)//for raw
 {
  for (let j = 1; j <= i; j++) {
    str += count;
    count++;
  }
  str += "\n";
}
console.log(str);


