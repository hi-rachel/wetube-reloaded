import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;

const app = express();
const logger = morgan("common");
app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/user", userRouter);

const home = (req, res) => {
    console.log("I will respond.")
    return res.send("hello");
};

const login = (req, res) => {
    return res.send("login");
};

const handleListening = () =>
    console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
 