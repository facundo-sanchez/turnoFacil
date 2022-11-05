import jwt, { Secret } from "jsonwebtoken";

const SECRET_OR_PRIVATE_KEY: Secret = process.env.SECRETORPRIVATEKEY;
export const generateJWT = (id: Number) => {
  return new Promise((resolve, reject) => {
    const payload: Object = { id };

    jwt.sign(
      payload,
      SECRET_OR_PRIVATE_KEY,
      {
        expiresIn: "1h",
      },
      (err:Error, token:String) => {
        if (err) {
          console.log(err);
          reject("Error in generate Token");
        } else {
          resolve(token);
        }
      }
    );
  });
};
