import { DataTypes } from "sequelize";
import { sequelize } from "../config";
import User from "./Users"

const Adresses = sequelize.define(
  "adresses",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    zipCode: {
      field: 'zip_code',
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    state: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    city: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    street: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  
    district: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  
    numberForget: {
      field: 'number_forget',
      type: DataTypes.STRING(255),
      allowNull: false,
    }
  },

  
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  });

  Adresses.belongsTo(User, {
    as: 'users',
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    foreignKey: {
      name: 'idUser',
      field: 'id_user',
      allowNull: false,
    }
  });

export default Adresses;
