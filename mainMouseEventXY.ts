import { Observable, Observer } from "rxjs"; //Importa las librerías de rxjs :: Observable, Observer

let number = [1, 5, 10, 20];

let source = Observable.fromEvent(document, 'mousemove')
    .map((event:MouseEvent)=>{
        return {
            x: event.clientX,
            y: event.clientY
        }
    }).filter(element => {
        return element.x > 500;
    })
source.subscribe(
    value => {
        console.log(`valueX: ${value.x} valueY: ${value.y}`);
    },
    error => {
        console.log(`Error: ${error}`);
    },
    () => {
        console.log('Complete');
    }
);