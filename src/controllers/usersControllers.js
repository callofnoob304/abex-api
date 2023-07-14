import Users from "../models/Users"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getUserByToken from "../utils/getUserByToken";


const get = async (req, res) => {
  try {
    let id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      let response = await Users.findAll({
        order: [['id', 'asc']]
      });
      return res.status(200).send({
        type: 'success',
        message: 'Registros carregados com sucesso',
        data: response 
      });
    };

    let response = await Users.findOne({ where: { id } });

    if (!response) {
      return res.status(400).send({
        type: 'error',
        message: `Nenhum registro com id ${id}`,
        data: [] 
      });
    }

    return res.status(200).send({
      type: 'success',
      message: 'Registro carregado com sucesso',
      data: response 
    });
  } catch (error) {
    return res.status(400).send({
      type: 'error',
      message: `Ops! Ocorreu um erro`,
      error: error.message 
    });
  }
}

const persist = async (req, res) => {
  try {
    let id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;
    
    if (!id) {
      return await create(req.body, res)
    }

    return await update(id, req.body, res)
  } catch (error) {
    return res.status(400).send({
      type: 'error',
      message: `Ops! Ocorreu um erro`,
      error: error
    });
  }
}

const create = async (dados, res) => {
  let { username, cpf, name, phone, password, role, cart, email, recuperation } = dados;

  let passwordHash = await bcrypt.hash(password, 10);

  let userExist = await Users.findOne({ where: { email } });

  if(userExist) {
    return res.status(400).send({
      type: 'error',
      message: `Esse email ja esta sedo utilizado`,
      error: []
    });
  }

  let response = await Users.create({
    username, 
    cpf, 
    name, 
    phone, 
    passwordHash,
    role, 
    cart, 
    email, 
    recuperation
  });

  return res.status(200).send({
    type: 'success',
    message: `Cadastro realizado com suce10sso`,
    data: response 
  });
}

const update = async (id, dados, res) => {
  let response = await Users.findOne({ where: { id } });

  if (!response) {
    return res.status(400).send({
      type: 'error',
      message: `Nenhum registro com id ${id} para atualizar`,
      data: [] 
    });
  }

  Object.keys(dados).forEach(field => response[field] = dados[field]);

  await response.save();
  return res.status(200).send({
    type: 'success',
    message: `Registro id ${id} atualizado com sucesso`,
    data: response
  });
}

const destroy = async (req, res) => {
  try {
    let id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;
    if (!id) {
      return res.status(400).send({
        type: 'error',
        message: `Informe um id para deletar o registro`,
        data: [] 
      });
    }

    let response = await Users.findOne({ where: { id } });

    if (!response) {
      return res.status(400).send({
        type: 'error',
        message: `Nenhum registro com id ${id} para deletar`,
        data: [] 
      });
    }

    await response.destroy();
    return res.status(200).send({
      type: 'success',
      message: `Registro id ${id} deletado com sucesso`,
      data: [] 
    });
  } catch (error) {
    return res.status(400).send({
      type: 'error',
      message: `Ops! Ocorreu um erro`,
      error: error.message 
    });
  }
}

const login = async (req, res) => {
  try {
    let { email, password } = req.query;

    let user = await Users.findOne({
      where: {
        email
      }
    });

    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return res.status(400).send({
        type: 'error',
        message: 'Usuário ou senha incorretos!'
      });
    }

    let token = jwt.sign(
      { userId: user.id, username: user.username, role: user.role }, //payload - dados utilizados na criacao do token
      process.env.TOKEN_KEY, //chave PRIVADA da aplicação 
      { expiresIn: '1h' } //options ... em quanto tempo ele expira...
    );

    user.token = token;
    await user.save();

    return res.status(200).send({
      type: 'success',
      message: 'Bem-vindo! Login realizado com sucesso!',
      data: user,
      token 
    });
  } catch (error) {
    return res.status(400).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro!',
      data: error.message
    });
  }
}

const validate = async (req, res) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(' ')[1]
      let funcao = jwt.verify(token, process.env.TOKEN_KEY);
      return res.status(200).send({role: funcao.role });
    }
  } catch (error) {
    res.status(400).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro',
      data: error.message
    })
  }
}

const getByToken = async (req, res) => {
  try{
    let user = await getUserByToken.getUserByToken(req.headers.authorization);
    let idUser = user.id 
    return await getById(idUser, res)
  }catch(err){
    return res.status(200).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro!',
      data: err.message
    });
  }
}

const getById = async (id, res) =>{
  try {
    let response = await Users.findOne({
      where:{
        id
      }
    })

    if (!response) {
      return res.status(200).send({
        type: 'warning',
        message: 'Não foi encontrado usuario com este ID',
      });
    }
    
    return res.status(200).send({
      type: 'sucess',
      message: 'Usuario encontrado',
      data: response
    });

  } catch (error) {
    return res.status(200).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro!',
      data: error
    });
  }
}


export default {
  get,
  persist,
  destroy,
  login,
  validate,
  getByToken
}