const inquirer = require ('inquirer');
const fs = require('fs');

///////////////////////////////////////////////////////////////7EJERCICIO 1
function buscarGENERO() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('people.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                       const bdd = JSON.parse(contenido);
                        const respuestaFind = bdd.persona
                            .map(
                                (people)=>{
                                    return  people.gender;
                                }
                            )

                        resolve(respuestaFind);
                    }
                });
        }
    );
}

var arregloMale= [];
var arregloFemale= [];
buscarGENERO()
    .then(
    (contenidoArchivo)=>{
        console.log('************************************************+GENERO',contenidoArchivo);
        contenidoArchivo.map(
            (personas)=> {
                if (personas === 'male') {
                    arregloMale.push(personas);
                    console.log('MALE',arregloMale)
                }else{
                    if(personas === 'female'){
                    arregloFemale.push(personas)
                        console.log('fFEMALE',arregloFemale)
                    }

////////////////queria hacer más bonita la 'prpesentacionm pero ya no habia tiempo para anailizarle más pero si deplega lo requerio
                    //solo que desplega cada que el map ////////////////////////////////////////////////////////EJERCICIO 5
                }

            }

        )

    }
    )
    .catch(
        (resultadoError)=>{
            console.log('Algo malo paso',resultadoError);
        }
    )


///////////////////////////////////////////////////////////////////////////EJERCICIO 2
function buscarOJOS() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('people.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        const respuestaFind = bdd.persona
                            .map(
                                (people)=>{
                                    return  people.eye_color;
                                }
                            )

                        resolve(respuestaFind);
                    }
                });
        }
    );
}

buscarOJOS()
    .then(
        (contenidoArchivo)=>{
            console.log('*****************************************************************OJOS',contenidoArchivo);
        }
    )
    .catch(
        (resultadoError)=>{
            console.log('Algo malo paso',resultadoError);
        }
    )
////////////////////////////////////////////////////////////////////////////// EJERCICIO 3
function colorPIEL() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('people.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        const respuestaFind = bdd.persona
                            .map(
                                (people)=>{
                                    return  people.skin_color;
                                }
                            )

                        resolve(respuestaFind);
                    }
                });
        }
    );
}

colorPIEL()
    .then(
        (contenidoArchivo)=>{
            console.log('*****************************************************************COLOR PIEL',contenidoArchivo);
        }
    )
    .catch(
        (resultadoError)=>{
            console.log('Algo malo paso',resultadoError);
        }
    )
///////////////////////////////////////////////////////////////////////// EJERCICIO 4
function colorPIEL() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('people.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        const respuestaFind = bdd.persona
                            .map(
                                (people)=>{
                                    return  people.hair_color;
                                }
                            )

                        resolve(respuestaFind);
                    }
                });
        }
    );
}

colorPIEL()
    .then(
        (contenidoArchivo)=>{
            console.log('*****************************************************************COLOR CABELLO',contenidoArchivo);
        }
    )
    .catch(
        (resultadoError)=>{
            console.log('Algo malo paso',resultadoError);
        }
    )

/////////////////////////////////////////////////////////////////////////////////////////////////////////    EJERECICIO 6
const arregloRespuesta =[

];

function buscarABECEDARIO() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('people.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        const respuestaFind = bdd.persona
                            .map(
                                (people)=>{
                                    return  people.name;
                                }
                            )

                        resolve(respuestaFind);
                    }
                });
        }
    );
}



buscarABECEDARIO()
    .then(
        (contenidoArchivo)=>{
            console.log(contenidoArchivo)
        contenidoArchivo.map(
            (usuarios)=>{
               if(usuarios === 'a'|usuarios === 'b'|usuarios === 'c'|usuarios === 'd'|usuarios === 'e'){
                   arregloRespuesta.push()
               }
            }
         )
        }
    )
    .catch(
        (resultadoError)=>{
            console.log('Algo malo paso',resultadoError);
        }
    )


//////////////////////////////////////////////////////////EJERCICIO 11///////////////////////////

const opcionesMenu ={
    type: 'list',
    name: 'opcionMenu',
    message: 'Escoge la opción qué desees: ',
    choices: [
        'Crear',
    ]
};

const preguntasAlUsuario = [
    { type: 'input', name: 'nombre', message: 'Ingrese el nombre del personaje: '},
    { type: 'input', name: 'specie', message: 'Ingrese la specie: '},

];

main();
async function main() {
    try{
        await inicilizarBase();
        const  respuestaOpcionMenu = await inquirer.prompt(opcionesMenu);
        console.log('Respuesta.opcionMenu: ',respuestaOpcionMenu.opcionMenu);
        switch (respuestaOpcionMenu.opcionMenu) {
            case 'Crear':
                console.log('Pedir Datos');
                const respuestaPreguntasAlUsuario = await inquirer.prompt(preguntasAlUsuario);
                console.log('respuestas al DeTipoUsuario',respuestaPreguntasAlUsuario);
                const respuestaAñadirUsuario = await añadirDatosALaBase(respuestaPreguntasAlUsuario);
                main();
                break;
        }

    } catch (e) {
        console.log('HUBO UN ERROR')
    }
}
function inicilizarBase(){
    return new Promise(
        (resolve,reject)=>{
            fs.readFile('people1.json','utf-8',
                (error,contenidoLeido)=>{
                    if(error){
                        fs.writeFile('people.json','{"usuarios":[],"juegos":[]}',
                            (error)=>{
                                if(error){
                                    reject(
                                        {mensaje:'HUBO UN ERROR AL CREAR EL ARCHIVO'}
                                    )
                                }else{
                                    resolve(
                                        {mensaje:'ok'}
                                    );
                                }
                            }
                        );
                    }else {
                        resolve(
                            {mensaje:'ok'}
                        );
                    }
                }
            );
        }
    );
};

function añadirDatosALaBase(usuarioIngresarEnLaBase){
    return new Promise(
        (resolve,reject)=>{
            fs.readFile('people1.json','utf-8',
                (error,contenidoLeido)=>{
                    if(error){
                        reject(
                            {mensaje:'ERROR AL LEER EL ARCHIVO'}
                        );
                    }else {
                        //jason parse-->para transformar de STRING a objeto JSON
                        const bddJSONPARSE = JSON.parse(contenidoLeido);
                        bddJSONPARSE.persona.push(usuarioIngresarEnLaBase);
                        fs.writeFile('people1.json',JSON.stringify(bddJSONPARSE),
                            (error)=>{
                                if(error){
                                    reject(
                                        {mensaje:'ERROR AL ESCRIBIR EL ARCHIVO'}
                                    );
                                }else{
                                    resolve(
                                        {mensaje:'USUARIO AÑADIDO EN LA BASE'}
                                    );
                                }
                            }

                        );
                    }
                }
            );
        }
    );
};



//////////////////////////////SUMARTORIA

function sumatoriaHL() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('people.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        const respuestaFind = bdd.persona
                            .map(
                                (people)=>{
                                    return  people.massTotal;
                                }
                            )

                        resolve(respuestaFind);
                    }
                });
        }
    );
}