import ordersControllers from "../controllers/ordersControllers"

export default (app) => {
	app.post('/orders/persist', ordersControllers.persist)
	app.patch('/orders/persist/:id', ordersControllers.persist)
	app.delete('/orders/destroy/:id', ordersControllers.destroy)
	app.get('/orders', ordersControllers.get)
	app.get('/orders/:id', ordersControllers.get)
}