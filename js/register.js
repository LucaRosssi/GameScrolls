const user = document.getElementById('user');

function crearRegistroHTML() {
  return `
    <div class="registro">
      <div class="container" id="signIn">
        <form class="login">
          <h2 class="login-h2">Iniciar Sesion</h2>
          <input type="text" placeholder="Usuario" class="input-field">
          <input type="password" placeholder="Contraseña" class="input-field">
          <button class="submit-btn pointer escala">Iniciar Sesion</button>
        </form>
        <div class="change-menu">
          <p class="span">¿No tienes una cuenta? Registrate <a href="" class="href-normalizado">aca</a></p>
        </div>
      </div>
    </div>
  `;
}

user.addEventListener('click', () => {
  const existente = document.querySelector('.registro');
  const contenedor = document.querySelector('.navbar');

  if (existente) {
    existente.classList.add('ocultar'); // animación salida
    setTimeout(() => existente.remove(), 200); // lo borra luego de animar
  } else {
    contenedor.insertAdjacentHTML('beforeend', crearRegistroHTML());
    const nuevo = document.querySelector('.registro');
    setTimeout(() => nuevo.classList.add('visible'), 10); // dispara animación entrada
  }
});

console.log(registerBtn);