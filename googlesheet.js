const scriptURL = 'https://script.google.com/macros/s/AKfycbxWoUczdScBbiUfWgTmv7bfkNz0o_MeWgOMpu143YS3pSgMdNfuzuT5MhUGestlUJ_5MA/exec'
const form = document.forms['contact-form']
form.addEventListener('submit',e=> {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you."))
  .then(() => {window.location.reload();})
  .catch(error => console.error('Error!', error.message))
})











