let fact = document.querySelector(".fact");
let factText = document.querySelector(".fact-text");

let numInput = document.querySelector(".num-input");
numInput.addEventListener("input", getFact);


function getFact() {
    if(fetch) {
        getFactFetch();
        
    } else {
        getFactAjax();
    }
}




function getFactAjax(e) {
    let number = numInput.value;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://numbersapi.com/" + number);
    xhr.onload = function() {
        if(this.status === 200 && number != "") {
            console.log(this.responseText);
            fact.style.display = "block";
            factText.innerText = this.responseText;
        }
    }
    xhr.send();
}

function getFactFetch() {
    let number = numInput.value;
    fetch("http://numbersapi.com/" + number)
        .then(response => response.text())
        .then(data => {
            if(number != "") {
                fact.style.display = "block";
                factText.innerText = data;
            }
        })
        .catch(err => console.log(err));   
}
