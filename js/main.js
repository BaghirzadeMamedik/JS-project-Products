var icon1= document.querySelector(".icon-1")
var icon2= document.querySelector(".icon-2")
var bottom1 = document.querySelector(".bottom-1")
var bottom2 = document.querySelector(".bottom-2")
var bottom3 =document.querySelector(".bottom-3")
var left =document.querySelector(".left-icon")
var sp1 =document.querySelector(".sp-1")
var sp2 =document.querySelector(".sp-2")
var right =document.querySelector(".right-icon")
var bottom4 = document.querySelector("bottom-4")
var count = document.querySelector(".count")
var count2 = document.querySelector(".count-2")
var lefticon1 =document.querySelector(".left-icon1")
var sp3 =document.querySelector(".sp-3")
var sp4 =document.querySelector(".sp-4")
var righticon2 =document.querySelector(".right-icon2")

sp2.onclick=function(){
    bottom1.style.display ="none"
    bottom3.style.display="block"
    sp2.style.background = "#4e97fd";
    sp1.style.background = "rgb(204, 204, 204)";
    sp1.style.color = "black";
    sp2.style.color = "white";
    left.style.display = "inline-block"
    right.style.display = "none"
}

right.onclick=function(){
    bottom1.style.display ="none"
    bottom3.style.display="block"
    sp2.style.background = "#4e97fd";
    sp1.style.background = "rgb(204, 204, 204)";
    sp1.style.color = "black";
    sp2.style.color = "white";
    left.style.display = "inline-block"
    right.style.display = "none"
}


sp1.onclick=function(){
    bottom1.style.display ="block"
    bottom3.style.display="none"
    sp1.style.background = "#4e97fd";
    sp2.style.background = "rgb(204, 204, 204)";
    sp1.style.color = "white";
    sp2.style.color = "black";
    right.style.display = "inline-block"
    left.style.display = "none"
}

left.onclick=function(){
    bottom1.style.display ="block"
    bottom3.style.display="none"
    sp1.style.background = "#4e97fd";
    sp2.style.background = "rgb(204, 204, 204)";
    sp1.style.color = "white";
    sp2.style.color = "black";
    right.style.display = "inline-block"
    left.style.display = "none"
}








icon1.onclick= function(){
    bottom1.style.display= "block"
    bottom2.style.display="none"
    icon1.style.color="#4e97fd"
    icon2.style.color= "rgb(189, 189, 189)"
    bottom3.style.display = "none"
}

icon2.onclick= function(){
    bottom2.style.display= "block";
    bottom1.style.display="none";
    icon2.style.color ="#4e97fd";
    icon1.style.color = "rgb(189, 189, 189)"
    bottom3.style.display = "none"

}




