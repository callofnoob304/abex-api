import adressesControllers from "../controllers/adressesControllers"

export default (app) => {
	app.post('/adresses/persist', adressesControllers.persist)
	app.patch('/adresses/persist/:id', adressesControllers.persist)
	app.delete('/adresses/destroy/:id', adressesControllers.destroy)
	app.get('/adresses', adressesControllers.get)
	app.get('/adresses/:id', adressesControllers.get)
}