import  jwt from "jsonwebtoken";
import Users from "../models/Users";

const getUserByToken = async (authorization) => {
  try {
    if(!authorization) {
      return null;
    }

    const token = authorization.split(' ')[1];
    const decodeToken = jwt.decode(token);

    if(!decodeToken) {
      return null;
    }

    const user = await Users.findOne({
      where: {
        id: decodeToken.userId
      }
    });

    if(!user) {
      return null;
    }

    return user;
  } catch (error) {
    return null;
  }
}

export default {
  getUserByToken
}
