
"use strict";
//String_Object.replace(String_you_want_to_change, Replacing_String)
//The replace() method does not change the string it is called on.
//The replace() method returns a new string.
//replace function is sensetive
//------------------------------------------------------
//replace example:
var Str1 = "We are ABC working at abc company";
var Str2 = "We are abc working at abc company";
//by default
var Str3 = Str2.replace("abc","JavaScript");
//global(/g flag)
var Str4 = Str2.replace(/abc/g,"JavaScript");
//replace function is sensetive
var Str5 = Str1.replace("abc","JavaScript");
//to replace case insensetive
var Str6 = Str1.replace(/abc/gi,"JavaScript");
//------------------------------------------------------
//.replace all example:
var Str7 = Str2.replaceAll("abc","JavaScript");
var Str8 = Str1.replaceAll("abc","code");

//------------------------------------------------------
console.log(Str3 + "<br \>");
console.log(Str4 + "<br \>");
console.log(Str5 + "<br \>");
console.log(Str6 + "<br \>");
console.log(Str7 + "<br \>");
console.log(Str8 + "<br \>");


