import { Observable, Observer } from "rxjs"; //Importa las librerías de rxjs :: Observable, Observer

let output = document.getElementById('output');
let button = document.getElementById('button');

let click = Observable.fromEvent(button, 'click');

function load(url: string){
    return Observable.create(observer => {

        let xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () => {
            if(xhr.status === 200){
                let jsonStarwars = JSON.parse(xhr.responseText);
                observer.next(jsonStarwars);
                observer.complete();
            }else{
                observer.error();
            }
        });
        xhr.open('GET',url);
        xhr.send();
    });
}

function renderStarWars(jsonStarwars){
        jsonStarwars.forEach(element => {
            let div = document.createElement('div');
            div.innerText = `${element.name} - ${element.category}`;
            output.appendChild(div);
        });
}

click.subscribe(x => load("calificaciones.json")
                    .subscribe(x => Observable.from(x).filter((x: any) => x.cal > 60)
                    .subscribe(x => console.log(x.name)
                    )));

click.subscribe(x => load("calificaciones.json")
.subscribe(x => Observable.from(x).max()
.subscribe(x => console.log(x)
)));


// click.subscribe(
//     value => {
//         load('starwars.json')
//         .subscribe(value => {
//             renderStarWars(value);
//         },
//         error => {
//             console.log(`Error: ${error}`);
//         });
//     },
//     error => {
//         console.log(`Error: ${error}`);
//     },
//     () => {
//         console.log('Complete');
//     }
// );