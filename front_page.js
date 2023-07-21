let tb = 33;
let lr = 30;
let r = document.getElementById("ball");
document.addEventListener("keypress" , function(event)
{
 if(event.key == "w")
 {
  tb = tb - 5;
  r.style.top = tb+"px";
 }
 else if(event.key == "s")
 {
    tb = tb + 5;
    r.style.top = tb+"px";
 }
 else if(event.key == "a")
 {
    lr = lr - 5;
    r.style.left = lr +"px";
 }
 else if(event.key == "d")
{
    lr = lr + 5;
    r.style.left = lr +"px";
}
});
// only use left and top position 
// we cannot use right and bottom position it cannot work like left and right
// so i use left and top 