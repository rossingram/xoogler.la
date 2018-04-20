var divGrid = document.querySelector('.grid')
var divFormGrid = document.querySelector('.form-grid')

var aShowForm = document.querySelector('.invite a')

aShowForm.addEventListener('click', function () {
  divGrid.classList.add('hide')
  divFormGrid.classList.remove('hide')
})
