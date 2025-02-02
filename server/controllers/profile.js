const renderError = require("../utils/renderError");
const prisma = require("../config/prisma");

exports.createProfile = async(req, res, next) => {
  try {
    const { firstname, lastname } = req.body;
    const {id}  = req.user;
    const email = req.user.emailAddresses[0].emailAddress

    // const profile = await prisma.profile.create({
    //   data: {
    //     firstname,
    //     lastname,
    //     clerkId: id,
    //     email
    //   }
    // })
    //it's me
    const profile = await prisma.profile.upsert({
      where: { clerkId: id},
      create: {
        firstname,
        lastname,
        clerkId: id,
        email
      },
      update: {
        firstname,
        lastname,
        email
      }
    })

    console.log("Hello create Profile Controller ");
    const message = profile.createdAt === profile.updatedAt ?  "Created Profile Successfully" : "Updated Profile Successfully"
    res.json({ result:profile, msg: message });
  } catch (error) {
    console.log(error.message);
    next(error); //ส่ง error ไปที่ middleware error
  }
};
