import {Sequelize, DataTypes, Model} from 'sequelize';
const sequelize = new Sequelize(
    'abpro5','postgres','1234',{
        host:'localhost',
        dialect:'postgres'
    });

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