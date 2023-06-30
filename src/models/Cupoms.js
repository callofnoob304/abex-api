import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const Cupoms = sequelize.define(
  "cupoms",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },

    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    value: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    uses: {
      type: DataTypes.INTEGER,
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

export default Cupoms;
