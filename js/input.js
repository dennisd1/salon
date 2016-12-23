
var lastSelected1;

var select1 = document.querySelector(".timeinput");
var selectOption = select.options[select1.selectedIndex];
var lastSelected1 = localStorage.getItem('select1');

if(lastSelected) {
    select1.value = lastSelected1; 
}

select.onchange = function () {
   lastSelected1 = select.options[select1.selectedIndex].value;
   console.log(lastSelected1);
   localStorage.setItem('select1', lastSelected1);
}
