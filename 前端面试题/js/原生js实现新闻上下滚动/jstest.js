var n=document.getElementById("news");
var p1=document.getElementById("p1");
var p2=document.getElementById("p2");
p2.innerHTML=p1.innerHTML;
//alert(n.offsetHeight+" 1  "+p1.offsetHeight);
var f=function(){
    n.scrollTop++;
    if(n.scrollTop>=p1.offsetHeight){
        //alert(n.scrollTop+" 1  "+p1.offsetHeight);
        n.scrollTop=0;
    }
}
var i=setInterval(f,20);
var tz=function(){
    clearInterval(i);
}
var ks=function(){
    i=setInterval(f,20);
}
