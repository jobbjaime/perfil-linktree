function toggleSection(section) {
    // Aquí puedes agregar la lógica para mostrar/ocultar secciones
    console.log(`Toggling ${section} section`);
    // También podrías usar confirm() para las interacciones
    if(section === 'collaborate') {
        const wantToCollaborate = confirm('Would you like to send a collaboration request?');
        if(wantToCollaborate) {
            alert('Great! We will be in touch soon.');
        }
    }
}