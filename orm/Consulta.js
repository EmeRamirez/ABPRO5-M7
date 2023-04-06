import {Sequelize, DataTypes, Model} from 'sequelize';
const sequelize = new Sequelize(
    'abpro5','postgres','1234',{
        host:'localhost',
        dialect:'postgres'
    });

export class Consulta extends Model{}

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
    },
    id_paciente: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_medico: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_licencia: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    },
    {
        sequelize,
        tableName: 'consultas'  
    }
);