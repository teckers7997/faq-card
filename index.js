let acc = document.getElementsByClassName('questionButton');

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle('questionButtonClicked');

        let panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
            panel.style.visibility = 'visible';
        }
    })
}

