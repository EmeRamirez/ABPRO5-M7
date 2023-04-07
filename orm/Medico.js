import {DataTypes, Model} from 'sequelize';
import { sequelize } from './bd.js';

import { Especialidad } from './Especialidad.js';

export class Medico extends Model{}

Medico.init({
    id_medico: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    rut: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING(60),
        allowNull: true
    }
    },
    {
        sequelize,
        createdAt: false,
        updatedAt:false,
        tableName: 'medicos'  
    }
);

Especialidad.hasMany(Medico,{
    foreignKey: 'id_especialidad'
});
Medico.belongsTo(Especialidad,{foreignKey: 'id_especialidad'});