function sendSave(id, idDB, newCard = false) {
    let heading = document.getElementsByClassName(`heading${id}`)[0].value;
    let color = document.getElementsByClassName(`color${id}`)[0].value;
    let description = document.getElementsByClassName(`description${id}`)[0].value;

    console.log(heading);
    console.log(color);
    console.log(description);

    if (newCard) {
        window.location = `/new?heading=${heading}&color=${color}&description=${description}`    
    } else {
        window.location = `/save?id=${idDB}&heading=${heading}&color=${color}&description=${description}`
    }
}