import cuponsControllers from "../controllers/cuponsControllers"

export default (app) => {
	app.post('/cupons/persist', cuponsControllers.persist)
	app.patch('/cupons/persist/:id', cuponsControllers.persist)
	app.delete('/cupons/destroy/:id', cuponsControllers.destroy)
	app.get('/cupons', cuponsControllers.get)
	app.get('/cupons/:id', cuponsControllers.get)
}