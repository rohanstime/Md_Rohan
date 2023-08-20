const scriptURL = 'https://script.google.com/macros/s/AKfycby6cc3oQbNjvjEsH7xVeLS5CXyyDG2yTduTCNmOVKKmHAaGZuF_CId8cwhA6HkX8Wgw/exec'

const form2 = document.forms['my-contact-forms']
form2.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form2) })
    .then(response => alert("Thank you."))
    
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
    
})

