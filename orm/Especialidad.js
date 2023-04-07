import {DataTypes, Model} from 'sequelize';
import { sequelize } from './bd.js';

export class Especialidad extends Model{}

Especialidad.init({
    id_especialidad: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
    descripcion: {
        type: DataTypes.STRING(50),
        allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'especialidades'  
    }
);