import usersControllers from "../controllers/usersControllers"

export default (app) => {
	app.post('/users/persist', usersControllers.persist)
	app.patch('/users/persist/:id', usersControllers.persist)
	app.delete('/users/destroy/:id', usersControllers.destroy)
	app.get('/users', usersControllers.get)
	app.get('/users/:id', usersControllers.get)
}