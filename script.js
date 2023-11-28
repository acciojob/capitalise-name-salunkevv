//your JS code here. If required.
let item= document.getElementById("fname");
item.addEventListener("blur",(e)=>
{
        item.value= item.value.toUpperCase();
    
})
