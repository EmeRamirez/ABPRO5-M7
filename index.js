import {sequelize} from './orm/bd.js';
import { Op } from 'sequelize';

import { Especialidad } from './orm/Especialidad.js';
import { Medico } from './orm/Medico.js';
import { Consulta } from './orm/Consulta.js';
import { Paciente } from './orm/Paciente.js';
import { Licencia } from './orm/Licencia.js';


async function testConnection(){
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}
testConnection();



// Se verifica si existe esta instrucción al ejecutar la aplicación en terminal
if(process.argv[2] == 'creartablas'){
  (async()=>{
    await sequelize.sync()
})();
};

// Se verifica si existe esta instrucción al ejecutar la aplicación en terminal
if(process.argv[2] == 'insertardatos'){
  (async()=>{
    await crearEsp('Oftalmología');
    await crearEsp('Medicina General');
    await crearEsp('Oncología');


    await crearMedico('Jorge Lopez','12555222-5','Calle Falsa 123',1);
    await crearMedico('Juan Gonzalez','12666888-5','Calle Verdadera 123',2);
    await crearMedico('Enrique Perez','12999211-5','Calle Probable 123',3);

    await crearPaciente('Natalia Cuevas','13111222-3','Las Margaritas 123');
    await crearPaciente('Gabriel Carvallo','17777555-4','Las Hortencias 123');
    await crearPaciente('Marlene Gonzalez','18777444-1','Los Tulipanes 123');

    await crearLicencia('Gastroenteritis', '2023-04-03', '2023-04-10');
    await crearLicencia('Esguince de Tobillo', '2023-03-24', '2023-04-23');
    await crearLicencia('Quemadura Tercer Grado', '2023-02-20', '2023-05-19');

    await crearConsulta('2023-04-06','15:30', 16, 3, 1, null);
    await crearConsulta('2023-04-04','09:30', 7, 2, 1, 2);
})();
};


//==================== FUNCIONES =================

//Funcion para crear Paciente
async function crearPaciente(_nombre,_rut,_direccion){
  const paciente = await Paciente.create({
    nombre:_nombre,
    rut: _rut,
    direccion: _direccion
  });
  console.log(`Paciente ${_nombre} creado`);
}

//Funcion para crear Licencia
async function crearLicencia(_diagnostico,_fecha_inic,_fecha_termino){
  const licencia = await Licencia.create({
    diagnostico:_diagnostico,
    fecha_inic: _fecha_inic,
    fecha_termino: _fecha_termino
  });
  console.log(`Licencia creada`);
}

//Función para crear Especialidad
async function crearEsp(valor){
  const espec = await Especialidad.create({descripcion:valor});
  console.log(`Especialidad ${valor} creada`);
}

//Funcion para crear Médico
async function crearMedico(_nombre,_rut,_direccion,_esp){
  const medic = await Medico.create({
    nombre:_nombre,
    rut: _rut,
    direccion: _direccion,
    id_especialidad: _esp
  });
  console.log(`Medico ${_nombre} creado`);
}

//Funcion para crear Consulta
async function crearConsulta(_fecha,_hora,_numerobox,_id_paciente,_id_medico,_id_licencia){
  const consulta = await Consulta.create({
    fecha: _fecha,
    hora: _hora,
    numerobox: _numerobox,
    id_paciente: _id_paciente,
    id_medico: _id_medico,
    id_licencia: _id_licencia
  });
  console.log(`Consulta ${_fecha, _hora} creada`);
}



//=================== FUNCIONES QUERY ===============

//Funcion para buscar un Médico por Especialidad
async function buscarMedEsp(id){
  const encontrado = await Medico.findAll({where:{
    id_especialidad:id
  }})
  console.log(encontrado);
}

// buscarMedEsp(2);



//Buscar todas las consultas en las cuales se entregó licencia
async function getConsultaLicencias(){
  const lista = await Consulta.findAll({
    where:{
      id_licencia:{
        [Op.not]:null,
      }
    }
  })
  console.log(lista);
};

// getConsultaLicencias();


// Buscar todas las consultas por un respectivo numero de paciente
async function getConsultaporIDpaciente(idpac){
  const encontrado = await Consulta.findAll({
    where:{
      id_paciente:idpac
    }
  });
    console.log(encontrado);
}

// getConsultaporIDpaciente(3);






