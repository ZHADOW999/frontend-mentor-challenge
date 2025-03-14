const dropdownBtns = document.querySelectorAll('.dropdownclass');
for(const dropdownBtn of dropdownBtns){
  dropdownBtn.addEventListener('click', function(){
    const dropDown = this.querySelector('.dropdown');
    dropDown.classList.toggle('show');
    // dropDown.classList.toggle('dropdown-1');
    // dropDown.classList.toggle('dropdown-2');
    dropDown.classList.toggle('dropdown-mobile');
  });
}


const burgerMenu = document.querySelector('.menu-icon');
const mobileDropdown = document.querySelector('.mobile-view-dropdown');
const closeMenu = document.querySelector('.cross-mobile');

burgerMenu.addEventListener('click', function () {
  mobileDropdown.classList.toggle('show');
});

closeMenu.addEventListener('click', function () {
  mobileDropdown.classList.remove('show');
});
/*const burgermenu = document.querySelector('.menu-icon');
for(const burgermenu of buttons){
  dropdownBtn.addEventListener('click', function(){
    const dropDown = this.querySelector('.dropdown');
    dropDown.classList.toggle('show');
    dropDown.classList.toggle('dropdown-1');
    dropDown.classList.toggle('dropdown-2');
  });
}
function toggleClasses(element){
  classNames.forEach(className => {
    element.classList.toggle(className);
  });
}*/
/*function toggleMore(element, class0, class1){
   elment.classList.toggle('class0');
   element.classList.toggle('class1');
}

for(const dropdownBtn of dropdownBtns){
  dropdownBtn.addEventListener('click', function(){
    const dropDown = this.querySelector('.dropdown');
     toggleMore(dropdown-icon, dropdown-toggle)
  });
}*/