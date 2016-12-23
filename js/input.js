
var lastSelected;
var lastSelectedDate;

var select = document.querySelector(".timeinput");
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

 setInterval(function() {
      localStorage['inputdate1'] = document.getElementById('inputdate').value;
      localStorage['inputname2'] = document.getElementById('inputname').value;
      localStorage.setItem("Newinputdate", document.getElementById("inputname").value);
 }, 20 * 1000);
//var input = document.getElementById('dateinput').value;
//localStorage.setItem('date', input);
