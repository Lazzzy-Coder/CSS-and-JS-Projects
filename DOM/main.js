var demoDiv = document.getElementById("demo-div");
var demoButton = document.getElementsByTagName("button");
document.getElementById
// demoDiv.addEventListener()

function changeBG(){
    demoDiv.style.backgroundColor = "#e06677";
    document.getElementById("btn").innerHTML = "Double Click to Revert Back";
}
function revert(){
    demoDiv.style.backgroundColor = "#7c8fc9";
    document.getElementById("btn").innerHTML = "change my color";   
}
var count = 1;
document.getElementById("add-paragaph").onclick = function () {

    var ok = true;

    if (ok === true) {
      var para = document.createElement('p');
      para.innerHTML="Hi I am  a new Paragraph "+count;
      para.classList.add("para");
      document.getElementById('container').appendChild(para); 
      count = count+1;
   }
};
var countHead = 1;
document.getElementById("heading").onclick = function () {

    var ok1 = true;
    if (ok1 === true) {
      var head = document.createElement('h1');
      head.innerHTML="Lazzzy Heading "+ countHead;
      head.classList.add("head");
      document.getElementById('container').appendChild(head); 
      countHead+=1;
   }
}; 

var coolers = ["#fad283","#7c8fc9","#e06677"]
var countDiv = 0;
document.getElementById("div").onclick = function () {

    var ok1 = true;
    if (ok1 === true) {
      var div = document.createElement('div');
      div.classList.add("new-div");
      div.style.backgroundColor = coolers[countDiv];
      document.getElementById('container').appendChild(div);
   
      countDiv=(countDiv+1)%3;
   }
}; 
document.getElementById("delete-demo").onclick = function () {
    document.getElementById("demo-div").remove();
};
function anim(){
       
        document.getElementById("demo-div").classList.add("disco");
        document.getElementById("disco").innerHTML = "Double Click Stop";
}

function revertd(){
    document.getElementById("demo-div").classList.remove("disco");
    document.getElementById("disco").innerHTML = "Lets Disco";   
}