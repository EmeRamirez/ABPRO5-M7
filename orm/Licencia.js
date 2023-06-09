import {DataTypes, Model} from 'sequelize';
import { sequelize } from './bd.js';

export class Licencia extends Model{}

Licencia.init({
    id_licencia: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    diagnostico: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    fecha_inic: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    fecha_termino: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    },
    {
        sequelize,
        tableName: 'licencias'  
    }
);