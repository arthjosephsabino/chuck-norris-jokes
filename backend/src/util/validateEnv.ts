import { cleanEnv } from "envalid";
import { port, str } from "envalid/dist/validators";

export default cleanEnv(process.env, {
  NODE_ENV: str(),
  API_URL: str(),
  PORT: port(),
});