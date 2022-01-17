function openCard(element, index, content, open = true) {
    let card = document.getElementsByClassName(`card_${index}`)[0];
    let trafficLight = document.getElementsByClassName(`trafficLight_${index}`)[0];    
    let description = document.getElementsByClassName(`description_p_${index}`)[0];
    let moreButton = document.getElementsByClassName(`moreButton_${index}`)[0];
    let moreButton_p = document.getElementsByClassName(`moreButton_p_${index}`)[0];

    if (!card.classList.contains('open')) {
        
        card.classList.add('open');
        

        trafficLight.style.animation = 'open_trafficLight 300ms ease-in-out forwards';
        card.style.animation = 'open_card 300ms ease-in-out forwards';
        description.style.animation = 'open_Description 300ms ease-in-out forwards';
        moreButton.style.animation = 'open_moreButton 500ms ease-in-out forwards';

        description.innerHTML = content;
        moreButton_p.innerHTML = 'Schließen';
    } else {
        card.classList.remove('open');

        
        card.style.animation = 'close_card 300ms ease-in-out forwards';
        trafficLight.style.animation = 'close_trafficLight 300ms ease-in-out forwards';
        description.style.animation = 'close_Description 500ms ease-in-out forwards';
        moreButton.style.animation = 'close_moreButton 500ms ease-in-out forwards';
        
        
        setTimeout(() => {
            description.innerHTML = '';
        }, 200)
        moreButton_p.innerHTML = 'Details';
    }
    //console.log(element)
}

function close(index) {
    let trafficLight = document.getElementsByClassName(`trafficLight_${index}`)[0];
    trafficLight.style.animation = 'null';
}