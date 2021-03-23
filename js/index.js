let modalOpen = document.querySelector('.open');
let modalBg = document.querySelector('.modal-bg');
let modalClose = document.querySelector('.close-button')

modalOpen.addEventListener('click', function () {
  modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click', function () {
  modalBg.classList.remove('bg-active');

});

// form data

const wrapper = document.querySelector('.wrapper'),
form = wrapper.querySelectorAll('.form'),
submitInput = form[0].querySelector('input[type="submit"');

function getDataForm(e) {
   e.preventDefault();

   let formData = new FormData(form[0]);
    alert(formData.get ('nameField') + ' - ' + formData.get('emailField') + ' - ' + formData.get ('passwordField'))};
   


document.addEventListener("DOMContentLoaded", function(){
   submitInput.addEventListener('click', getDataForm, false);

}, false );



