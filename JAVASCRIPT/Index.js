document.getElementById('quote-para-name1').addEventListener('change', autocopy);

function autocopy() {
  
    var startname= document.getElementById('quote-para-name1');
    var endname = document.getElementById('quote-para-name2');
    
    endname.value = startname.value;
};

function digitalClock()
{
  var date, time;
	date = new Date()
	time = date.toLocaleTimeString()	
	document.getElementById("clock").innerHTML = time;
}
setInterval(function(){
  digitalClock()
},1000)