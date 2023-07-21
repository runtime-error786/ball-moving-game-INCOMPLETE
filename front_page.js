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
    tb = tb - 5;
    if(tb>topb)
    {
        r.style.top = tb+"px";
    }
    else{
        tb = tb + 5;
    }
 }
 else if(event.key == "s")
 {
    tb = tb + 5;
    if(tb<bot)
    {
        r.style.top = tb+"px";
    }
    else{
        tb = tb - 5;
    }
    
 }
 else if(event.key == "a")
 {
    lr = lr - 5;
    if(lr>left)
    {
        r.style.left = lr +"px";
    }
    else{
        lr = lr + 5;
    }
 }
 else if(event.key == "d")
{
    lr = lr + 5;

    if(lr<rig)
    {
        r.style.left = lr +"px";
    }
    else{
        lr = lr - 5;
    }
}
});
// only use left and top position 
// we cannot use right and bottom position it cannot work like left and right
// so i use left and top 