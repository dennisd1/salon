
var lastSelected;

var select = document.querySelector(".timeinput");
var dateselect = document.getElementById('inputdate');
var nameselect = document.getElementById('inputname');
var phoneselect = document.getElementById('inputphone');
var messageselect = document.getElementById('inputmessage');
var today = new Date().toISOString().substring(0, 10),
field = document.querySelector('#inputdate');
field.value = today;
//
var selectOption = select.options[select.selectedIndex];
var lastSelected = localStorage.getItem('select');
//
var savedname = localStorage.getItem('inputname');
namefield = document.querySelector('#inputname');
namefield.value = savedname;
//
var savedphone = localStorage.getItem('inputphone');
phonefield = document.querySelector('#inputphone');
phonefield.value = savedphone;

if(lastSelected) {
    select.value = lastSelected; 
}

select.onchange = function () {
   lastSelected = select.options[select.selectedIndex].value;
   console.log(lastSelected);
   localStorage.setItem('select', lastSelected);
}
//
dateselect.onchange = function () {
   localStorage['inputdate'] = document.getElementById('inputdate').value;
}

nameselect.onchange = function () {
   localStorage['inputname'] = document.getElementById('inputname').value;
}

phoneselect.onchange = function () {
   localStorage['inputphone'] = document.getElementById('inputphone').value;
}

messageselect.onchange = function () {
   localStorage['inputmessage'] = document.getElementById('inputmessage').value;
}
 //setInterval(function() {
 //     localStorage['inputdate1'] = document.getElementById('inputdate').value;
 //     localStorage['inputname2'] = document.getElementById('inputname').value;
 //}, 20 * 1000);
//var input = document.getElementById('dateinput').value;
//localStorage.setItem('date', input);
