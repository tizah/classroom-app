const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3001,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoCloud:
    "mongodb+srv://classApp:a4JtRK5jUgCCVrME@cluster0.vdqws.mongodb.net/classApp?retryWrites=true&w=majority",
  mongoUri:
    process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    "mongodb://" +
      (process.env.IP || "localhost") +
      ":" +
      (process.env.MONGO_PORT || "27017") +
      "/mernproject1",
};

export default config;

//databaseName = classApp
//password = a4JtRK5jUgCCVrME
