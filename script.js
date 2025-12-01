// firsly we have to select the 3 classes ..
// 1- btn modal-button
// 2- modal-overlay
// close-btn

const a = document.querySelector('.modal-button');
const b = document.querySelector('.modal-overlay');
const c = document.querySelector('.close-btn')

// now we have to ass the eventlistener to the a...
a.addEventListener('click',function()
{
  if(a.classList.contains('open-modal'))
  {   
    b.classList.remove('open-modal')
  }
  else
  {
    b.classList.add('open-modal')
  }
})

// now add the functionality to the close button...
c.addEventListener('click',function()
{
  b.classList.remove('open-modal')
})

