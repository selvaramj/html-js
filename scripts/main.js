var idd = document.getElementById('sidebar-btn');
var btn = document.getElementsByClassName('show-for-mobile-view')[0];
idd.addEventListener('click', () => {
  btn.classList.toggle('active');
});
console.log('loaded');
