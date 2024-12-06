const express = require("express")
const Product = require('../models/product.module')
const router = express.Router()
const {getProducts, getProduct, createProduct,updateProduct,deleteProduct} = require('../controlers/product.controler.js')




router.get('/', getProducts)

router.get('/:id', getProduct)



router.post('/', createProduct)


router.put('/:id', updateProduct)


router.delete('/:id', deleteProduct)





module.exports = router