import {Sequelize, DataTypes, Model} from 'sequelize';
const sequelize = new Sequelize(
    'abpro5','postgres','1234',{
        host:'localhost',
        dialect:'postgres'
    });

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