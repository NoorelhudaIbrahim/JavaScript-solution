
var mark = prompt("plz insert the mark : ",'x');
document.write("The Mark: ",mark);

if (mark<50)
{
  alert(" Fall");
  console.log(" Fall");
  document.write(" Fall");
}       
else if (mark>50 && mark<59)
{
  alert(' D');
  console.log(' D');
  document.write(' D');
}
else if (mark>60 && mark<69)
{
  alert(' C');
  console.log(' C');
  document.write(' C');
}
else if (mark>70 && mark<79)
{
  alert(' B');
  console.log(' B');
  document.write(' B');
}
else if (mark>80 && mark<89)
{
    alert(' A');
    console.log(' A');
    document.write(' A');
  }
  else if (mark>90 && mark<100)
{
    alert(' A+');
    console.log(' A+');
    document.write(' A+');
  }
  
