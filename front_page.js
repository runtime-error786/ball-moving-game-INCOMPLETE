let tb = 33;
let lr = 30;
let r = document.getElementById("ball");
let topb = 33;
let bot = 665;
let left = 30;
let rig = 1470;
document.addEventListener("keypress" , function(event)
{
 if(event.key == "w")
 {
    tb = tb - 7;
    if(tb>topb)
    {
        r.style.top = tb+"px";
    }
    else{
        tb = tb + 7;
    }
 }
 else if(event.key == "s")
 {
    tb = tb + 7;
    if(tb<bot)
    {
        r.style.top = tb+"px";
    }
    else{
        tb = tb - 7;
    }
    
 }
 else if(event.key == "a")
 {
    lr = lr - 7;
    if(lr>left)
    {
        r.style.left = lr +"px";
    }
    else{
        lr = lr + 7;
    }
 }
 else if(event.key == "d")
{
    lr = lr + 7;

    if(lr<rig)
    {
        r.style.left = lr +"px";
    }
    else{
        lr = lr - 7;
    }
}
});
// only use left and top position 
// we cannot use right and bottom position it cannot work like left and right
// so i use left and top 