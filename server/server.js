const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const { readdirSync } = require("fs"); //เรียกใช้ module fs มาแล้วใช้ method readdirSync
const handleError = require("./middlewares/error");
require("dotenv/config"); //เรียกใช้ dotenv ในการเรียกใช้ค่าจากไฟล์ .env
const { clerkMiddleware } = require("@clerk/express");
// const campingRoute = require("./routes/camping");
// const profileRoute = require("./routes/profile");

app.use(cors()); //อนุญาตให้ server ติดต่อกับ domain ที่กำหนด
app.use(express.json()); //ให้ server อ่าน json ได้
app.use(morgan("dev")); //ให้แสดง log การทำงานของ server
app.use(clerkMiddleware());

//เรียกใช้ module fs ใช้ method readdirSync มา map แล้วใช้ app.use ในการเรียกใช้ route ที่อยู่ใน folder routes
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

app.use(handleError);
// app.use("/api", campingRoute);
// app.use("/api", profileRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
