var express = require('express')
var router = express.Router()
const {
	signUp,
	signIn,
	favorites,
	favoritesAdd,
	favoritesDel,
	updateUser,
	history,
	getUserInfo,
	getAllergies,
	delAllergies,
	updateUserAddress,
	addToBlacklist,
	donts,
	adddonts,
	deletedonts,
	updateDiet,
} = require('../controllers/userController')

//Route for Sign-Up
router.post('/sign-up', signUp)

//Route for Sign-In
router.post('/sign-in', signIn)

//Routes for User Profile
router.get('/me/:token', getUserInfo)
router.put('/update-me/:token', updateUser)
router.post('/update-useraddress/:token', updateUserAddress)
router.put('/update-diet', updateDiet)
router.get('/history/:token', history)
router.get('/favorites/:token', favorites)
router.post('/favorites', favoritesAdd)
router.delete('/favorites/:token/:meal_id', favoritesDel)
router.get('/allergies/:token/', getAllergies)
router.delete('/delallergies/:token/:allergy', delAllergies)
router.get('/myDonts/:token', donts)
router.post('/adddonts/:token', adddonts)
router.delete('/deletedonts/:token/:dont', deletedonts)

// gestion Blacklist
router.put('/blacklist/:token', addToBlacklist)

module.exports = router
