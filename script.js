var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var checkIcon = document.getElementById(check-icon);
var xIcon = document.getElementById(x-icon);
var i = 0;

xIcon.addEventListener("click", function(){
  typeNote();
})

checkIcon.addEventListener("click", function(){
  createNote();
})

function typeNote(){
if(container3.style.display == "none"){
  container3.style.display = "block";
}
else{
  container3.style.display = "none";
}
}

function createNote(){
var noteText = document.getElementById("note-text").value;
var node0 = document.createElement("div");
var node1 = document.createElement("h1");

node1.innerHTML = noteText;

node0.appendChild(node1);

container2.insertAdjacentElement("beforeend",node0);
}

function margin(){
var random_margin = ["-5px","1px","5px","10px","15px","20px"];

return random_margin[Math.floor(Math.random() *random_margin.length)];
}

function rotate(){
  var random_rotate = ["rotate(3deg)","rotate(1deg)","rotate(-1deg)","rotate(-3deg)","rotate(-5deg)","rotate(-10deg)"];

  return random_rotate[Math.floor(Math.random() *random_rotate.length)];
}

function color(){
  var random_color = ["#c2ff3d","#ff3de8","#3dc2ff","#04e22",
"#bc8e6","#ebb328"];

if(i > random_color.length -1){
  i = 0;
}
return random_color[i++];
}