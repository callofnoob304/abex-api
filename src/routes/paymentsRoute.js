import paymentsControllers from "../controllers/paymentsControllers"

export default (app) => {
	app.post('/payments/persist', paymentsControllers.persist)
	app.patch('/payments/persist/:id', paymentsControllers.persist)
	app.delete('/payments/destroy/:id', paymentsControllers.destroy)
	app.get('/payments', paymentsControllers.get)
	app.get('/payments/:id', paymentsControllers.get)
}