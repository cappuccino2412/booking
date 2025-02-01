const handleError = (err,req,res,next)=> {
    res.status(err.statusCode || 500)
    .json({msg: err.message || 'Something went wrong'})
}

module.exports = handleError;