function addingEventListener() {
    const img = document.getElementById("wallytongue");

    function clickAlert() {
        alert('Wally just licked you!');
    }

    img.addEventListener('click', clickAlert); 
}

addingEventListener();