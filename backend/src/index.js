import app from "./app.js";
import connectDb from "./database/database.js";
import _config from "./config.js";

const port = _config.port || 7000;

connectDb();
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
