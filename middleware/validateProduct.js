function validateProduct(req, res, next) {
    const {
        prodTitle, 
        prodDescription,
        unitsLeft,
        pricePerUnit
    } = req.body;
    if (!prodTitle) {
        res.status(400).json({
            status: "Error",
            message: "Product title is required"
        })
    }
    if (!prodDescription) {
        res.status(400).json({
            status: "Error",
            message: "Product description is required"
        })
    }
    if (!unitsLeft) {
        res.status(400).json({
            status: "Error",
            message: "Units left is required"
        })
    }
    if (!pricePerUnit) {
        res.status(400).json({
            status: "Error",
            message: "Price per unit is required"
        })
    }
    next();
}

export default validateProduct;