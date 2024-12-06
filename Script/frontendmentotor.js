let menu = document.getElementsByClassName('js-dropdown-menu1');
let dp = document.getElementsByClassName('dropdownclass');
function onclickDropdown1 (){
 menu.innerHTML= `
  <li>
    <ul>${Todolist}</ul>
    <ul>${Calendar}</ul>
    <ul>${Reminders}</ul>
    <ul>${Planning}</ul>
  </li>`
}
 let menu2 = document.getElementsByClassName('js-dropdown-menu2');
function onclickDropdown2 (){
  menu2.innerHTML = 
  `<li>
      <ul>${history}</ul>
      <ul>${Ourteam}</ul>
      <ul>${Blog}</ul>
    </li>`
}