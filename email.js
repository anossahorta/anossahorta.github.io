(function() {
    emailjs.init('wzqbF-B5KQ1g_6Lht');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_0byorg7', 'template_bw5j4mk', this)
            .then(function() {
                console.log('SUCCESS!');
                window.alert('E-mail enviado com sucesso. Entraremos em contacto consigo assim que possível.')
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}