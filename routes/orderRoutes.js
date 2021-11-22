const express = require('express')
const router = express.Router()
const {
	getOrder,
	makeOrder,
	updateOrder,
	makeOrderInFav,
	payment,
} = require('../controllers/orderController')


router.post('/recap/:token', makeOrder) // route used to generate meal (oui le nom est pourrave)
router.get('/recap/:token', getOrder) //route to get the last order
router.put('/update-order/:id', updateOrder) //commande status
router.get('/makeorderinfav/:token', makeOrderInFav) //commande parmis les favoris
router.post('/payment', payment)
module.exports = router
