import jwt from "jsonwebtoken";

export default async (req, res, next) =>{
  try {
    const authorization = req.headers.authorization
    const token = authorization.split(' ')[1] || null
    const decodedToken = jwt.decode(token);

    if(decodedToken.role != "Administrador"){
      return res.status(400).send({
        type: 'error',
        message: 'Você não tem permissão para acessar essa página!'
      })
    } else {
      this.$router.push({ name: 'admin-ADM'});
    }
    
    next()
  } catch (error) {
    return res.status(400).send({
      type: 'error',
      message: 'Ops! ocorreu um erro',
      data: error.message
    })
  }
}