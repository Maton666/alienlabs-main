$(document).ready(function() {
    $('#login-button').click(function(e) {
      e.preventDefault();

      const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
          );
      };
      var email = $('#email').val();
      var password = $('#password').val();
      if (email === '' || password === '') {
        alert('Todos los campos son obligatorios');
      }
      else if (!validateEmail(email)) {
        alert('El correo no es válido');
      } 
      else if(password.length < 10) {
        alert('La contraseña no debe tener menos de 10 caracteres.');
      } else {
        window.location.href='home.html';
      }
    });
  });

  $(document).ready(function() {
    $('#register-button').click(function(e) {
      e.preventDefault();

      const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
          );
      };

      var firstname = $('#firstname').val();
      var lastname = $('#lastname').val();
      var email = $('#email').val();
      var password = $('#password').val();
      var confirmPassword = $('#confirmPassword').val();
      if (email === '' || password === '' || confirmPassword === '' || firstname === '' || lastname === '') {
        alert('Todos los campos son obligatorios');
      }
      else if (!validateEmail(email)) {
        alert('El correo no es válido');
      } 
      else if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
      }
      else if (password.length < 10) {
        alert('La contraseña no debe tener menos de 10 caracteres.');
      }
      else {
        window.location.href='home.html';
      }
    });
  });
  

  document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  
    alert('¡Usuario registrado con éxito!');
  });
  
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    var registeredEmail = localStorage.getItem('email');
    var registeredPassword = localStorage.getItem('password');
  
    if (email === registeredEmail && password === registeredPassword) {
      alert('¡Inicio de sesión exitoso!');
    } else {
      alert('Correo o contraseña inválida.');
    }
  });