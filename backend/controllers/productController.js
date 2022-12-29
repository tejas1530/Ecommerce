const product = require("../types/productType")



//create prodduct 
exports.createProduct = async(req, res,next)=>{
    const product = await product.create(req.body);
   
    res.status(201).json({
        success:true,
        product
    })
}


exports.getAllproducts = (req, res)=>{

    res.status(500).json({message:"Route is working fine"})

}