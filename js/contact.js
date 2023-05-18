document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementsByName('name')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var message = document.getElementsByName('message')[0].value;

    // Lógica para abrir el cliente de correo electrónico con los datos del formulario
    var recipientEmail = 'marinaarenas3012@gmail.com';
    var subject = 'Consulta';
    var body = 'Nombre: ' + name + '%0D%0AEmail: ' + email + '%0D%0AMensaje: ' + message;
    var mailtoLink = 'mailto:' + recipientEmail + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.location.href = mailtoLink;

    // Mostrar un mensaje de éxito en la página
    document.getElementById('successMsg').innerHTML = 'Mensaje enviado correctamente.';
    document.getElementById('successMsg').style.display = 'block';

    // Limpiar el formulario
    document.getElementById('contactForm').reset();
});
