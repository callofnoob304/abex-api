import productsControllers from "../controllers/productsControllers"

export default (app) => {
	app.post('/produtos/persist', productsControllers.persist)
	app.patch('/produtos/persist/:id', productsControllers.persist)
	app.delete('/produtos/destroy/:id', productsControllers.destroy)
	app.get('/produtos', productsControllers.get)
	app.get('/produtos/:id', productsControllers.get)
}