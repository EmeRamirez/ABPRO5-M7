import {DataTypes, Model} from 'sequelize';
import { sequelize } from './bd.js';

export class Paciente extends Model{}

Paciente.init({
    id_paciente: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    rut: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    },
    {
        sequelize,
        tableName: 'pacientes'  
    }
);