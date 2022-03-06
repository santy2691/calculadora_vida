



 export function tiempoDeVida(fechaInicio,fechaFinal) {
    // inicializo las variables
    let aux, any, mes, dia, horas, minutos, segundos, milisegundos;
    // creo un objeto date con la fecha de nacimiento
    let fechaInit = new Date(fechaInicio);
    let fechaFin = new Date(fechaFinal);
    // veo los años de la fecha de nacimiento y del año actual 
    // y mas adelante veo cuantos bisiestos hay
    let anyNacimiento = fechaInit.getFullYear();
    let anyActual = fechaFin.getFullYear();
    // verifico cuantos años bisiesto pasaron en el tramo de esos años
    let numBisiestos = numAnyBisiesto(anyNacimiento,anyActual);
    // calculo los milisegundos que han pasado desde la fecha de nacimiento
    let milisegundosInit = fechaInit.getTime();
    let milisegundosDesdeInit =  fechaFin.getTime() - milisegundosInit;
    milisegundosDesdeInit -=  numBisiestos * 24 * 60 * 60 * 1000;
    // voy calculando a partir de los milisegundos cuanto tiempo a pasado
    any = milisegundosDesdeInit / 1000 / 60 / 60 / 24 / 30 / 12  ;
    mes = any - Math.floor(any);
    mes *= 12;
    dia = mes - Math.floor(mes);
    dia *= 30;
    horas =dia - Math.floor(dia);
    horas *= 24;
    minutos = horas - Math.floor(horas);
    minutos *= 60; 
    segundos = minutos - Math.floor(minutos);
    segundos *= 60;
    milisegundos = segundos - Math.floor(segundos);
    milisegundos *= 1000; 
    return {
        any : Math.floor(any),
        meses : Math.floor(mes),
        dias : Math.floor(dia),
        horas :  Math.floor(horas),
        min : Math.floor(minutos),
        seg : Math.floor(segundos) 
    }
}


/**
 * numera la cantidad de años biciestos que hay entre 2 fechas ambas incliudas
 * @param {number} any1 el año de inicio 
 * @param {number} any2 el año final 
 * @returns {number}
 */
 function numAnyBisiesto(any1, any2) {
    let fecha;
    let contadorBisiestos = 0;
    for(let i = any1; i <= any2; i++) {
        fecha = new Date(any1,1,29);
        if (fecha.getDate() === 29) {
            contadorBisiestos++;
        }
        any1++;
    }
    return contadorBisiestos;

}