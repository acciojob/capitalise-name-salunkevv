//your JS code here. If required.
let item= document.getElementById("fname");
item.addEventListener("keyup",(e)=>
{
    if(e.key=="Enter")
    {
        item.value= item.value.toUpperCase();
    }
})
