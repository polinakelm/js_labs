document.getElementById('user-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const lastName = document.getElementById('lastName').value;
  const firstName = document.getElementById('firstName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;


  const result = `
    <h3>Введенные данные:</h3>
    <p><strong>Фамилия:</strong> ${lastName}</p>
    <p><strong>Имя:</strong> ${firstName}</p>
    <p><strong>Электронная почта:</strong> ${email}</p>
    <p><strong>Телефон:</strong> ${phone}</p>
  `;

  document.getElementById('result').innerHTML = result;
});


document.getElementById('toggle-theme').addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
});