document.querySelector('.page-header__toggle').onclick = function() {
  open();
}

function open() {
  document.querySelector('.page-header__main-nav').classList.toggle('page-header__show');
}

document.querySelector('.page-header__toggle').addEventListener('click', function(){
  document.querySelector('.page-header__toggle--active').classList.toggle('active');
})
