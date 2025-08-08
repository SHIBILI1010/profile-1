function clickpopup(){
    const text=document.getElementById("text").value.trim();
    const  email=document.getElementById("email").value.trim();
    const  textarea=document.getElementById("textarea").value.trim();

    if (text === "",email ==="",textarea ===""){
        alert("please enter the a text")
        return;
    }
alert('saved');
document.getElementById("text").value ="";
document.getElementById("email").value="";
document.getElementById("textarea").value="";
}