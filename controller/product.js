const getProducts =async (req,res)=>{
     res.status(200).json({msg:"to See Products Here!"})
}

const getProductsAll = async (req,res)=>{
    res.status(200).json({msg:"to See Products All Here!"})
}

export {getProducts,getProductsAll}