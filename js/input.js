
var lastSelected;

var select = document.querySelector(".timeinput");
var dateselect = document.getElementById('inputdate');
var nameselect = document.getElementById('inputname');

var list = new Array(select, dateselect, timeselect);

var selectOption = select.options[select.selectedIndex];
var lastSelected = localStorage.getItem('select');

if(lastSelected) {
    select.value = lastSelected; 
}

select.onchange = function () {
   lastSelected = select.options[select.selectedIndex].value;
   console.log(lastSelected);
   localStorage.setItem('select', lastSelected);
}



dateselect.onchange = function () {
   localStorage['inputdate3'] = document.getElementById('inputdate').value;
}
    
 setInterval(function() {
      localStorage['inputdate1'] = document.getElementById('inputdate').value;
      localStorage['inputname2'] = document.getElementById('inputname').value;
 }, 20 * 1000);
//var input = document.getElementById('dateinput').value;
//localStorage.setItem('date', input);
