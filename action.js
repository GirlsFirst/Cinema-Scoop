// function incrementValue()
// {
//     var value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     value++;
//     document.getElementById('number').value = value;
//
// }

//comment box 1

function addComment(){
    var userComment = document.getElementById("userComment").value;
	document.getElementById("ui-state-default").innerHTML = userComment;
}

function myFunction6(){
  var jsonData6 = {};
  jsonData6["name6"] = document.getElementById("name6").value;
  jsonData6["comment6"] = document.getElementById("comment6").value;

  document.getElementById("prev_comments6").innerHTML = document.getElementById("prev_comments6").innerHTML + "<br>" + "Name: "+ jsonData6["name6"] +"<br>" +"Comment: " +jsonData6["comment6"] + "<br>";
  var x6= JSON.stringify(jsonData6);
  var n6 = localStorage.getItem("comments6");
  if (n6 == null) {
    n6=x6;
  }
  else{
    n6=n6+x6;
  }
  n6=n6+"+";
  localStorage.setItem("comments6", n6);
}

function Parser6(){
  var string6=localStorage.getItem("comments6");
  if(string6!=null){
    var com_list6=string6.split("+");
    for (var i = 0; i < com_list6.length; i++) {
      var obj6=JSON.parse(com_list6[i]);
      document.getElementById("prev_comments6").innerHTML = document.getElementById("prev_comments6").innerHTML + "<br>" + "Name: " + obj6["name6"] +"<br>" +"Comment: "+ obj6["comment6"] + "<br>";
    }
  }
}


//comment box 2
function myFunction2(){
  var jsonData2 = {};
  jsonData2["name2"] = document.getElementById("name2").value;
  jsonData2["comment2"] = document.getElementById("comment2").value;

  document.getElementById("prev_comments2").innerHTML = document.getElementById("prev_comments2").innerHTML + "<br>" + "Name: "+ jsonData2["name2"] +"<br>" +"Comment: " +jsonData2["comment2"] + "<br>";
  var x2= JSON.stringify(jsonData2);
  var n2 = localStorage.getItem("comments_two");
  if (n2 == null) {
    n2=x2;
  }
  else{
    n2=n2+x2;
  }
  n2=n2+"+";
  localStorage.setItem("comments_two", n2);
}

function Parser2(){
  var string2=localStorage.getItem("comments_two");
  if(string2!=null){
    var com_list2=string2.split("+");
    for (var i = 0; i < com_list2.length; i++) {
      var obj2=JSON.parse(com_list2[i]);
      document.getElementById("prev_comments2").innerHTML = document.getElementById("prev_comments2").innerHTML + "<br>" + "Name: " + obj2["name2"] +"<br>" +"Comment: "+ obj2["comment2"] + "<br>";
    }
  }
}

//comment box 3
function myFunction3(){
  var jsonData3 = {};
  jsonData3["name3"] = document.getElementById("name3").value;
  jsonData3["comment3"] = document.getElementById("comment3").value;

  document.getElementById("prev_comments3").innerHTML = document.getElementById("prev_comments3").innerHTML + "<br>" + "Name: "+ jsonData3["name3"] +"<br>" +"Comment: " +jsonData3["comment3"] + "<br>";
  var x3= JSON.stringify(jsonData3);
  var n3 = localStorage.getItem("comment3");
  if (n3 == null) {
    n3=x3;
  }
  else{
    n3=n3+x3;
  }
  n3=n3+"+";
  localStorage.setItem("comment3", n3);
}

function Parser3(){
  var string3=localStorage.getItem("comment3");
  if(string3!=null){
    var com_list3=string3.split("+");
    for (var i = 0; i < com_list3.length; i++) {
      var obj3=JSON.parse(com_list3[i]);
      document.getElementById("prev_comments3").innerHTML = document.getElementById("prev_comments3").innerHTML + "<br>" + "Name: " + obj3["name3"] +"<br>" +"Comment: "+ obj3["comment3"] + "<br>";
    }
  }
}
