const getEnvVariable = (variableName) => {
  const env = process.env.NODE_ENV || "development";
  const envFile = `.env.${env}`;
  const envPath = `${process.cwd()}/${envFile}`;
  require("dotenv").config({ path: envPath });
  return process.env[variableName];
};

export default getEnvVariable;
