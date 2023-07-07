import "../env.config";
import app from "./app";
import connectDB from "./db";
connectDB();
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server on PORT ${PORT}`);
});
