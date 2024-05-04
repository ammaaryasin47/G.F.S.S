document.getElementById('quote-para-name1').addEventListener('change', autocopy);

function autocopy() {
  
    var startname= document.getElementById('quote-para-name1');
    var endname = document.getElementById('quote-para-name2');
    
    endname.value = startname.value;
};