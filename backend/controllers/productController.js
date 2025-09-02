const productModel = require("../models/productModel");
const ProductModel = require("../models/productModel");

///GET PRODUCTS API - /api/v1/products
exports.getProducts = async (req, res, next) => {
  const query = req.query.keyword
    ? {
        name: { $regex: req.query.keyword, $options: "i" },
      }
    : {};

  try {
    const products = await ProductModel.find(query);
    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

///GET PRODUCTS API - /api/v1/product/:id
exports.getSingleProducts = async (req, res, next) => {
  try {
    const product = await productModel.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Get single product working!",
      product, // include the product here
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// exports.getSingleProducts = async (req, res, next) => {
//     try {
//         const product = await productModel.findById(req.params.id);
// res.json({
//     success:true,
//     message:'get single product working!'
// })
//     } catch (error) {
//         res.status(404).json({
//     success:false,
//     message: error.message
// })

//     }
// }
