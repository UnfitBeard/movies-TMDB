import app from "./app.js";
import connectDatabase from "./Config/database.js";

const PORT = process.env.PORT || 4000;

connectDatabase()
  .then(() => {
    console.log("Database connected, starting server...");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  });
