import { Observable, Observer } from "rxjs"; //Importa las librerías de rxjs :: Observable, Observer

let output = document.getElementById('output');
let button = document.getElementById('button');

let click = Observable.fromEvent(button, 'click');

function load(url: string){
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('load', () => {
        console.log(xhr.responseText);
        let jsonStarwars = JSON.parse(xhr.responseText);
        renderStarWars(jsonStarwars);
    });
    xhr.open('GET',url);
    xhr.send();
}

function renderStarWars(jsonStarwars){
        jsonStarwars.forEach(element => {
            let div = document.createElement('div');
            div.innerText = `${element.name} - ${element.category}`;
            output.appendChild(div);
        });
}

click.subscribe(
    value => {
        load('starwars.json');
    },
    error => {
        console.log(`Error: ${error}`);
    },
    () => {
        console.log('Complete');
    }
);