import {Sequelize} from 'sequelize';

import { Especialidad } from './orm/Especialidad.js';
import { Medico } from './orm/Medico.js';
import { Consulta } from './orm/Consulta.js';
import { Paciente } from './orm/Paciente.js';
import { Licencia } from './orm/Licencia.js';


const sequelize = new Sequelize(
    'abpro5','postgres','1234',{
        host:'localhost',
        dialect:'postgres'
    });



async function testConnection(){
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}
testConnection();


// Función asíncrona para crear tablas
async function crearTabla(clase){
  const tabla = await clase.sync({ force:true });
  console.log('Se creó tabla', tabla);
}


// Se verifica si existe esta instrucción al ejecutar la aplicación en terminal
if(process.argv[2] == 'creartablas'){
  (async()=>{
    await crearTabla(Consulta);
    await crearTabla(Especialidad);
    await crearTabla(Licencia);
    await crearTabla(Medico);
    await crearTabla(Paciente);
})();
};