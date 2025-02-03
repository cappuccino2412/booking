const prisma = require("../config/prisma");
const renderError = require("../utils/renderError");

exports.listCamping = async(req, res, next) => {
  try {
    // console.log(a)
    const campings = await prisma.landmark.findMany()
    res.json({ result: campings });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

exports.readCamping = async(req, res, next) => {
  try {
    const {id} = req.params;
    console.log(id)
   const campings = await prisma.landmark.findFirst({
    where: {
      id: Number(id)
    }
   })
    res.json({ result: campings });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

exports.createCamping = async (req, res, next) => {
  try {
    // console.log(a) //check error
    const {id}  = req.user;
    const {title,description,price,category,lat,lng} = req.body;
   const camping = await prisma.landmark.create({
    data: {
        title,
        description,
        price,
        category,
        lat,
        lng,
        profileId: id,
    }
   })
    res.json({ msg: `Create Camping Successfully`
        ,result: camping
     });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

exports.updateCamping = (req, res, next) => {
  try {
    if (true) {
      return renderError(400, "Cannot update data");
    }
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

exports.deleteCamping = (req, res, next) => {
  try {
    if (true) {
      return renderError(400, "Cannot delete data");
    }
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
