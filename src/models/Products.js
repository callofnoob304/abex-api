import { DataTypes } from "sequelize";
import { sequelize } from "../config";
import Categories from "./Categories"

const Products = sequelize.define(
  "products",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    price: {
      type: DataTypes.FLOAT(15,2),
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING(2000),
      allowNull: false,
    },
    
    description: {
      type: DataTypes.STRING(300),
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

  Products.belongsTo(Categories, {
    as: 'categories',
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    foreignKey: {
      name: 'idCategory',
      field: 'id_category',
      allowNull: false,
    }
  });

export default Products;
