/*window.addEventListener("scroll", () => {
  addStickClasses();
});

function addStickClasses() {
  let nav = document.getElementById("main-nav");
  let reference = document.getElementById("reference");
  if (window.scrollY > reference.offsetTop) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

document.getElementById("mobile-nav").addEventListener("click", expandNav);

function expandNav() {
  let nvaElements = document.getElementsByClassName("mobile-nav-option");
  let position = 0;
  let zIndex = -1;
  for (let element of nvaElements) {
    element.style.bottom = `${position}rem`;
    position += 4.5;
  }
}

/*---------Anpassungen von simi2394 vom 05.12.2022-----------*/
/*---------Funktion für Kontaktformular Responses----------*/
const form = document.getElementById('form');
const msg = document.getElementById('msg');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    e.preventDefault();
    var object = {};
    formData.forEach((value, key) => {
        object[key] = value
    });
    var json = JSON.stringify(object);
    msg.innerHTML = "Bitte warten..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                msg.innerHTML = json.message;
            } else {
                console.log(response);
                msg.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            msg.innerHTML = "Da ging etwas schief.";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
        });
});

