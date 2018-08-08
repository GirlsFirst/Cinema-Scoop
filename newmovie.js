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
function myFunction4(){
  var jsonData4 = {};
  jsonData4["name4"] = document.getElementById("name4").value;
  jsonData4["comment4"] = document.getElementById("comment4").value;

  document.getElementById("prev_comments4").innerHTML = document.getElementById("prev_comments4").innerHTML + "<br>" + "Name: "+ jsonData4["name4"] +"<br>" +"Comment: " +jsonData4["comment4"] + "<br>";
  var x4= JSON.stringify(jsonData4);
  var n4 = localStorage.getItem("comment4");
  if (n4 == null) {
    n4=x4;
  }
  else{
    n4=n4+x4;
  }
  n4=n4+"+";
  localStorage.setItem("comment4", n4);
}

function Parser4(){
  var string4=localStorage.getItem("comment4");
  if(string4!=null){
    var com_list4=string4.split("+");
    for (var i = 0; i < com_list4.length; i++) {
      var obj4=JSON.parse(com_list4[i]);
      document.getElementById("prev_comments4").innerHTML = document.getElementById("prev_comments4").innerHTML + "<br>" + "Name: " + obj4["name4"] +"<br>" +"Comment: "+ obj4["comment4"] + "<br>";
    }
  }
}
