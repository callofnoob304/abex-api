import categoriesControllers from "../controllers/categoriesControllers"

export default (app) => {
	app.post('/categorias/persist', categoriesControllers.persist)
	app.patch('/categorias/persist/:id', categoriesControllers.persist)
	app.delete('/categorias/destroy/:id', categoriesControllers.destroy)
	app.get('/categorias', categoriesControllers.get)
	app.get('/categorias/:id', categoriesControllers.get)
}