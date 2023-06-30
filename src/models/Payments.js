import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const Payments = sequelize.define(
  "payments",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    }
  },

  {
    freezeTableName: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Payments;
