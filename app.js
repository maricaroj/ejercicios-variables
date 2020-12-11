                                                        // EJERCICIO 1
/*console.log('Saludo');
const name = prompt('Ingrese su nombre');
const lastName = prompt('Ingrese su apellido');

alert(`Hola ${name} ${lastName}, bienvenid@ a Ada`);*/


                                                        // EJERCICIO 2
/*console.log('Heladeria');

const saborOne = prompt('Ingrese sabor 1'); 
const saborTwo = prompt('Ingrese sabor 2');
const saborThree = prompt('Ingrese sabor 3');

alert(`Aquí tiene su helado de ${saborOne}, ${saborTwo}, ${saborThree}.`);*/


                                                        // EJERCICIO 3
/*console.log('Datos Personales');

const nombre = prompt('Ingrese su Nombre');
const apellido = prompt('Ingrese su Apellido');
const edad = prompt('Ingrese su Edad');
const nacionalidad = prompt('Ingrese su Nacionalidad');
const documento = prompt('Ingrese su Documento');

alert(`Nuevo usuario agregado al sistema:
    Nombre: ${nombre}
    Apellido: ${apellido}
    Edad: ${edad}
    Nacionalidad: ${nacionalidad}
    Documento: ${documento}
`);*/


                                                        // EJERCICIO 4
/*console.log('Lista de Reproducción');

const playList = prompt('Ingrese el nombre de su PlayList');
const songOne = prompt ('Ingresa el título de tu primera canción');
const songTwo = prompt ('Ingresa el título de tu segunda canción');
const songThree = prompt ('Ingresa el título de tu tercera canción');

alert(`Se ha creado la PlayList '${playList}' con las canciones: '${songOne}', '${songTwo}', '${songThree}'`);*/


                                                        // EJERCICIO 5
/*console.log('Dirección Completa');

const street = prompt('Ingrese el nombre de la Calle');
const streetNumber = prompt('Ingrese el Número');
const appartmentNumber = prompt('Ingrese el número de su departamento');
const postCode = prompt('Ingrese código Postal');
const city = prompt('Ingrese la ciudad');
const country = prompt('Ingrese el País');

alert(`La dirección que ha ingresado es: ${street}, ${streetNumber}, ${appartmentNumber}, ${postCode}, ${city}, ${country}.`);*/


                                                        // EJERCICIO 6
/*console.log('Años Perro');
// 16 x ln(edadPerro) + 31 = edad humana
// edad humana = e(edadHumana - 31) / 16

const edad = prompt('Ingrese su edad');
const expo = (edad - 31)/16;
const edadPerro = Math.exp(expo);

alert(`Su equivalente de edad en años perro es: ${edadPerro}`);*/

                                                        // EJERCICIO 7
/*console.log('Minutos a Segundos');

const minutos = prompt('Ingrese los minutos');
const segundos = minutos*60;
alert(`${minutos} minutos equivalen a ${segundos}`);*/


                                                        // EJERCICIO 8
/*console.log('Días a Segundos');

const hours = 24;
const minutes = 60;
const seconds = 60; 

const days = prompt('Ingrese la cantidad de días a convertir')

const daysToSeconds = days * hours * minutes * seconds;

alert(`${days} días son ${daysToSeconds} segundos.`);*/


                                                        // EJERCICIO 9 
/*console.log('Kilómetros a Millas')

const miles = 0.62;

const kilometres = prompt('Ingrese la cantidad de Kilómetros a convertir');
const kilometresToMiles = kilometres * miles;

alert(`${kilometres} kilómetros son ${kilometresToMiles} millas`);*/


                                                        // EJERCICIO 10
/*console.log('Area de un Triángulo');

const base = prompt('Ingese la base del triángulo');
const altura = prompt('Ingrese la altura del triángulo');
const area = (base*altura)/2;

alert(`El área del Triángulo es: ${area}`);*/


                                                        // EJERCICIO 11
/*console.log('Perimetro de un Rectángulo');

const ancho = prompt('Ingrese el ancho del rectángulo');
const altura = prompt('Ingrese la altura del rectángulo');

const perimetro = (2 * ancho) +  (2 * altura); 

alert(`El perimetro del rectángulo es ${perimetro}`);*/


                                                        // EJERCICIO 12
/*console.log('Porcentaje');

const number = prompt('Ingrese un numero');
const percentnumber = prompt('Ingrese el porcentaje que desea obtener');
const percentage = number * percentnumber / 100;

alert(`El ${percentnumber} porciento de ${number} es ${percentage}`);*/


                                                        // EJERCICIO 13
/*console.log('Tiempo de Viaje');

const caminando = 5;
const bici = 10;
const auto = 80;
const distancia = prompt('Ingrese la distancia de su viaje en kilómetros')

alert(`Su viaje de ${distancia} km le tomará:
    Caminando: ${distancia/caminando} horas
    En Bici: ${distancia/bici} horas
    En Auto: ${distancia/auto} horas
`);*/


                                                        // EJERCICIO 14
/*console.log('Duracion de Vuelo');

const destinoOne = prompt('Ingrese Destino 1');
const duracionOne = prompt(`Ingrese tiempo estimado de Vuelo para ${destinoOne}`);

const destinoTwo = prompt('Ingrese Destino 2');
const duracionTwo = prompt(`Ingrese tiempo estimado de Vuelo para ${destinoTwo}`);

const destinoThree = prompt('Ingrese Destino 3'); 
const duracionThree = prompt(`Ingrese tiempo estimado de Vuelo para ${destinoThree}`);

const total = Number(duracionOne) + Number(duracionTwo) + Number(duracionThree);

alert(`Su Vuelo con las siguientes escalas:
    ${destinoOne}: con tiempo estimado de vuelo: ${duracionOne} horas,
    ${destinoTwo}: con tiempo estimado de vuelo: ${duracionTwo} horas,
    ${destinoThree}: con tiempo estimado de vuelo: ${duracionThree} horas,
    Tendrá un tiempo estimado de vuelo de: ${total} horas.
`);*/


                                                        // EJERCICIO 15
/*console.log('Incremento');

const initialNumber = prompt('Ingresar un número de partida');
const plusNumber = prompt('Ingresar la cantidad a incrementar');

let incremento = Number(initialNumber) + Number(plusNumber);
alert(`Total incremento 1: ${incremento}`);

incremento = Number(incremento) + Number(plusNumber);
alert(`Total incremento 2: ${incremento}`);

incremento = Number(incremento) + Number(plusNumber);
alert(`Total incremento 3: ${incremento}`);

incremento = Number(incremento) + Number(plusNumber);
alert(`Total Incremento 4: ${incremento}`);

incremento = Number(incremento) + Number(plusNumber);
alert(`Total incremento 5: ${incremento}`);*/


                                                        // EJERCICIO 16
/*console.log('Celsius a Fahrenheit');

const celsius = prompt('Ingresa los grados Centigrados a convertir');
const celsiusToFahrenheit = (celsius * 9/5) + 32;

alert(`${celsius} grados Centígrados son ${celsiusToFahrenheit} grados Fahrenheit`);*/


                                                        // EJERCICIO 17
/*console.log('Múltiplos');

const numberOne = prompt('Ingrese el Dividendo');
const numberTwo = prompt('Ingrese el Divisor');

const multiple = numberOne % numberTwo; 

alert(`El resto de esta operación es ${multiple}.
Si ${numberOne} es múltiplo de ${numberTwo} el resto debe ser igual a 0`);*/


                                                        // EJERCICIO 18
// console.log('Segundos a horas, minutos, segundos');

// const seconds = prompt('Ingrese la cantidad de segundos a convertir');

// const restoSecondsToMinutes = seconds % 60;
// const secondsToMinutes = (seconds - restoSecondsToMinutes) / 60;

// const restoMinutesToHours = secondsToMinutes % 60; 
// const minutesToHours = (secondsToMinutes - restoMinutesToHours) / 60;

// alert(`${seconds} segundos equivalen a: 
//     ${minutesToHours} horas, ${restoMinutesToHours} minutos y ${restoSecondsToMinutes} segundos`);


                                                        // EJERCICIO 19
/*console.log('Cantidad de Caracteres');

const text = prompt('Ingrese un texto para saber la cantidad de caracteres');
const result = text.length;
alert(`El texto tiene ${result} caracteres`);*/


                                                        // EJERCICIO 20
/*console.log('Cantidad de Huéspedes');

const doubleRoom = prompt('Ingrese la cantidad de habitaciones para 2 Personas');
const tripleRoom = prompt('Ingrese la cantidad de habitaciones para 3 Personas');
const quadrupleeRoom = prompt('Ingrese la cantidad de habitaciones para 4 Personas');

const maxCapacity = (doubleRoom * 2) + (tripleRoom * 3) + (quadrupleeRoom * 4);

alert(`Cuenta con: 
    ${doubleRoom} habitaciones para 2 personas
    ${tripleRoom} habitaciones para 3 personas
    ${quadrupleeRoom} habitaciones para 4 personas 
    y la capacidad máxima de huéspedes a albergar es ${maxCapacity}.`);*/


                                                        // EJERCICIO 21
/*console.log('Calculador de Gasto')

let totalService = 3;
let availableMoney = 0;
const disponible = prompt('Ingrese la cantidad de dinero disponible');

const serviceNameOne = prompt(`Tiene ${totalService} servicios disponibles y su saldo disponible es: ${disponible}. Ingrese nuevo Servicio`);
const serviceCostOne = prompt(`Ingrese el Costo del Servicio ${serviceNameOne}`);

availableMoney = disponible - serviceCostOne;

const serviceNameTwo = prompt(`Tiene ${totalService = totalService - 1} servicios disponibles y su saldo diponible es: ${availableMoney}. Ingrese nuevo Servicio`);
const serviceCostTwo = prompt(`Ingrese el Costo del Servicio ${serviceNameTwo}`);

availableMoney = availableMoney - serviceCostTwo;

const serviceNameThree = prompt(`Tiene ${totalService = totalService - 1} servicios disponibles y su saldo disponible es ${availableMoney} . Ingrese nuevo Servicio`);
const serviceCostThree = prompt(`Ingrese el Costo del Servicio ${serviceNameThree}`);

availableMoney = availableMoney - serviceCostThree;

alert(`Servicios a pagar:
    ${serviceNameOne}: ${serviceCostOne}
    ${serviceNameTwo}: ${serviceCostTwo}
    ${serviceNameThree}: ${serviceCostThree}
    Total dinero disponible: ${availableMoney}
`);*/

                                                        // EJERCICIO 22
/*console.log('Orden de Compras');

const productOne = 'Mini Triple Chocolate';
const productOnePrice = 350;
const productTwo = 'Mini Parchita Pie';
const productTwoPrice = 300;
const productThree = 'Mini Selva Negra';
const productThreePrice = 300;

const selectionOne = prompt(`Ingrese la cantidad de ${productOne} a comprar`);
const selectionTwo = prompt(`Ingrese la cantidad de ${productTwo} a comprar`);
const selectionThree = prompt(`Ingrese la cantidad de ${productThree} a comprar`);

const totalCost = (productOnePrice * selectionOne) + (productTwoPrice * selectionTwo) + (productThreePrice * selectionThree);

const cuotas = prompt(`El total de su compra es ${totalCost}ARS, ¿En cuantas cuotas desea realizar el pago?`);

const montoCuotas = totalCost / cuotas;

alert(`Detalle de compra:
    ${productOne}: ${productOnePrice}ARS x ${selectionOne} uds.
    ${productTwo}: ${productTwoPrice}ARS x ${selectionTwo} uds.
    ${productThree}: ${productThreePrice}ARS x ${selectionThree} uds.
    Total compra: ${totalCost}ARS
    Cantidad de Cuotas: ${cuotas}
    Monto Cuota: ${montoCuotas}ARS
`)*/