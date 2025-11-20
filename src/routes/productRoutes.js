import express from 'express';

import {
    getAllProductsHandler,
    getProductByIdHandler,
    createProductHandler,
    updateProductHandler,
    deleteProductHandler
} from "../controllers/productController.js";

import {
    validateProductId,
    validateCreateProduct,
    validateProductQuery,
    validateUpdateProduct,
} from "../middleware/productValidators.js"

const router = express.Router();

router.get("/", validateProductQuery, getAllProductsHandler);
router.get("/:id", validateProductId, getProductByIdHandler);
//TODO: Add authorizeroles(SELLER) for creating a product
router.post("/", validateCreateProduct, createProductHandler);
//TODO: Add authorizeroles(SELLER, ADMIN) for updating a product
router.put("/:id",
    validateProductId,
    validateUpdateProduct,
    updateProductHandler);
//TODO: Add authorizeroles(SELLER< ADMIN) for deleting a product
router.delete("/:id", validateProductId, deleteProductHandler);

export default router;