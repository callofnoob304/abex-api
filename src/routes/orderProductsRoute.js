import orderProductsControllers from "../controllers/orderProductsControllers"

export default (app) => {
	app.post('/orderProducts/persist', orderProductsControllers.persist)
	app.patch('/orderProducts/persist/:id', orderProductsControllers.persist)
	app.delete('/orderProducts/destroy/:id', orderProductsControllers.destroy)
	app.get('/orderProducts', orderProductsControllers.get)
	app.get('/orderProducts/:id', orderProductsControllers.get)
}