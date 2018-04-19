import { Observable, Observer } from "rxjs"; //Importa las librerías de rxjs :: Observable, Observer

let number = [1, 5, 10];
let source = Observable.from(number); //Genera eventos para que se puedan suscribir a ellos

class MyObservable implements Observer<number> {
    //closed?: boolean;
    next(value: number) { //Ocurrio un evento, todo salio bien, ahí te va lo que paso.
        console.log(`ValueOk: ${value}`);
    }; 
    error(err: any){
        console.log(`Error: ${err}`);
    }; //Ocurrio un evento pero surgio un error, caiga de conexion por ejemplo.
    complete() {
        console.log(`Complete!`);
        
    };   //
}

source.subscribe(new MyObservable);
source.subscribe(
    value => {
        console.log(`value: ${value}`);
    },
    error => {
        console.log(`Error: ${error}`);
    },
    () => {
        console.log('Complete');
    }
);