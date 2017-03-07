var rabbit = 0;
var otter = 0;
var cat = 0;
var frog = 0;
var text = "";



function myFunction() {
    var x = document.getElementById("question1");
   text= "";
    var i;
  for(var i=0; x[i]; ++i){
      if(x[i].checked){
    text += x.elements[i].value + " ";
         }
    rabbit = (text.match(/rabbit/g) || []).length;
    otter = (text.match(/otter/g)|| []).length;
    cat = (text.match(/cat/g)|| []).length;
    frog = (text.match(/frog/g)|| []).length;}
    if (rabbit > otter && rabbit>cat && rabbit> frog){document.getElementById("rabbitwin").style.display = "inline-block"}
   else if (otter > rabbit && otter >cat && otter> frog){document.getElementById("otterwin").style.display = "inline-block"}
    else if (cat > rabbit && cat >otter && cat> frog){document.getElementById("catwin").style.display = "inline-block"}
    else if (frog > rabbit && frog >cat && frog> otter){document.getElementById("frogwin").style.display = "inline-block"}
else {document.getElementById("tie").style.display = "inline-block"
  }window.scrollTo(0, document.body.scrollHeight)}

  function reset(){
     document.getElementById("rabbitwin").style.display="none";
    document.getElementById("otterwin").style.display="none";
    document.getElementById("catwin").style.display="none";
    document.getElementById("frogwin").style.display="none";
    document.getElementById("tie").style.display="none";
    var rabbit = 0;
var otter = 0;
var cat = 0;
var frog = 0;
var text = "";
    
  }
function show_all(){
 document.getElementById("rabbitwin").style.display="inline-block";
    document.getElementById("otterwin").style.display="inline-block";
    document.getElementById("catwin").style.display="inline-block";
    document.getElementById("frogwin").style.display="inline-block";
    document.getElementById("tie").style.display="inline-block";
  window.scrollTo(0, document.body.scrollHeight)
}
       
   //function to test quiz     
  //function test_values() {document.getElementById("results").innerHTML = 'rabbit ' + rabbit + '<br>'+ 'otter '+ otter + '<br>'+ 'cat '+ cat + '<br>'+ 'frog '+ frog + '<br>' + 'selected: '+ text }