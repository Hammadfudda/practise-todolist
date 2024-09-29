var parent = document.getElementById ("parent");
var input = document.getElementById("input");


function deleteAll(){
    parent.innerHTML = "";
}
   
function delist(btn){
btn.parentNode.remove();
}

function editlist(btn){
    console.log(btn.parentNode.childNodes[0]);
    btn.parentNode.childNodes[0].nodeValue = prompt();
}
function addElement(){
 var pera = document.createElement("P");
var text  = document.createTextNode(input.value)
pera.appendChild(text);

 var editBtn = document.createElement("BUTTON")
 var  btnName = document.createTextNode("EDIT") 
 editBtn.setAttribute("onclick","editlist(this)")
 editBtn.appendChild(btnName);

var deletebtn = document.createElement("BUTTON")
var DeleteText = document.createTextNode("Delete")
deletebtn.setAttribute("onclick","delist(this)")
deletebtn.appendChild(DeleteText)

pera.appendChild(deletebtn);
pera.appendChild(editBtn);
parent.appendChild(pera)
console.log(pera)
}  