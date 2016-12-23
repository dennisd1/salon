
var lastSelected;

var select = document.querySelector(".timeinput");
var selectOption = select.options[select1.selectedIndex];
var lastSelected = localStorage.getItem('select');

if(lastSelected) {
    select.value = lastSelected; 
}

select.onchange = function () {
   lastSelected = select.options[select1.selectedIndex].value;
   console.log(lastSelected);
   localStorage.setItem('select', lastSelected);
}
