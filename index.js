const PORT = process.env.PORT || 5000;
const userRouter = require("./src/user-router")
const Application = require("./FrameWork/Application");
const app = new Application();
const parseUrl = require("./FrameWork/parseUrl");
const jsonParser = require("./FrameWork/parseJson")

const mongoose = require("mongoose");


app.use(jsonParser)
app.use(parseUrl("http://localhost:5000"))
app.addRouter(userRouter);


const start = async () => {
 try {
  await mongoose.connect("mongodb+srv://123:123@cluster0.seepvcp.mongodb.net/?retryWrites=true&w=majority")
   app.listen(PORT, () => {
  console.log(`Start Server on port ${PORT}`);
});
 } catch (e) {
  console.log(e);
 }
};

start();










// res.writeHead(200, {
//     "Content-Type": "text/html; charset=utf-8"
// })

// res.writeHead(200, {
//     "content-type": "applicatio/json"
// })
// if(req.url === "/users") {
//     return res.end(JSON.stringify( [
//         {id: 1, name:"Igor"}
//     ]))
// }
// if(req.url === "/posts") {
//     return res.end("Posts")
// }
