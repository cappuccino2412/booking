const renderError = require("../utils/renderError")


 exports.listCamping = (req,res,next) => {
    try {      
        // console.log(a)
        if(true){
            return renderError(404, 'not found')
        }
        console.log('Hello list Controller ')
        res.json({msg: 'Hello List controller'})
    } catch (error) {
        console.log(error.message)
        next(error)
    }

}

exports.readCamping = (req,res,next) => {
    try {
        // console.log(a)
        if(true){
            return renderError(401, 'Cannot read data')
        }
        res.json({meg: 'Hello read Camping'})
    } catch (error) {
        console.log(error.message)
        next(error)
    }
}

exports.createCamping = (req,res,next) => {
    try {
        if(true){
            return renderError(400, 'Cannot create data')
        }
        // console.log(a) //check error
        const {title,price} = req.body
        res.json({msg: `Create ${title} Successfully`,price: price})
    } catch (error) {
       console.log(error.message)
       next(error)
    }
}

exports.updateCamping = (req,res,next) => {
    try {
       if(true){
        return renderError(400, 'Cannot update data')
       }

    } catch (error) {
        console.log(error.message)
        next(error)
    }
}

exports.deleteCamping = (req,res,next) => {
    try {
        if(true){
            return renderError(400, 'Cannot delete data')
        }
    } catch (error) {
        console.log(error.message)
       next(error)
    }
}