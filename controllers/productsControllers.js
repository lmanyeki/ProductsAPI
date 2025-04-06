import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const getAllProducts = async (_req, res) => {
  try {
    const products = await client.Product.findMany();
    res.status(200).json({
      status: "Success",
      message: "Successfully fetched products.",
      data: products,
    });
  } catch (e) {
    res.status(500).json({
      status: "Error",
      message: "Something went wrong. Please try again.",
    });
  }
};

export const createProduct = async (req, res) => {
  const { prodTitle, prodDescription, unitsLeft, pricePerUnit } = req.body;
  try {
    const newProduct = await client.Product.create({
      data: {
        prodTitle,
        prodDescription,
        unitsLeft,
        pricePerUnit,
      },
    });
    res.status(201).json({
      status: "success",
      message: "New product added successfully",
      data: newProduct,
    });
  } catch (e) {
    res.status(500).json({ message: "An error occurred" });
  }
};

export const getSpecificProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await client.Product.findFirst({
      where: {
        id: productId,
      },
    });
    res.status(200).json({
      status: "Success",
      data: "product",
    });
  } catch (e) {
    res.status(500).json({
      status: "Error",
      message: "Something went wrong. Please try again.",
    });
  }
};

export const getOffer = async (_req, res) => {
  try {
    const productsOnOffer = await client.Product.findMany({
      where: {
        isOnOffer: true,
      },
    });
    
    res.status(200).json({
      status: "Success",
      message: "Product is on offer",
      data: productsOnOffer
    });
  } catch (e) {
    res.status(500).json({
      status: "Error",
      message: "Product is not on offer.",
    });
  }
};

export const updateProduct = async (req, res) => {
  const { prodTitle, prodDescription, unitsLeft, pricePerUnit, isOnOffer } =
    req.body;
  const { productId } = req.params;
  try {
    const updatedProduct = await client.Product.findFirst({
      where: {
        id: productId,
      },
      data: {
        prodTitle: prodTitle && prodTitle,
        prodDescription: prodDescription && prodDescription,
        unitsLeft: unitsLeft && unitsLeft,
        pricePerUnit: pricePerUnit && pricePerUnit,
        isOnOffer: isOnOffer && isOnOffer,
      },
    });
    res.status(200).json({
      status: "Success",
      message: "Product successfully updated.",
      data: updatedProduct,
    });
  } catch (e) {
    res.status(500).json({
      status: "Error",
      message: "Something went wrong",
    });
  }
};

export const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    await client.Product.delete({
      where: {
        id: productId,
      },
    });
    res.status(200).json({
      status: "Success",
      message: "Product successfully deleted",
    });
  } catch (e) {
    res.status(500).json({
      status: "Error",
      message: "Something went wrong.",
    });
  }
};
