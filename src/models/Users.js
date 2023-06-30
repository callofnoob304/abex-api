import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const Users = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    cpf: {
      type: DataTypes.STRING(14),
      allowNull: false,
      unique: true,
    },

    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },

    phone: {
      type: DataTypes.STRING(16),
      allowNull: false,
      unique: true,
    },

    passwordHash: {
      field: 'password_hash',
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    token: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    role: {
      type: DataTypes.STRING(255),
      allowNull: false,
    }, 

    cart: {
      type: DataTypes.JSONB,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    
    recuperation: {
      type: DataTypes.STRING(255),
      allowNull: false,
    }
  },

  {
    freezeTableName: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Users;
