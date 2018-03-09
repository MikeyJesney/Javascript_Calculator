function square(){
  x=space.value
  x=eval(x*x);
  space.value=x;
}

function del(){
  var num = space.value;
  var len = num.length-1;
  var newNum = num.substring(0,len);
  space.value = newNum;
}

function answer(){
  x=space.value
  x=eval(x);
  space.value=x;
}

var space = document.getElementById("screen");

function toScreen(x){
  space.value+=x;
  
  if(x==='C'){
    space.value='';
  }
}