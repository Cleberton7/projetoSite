const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('tema')
})

function Login(){
  location.href="telaLogin.html"
}