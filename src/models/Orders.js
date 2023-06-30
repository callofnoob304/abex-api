import { DataTypes } from "sequelize";
import { sequelize } from "../config";
import Adresses from "./Adresses";
import Users from "./Users";
import Cupoms from "./Cupoms";
import Payments from "./Payments";

const Orders = sequelize.define(
  "orders",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    status: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    totalDiscount: {
      field: 'total_discount',
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
Orders.belongsTo(Users, {
  as: 'usersCostumer',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
  foreignKey: {
    name: 'idUserCostumer',
    field: 'id_user_costumer',
    allowNull: false,
  }
}),

Orders.belongsTo(Users, {
  as: 'usersDeliver',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
  foreignKey: {
    name: 'idUserDeliver',
    field: 'id_user_deliver',
    allowNull: true,
  }
}),

Orders.belongsTo(Adresses, {
  as: 'adresses',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
  foreignKey: {
    name: 'idAdresses',
    field: 'id_adress',
    allowNull: false,
  }
}),

Orders.belongsTo(Payments, {
  as: 'payment',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
  foreignKey: {
    name: 'idPayment',
    field: 'id_payment',
    allowNull: false,
  }
}),

Orders.belongsTo(Cupoms, {
  as: 'cupoms',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
  foreignKey: {
    name: 'idCupoms',
    field: 'id_cupom',
    allowNull: false,
  }
});

export default Orders;
