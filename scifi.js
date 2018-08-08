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
function myFunction5(){
  var jsonData5 = {};
  jsonData5["name5"] = document.getElementById("name5").value;
  jsonData5["comment5"] = document.getElementById("comment5").value;

  document.getElementById("prev_comments5").innerHTML = document.getElementById("prev_comments5").innerHTML + "<br>" + "Name: "+ jsonData5["name5"] +"<br>" +"Comment: " +jsonData5["comment5"] + "<br>";
  var x5= JSON.stringify(jsonData5);
  var n5 = localStorage.getItem("comments_five");
  if (n5 == null) {
    n5=x5;
  }
  else{
    n5=n5+x5;
  }
  n5=n5+"+";
  localStorage.setItem("comments_five", n5);
}

function Parser5(){
  var string5=localStorage.getItem("comments_five");
  if(string5!=null){
    var com_list5=string5.split("+");
    for (var i = 0; i < com_list5.length; i++) {
      var obj5=JSON.parse(com_list5[i]);
      document.getElementById("prev_comments5").innerHTML = document.getElementById("prev_comments5").innerHTML + "<br>" + "Name: " + obj5["name5"] +"<br>" +"Comment: "+ obj5["comment5"] + "<br>";
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
