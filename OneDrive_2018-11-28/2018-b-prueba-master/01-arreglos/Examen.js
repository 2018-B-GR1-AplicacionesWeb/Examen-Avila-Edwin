const fs = require('fs');
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


///////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////////////////////////
const arregloRespuesta =[
    {
        a:true
    },
    {
        b:false
    },
];