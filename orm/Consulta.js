import {DataTypes, Model} from 'sequelize';
import { sequelize } from './bd.js';

export class Consulta extends Model{}

import { Medico } from './Medico.js';
import { Paciente } from './Paciente.js';
import { Licencia } from './Licencia.js';

Consulta.init({
    id_consulta: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false
    },
    numerobox: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    },
    {
        sequelize,
        createdAt: false,
        updatedAt:false,
        tableName: 'consultas'  
    }
);

Medico.hasMany(Consulta,{
    foreignKey:'id_medico'
});
Consulta.belongsTo(Medico,{
    foreignKey:'id_medico'
});

Paciente.hasMany(Consulta,{
    foreignKey:'id_paciente'
});
Consulta.belongsTo(Paciente,{
    foreignKey:'id_paciente'
});

Licencia.hasMany(Consulta,{
    foreignKey:{
        name:'id_licencia',
        allowNull: true
    }
});
Consulta.belongsTo(Licencia,{
    foreignKey:{
        name:'id_licencia',
        allowNull: true
    }
});