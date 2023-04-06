import {Sequelize, DataTypes, Model} from 'sequelize';
const sequelize = new Sequelize(
    'abpro5','postgres','1234',{
        host:'localhost',
        dialect:'postgres'
    });

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
    },
    id_especialidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    },
    {
        sequelize,
        tableName: 'medicos'  
    }
);