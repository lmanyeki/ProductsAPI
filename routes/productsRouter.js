import { Router } from "express";
import validateProduct from "../middleware/validateProduct.js";
import {getAllProducts, createProduct, getSpecificProduct, updateProduct, deleteProduct} from '../controllers/productsControllers.js';
const router = Router();

router.route("/")
.get(getAllProducts)
.post(validateProduct, createProduct)


router.route("/:productId")
.get(getSpecificProduct)
.patch(updateProduct)
.delete(deleteProduct)

export default router;