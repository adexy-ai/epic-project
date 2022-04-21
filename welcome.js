let rulesNode = document.getElementsByTagName('input')[0];
let buttonNode = document.getElementById("proc");
buttonNode.onclick = function (){
    location.href = "index.html";
}
rulesNode.onchange = function(){
    if(this.checked){
        buttonNode.disabled = false;
    }else{
        buttonNode.disabled = true;
    }
}