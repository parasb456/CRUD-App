import { Router } from "express";
import model from '../Database/model.js';
import express from 'express';

export const router = Router();
router.use(express.json());///important for axios to send data
//Model(modelname,schema)

router.post('/addNewProduct', async (req, res) => {
    try {
        const products = await product.create(req.body);
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.put('/updateProduct/:id', async (req, res) => {
    try {
        const id  = req.params.id;
        console.log('Received request to update product with ID:', id);
        console.log('Request body:', req.body);
        if (!req.body.name || !req.body.quantity || !req.body.price) {
            return res.status(400).send('All fields are required');
        } else {
            const products = await product.findByIdAndUpdate(id, {
                name: req.body.name,
                quantity: req.body.quantity,
                price: req.body.price
            })
            res.status(200).send({ 'Product Updated': products });
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.get('/getAllProducts', async (req, res) => {
    try {
        const products = await product.find({});//fetches all the products
        res.status(200).send({ 'Products list': products });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

});
router.get('/getProduct/:id', async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            res.status(401).send('Product ID is Required');
        } else {
            const products = await product.findById(id);
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.status(200).json(products);
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.delete('/deleteProduct/:id', async (req, res) => {
    try {
        const id  = req.params.id;
        const productToDelete = await product.findOne({ "_id": id });
        if (!productToDelete) {
            return res.status(404).json({ message: "Product not found" });
        } else {
            await productToDelete.deleteOne();
            res.status(200).send(  { message:'Product Deleted Successfully!!'});
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})