
function myFunction(itm) {

    if (itm == "Jordan") {
        let img = document.querySelector("img");
        img.innerHTML = "<img src='jordan.jpeg\' width=\'400px\' height=\'150px\'>";

    }

    else if (itm == "France") {
        let img = document.querySelector("img");
        img.innerHTML = "<img src='https://th.bing.com/th/id/OIP.JU4y8Q3C1eOPJbNh_3jIhgHaD6?pid=ImgDet&rs=1\' width=\'400px\' height=\'150px\'>";
    }
    else if (itm == "Germany") {
        let img = document.querySelector("img");
        img.innerHTML = "<img src='https://th.bing.com/th/id/OIP.2ZJK3WbiIhDdQ3AjIvd_-gHaEc?w=272&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7\' width=\'400px\' height=\'150px\'>";


    }
    else if (itm == "America") {
        let img = document.querySelector("img");
        img.innerHTML = "<img src='https://th.bing.com/th/id/R.b1fb8d66063003412c7ed81b37e6768d?rik=cQ%2fBtSQFhThzOg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-teCewhzjauo%2fUajtXCwjliI%2fAAAAAAAAAPU%2f5rg0jelRrho%2fs1600%2fAmerica%2bFlag%2b3.jpg&ehk=gEN1p3ZKOoNoQKUkl1eOS6QkvBnhhWPrIcY93DSEydk%3d&risl=&pid=ImgRaw&r=0\' width=\'400px\' height=\'150px\'>";
    }
    else if (itm == "Nigeria") {
        let img = document.querySelector("img");
        img.innerHTML = "<img src='https://th.bing.com/th/id/OIP.Hy4tx7f8TKKTOe3ozM1jmgHaHa?pid=ImgDet&rs=1\' width=\'400px\' height=\'150px\'>";
    }
    else {
        document.querySelector("img");
    }
};
