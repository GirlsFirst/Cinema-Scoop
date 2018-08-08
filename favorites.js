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

function myFunction(){
  var jsonData = {};
  jsonData["name"] = document.getElementById("name").value;
  jsonData["comment"] = document.getElementById("comment").value;

  document.getElementById("prev_comments").innerHTML = document.getElementById("prev_comments").innerHTML + "<br>" + "Name: "+ jsonData["name"] +"<br>" +"Comment: " +jsonData["comment"] + "<br>";
  var x= JSON.stringify(jsonData);
  var n = localStorage.getItem("comments");
  if (n == null) {
    n=x;
  }
  else{
    n=n+x;
  }
  n=n+"+";
  localStorage.setItem("comments", n);
}

function Parser(){
  var string=localStorage.getItem("comments");
  if(string!=null){
    var com_list=string.split("+");
    for (var i = 0; i < com_list.length; i++) {
      var obj=JSON.parse(com_list[i]);
      document.getElementById("prev_comments").innerHTML = document.getElementById("prev_comments").innerHTML + "<br>" + "Name: " + obj["name"] +"<br>" +"Comment: "+ obj["comment"] + "<br>";
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
