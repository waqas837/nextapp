import nextConnect from "next-connect";
import db from "../../../utils/db";
import ProductModel from "../../../models/Product";
const handler = nextConnect();
handler.get(async (req, res) => {
  await db.connect();
  const findAllProducts = await ProductModel.find();
  await db.disconnect();
  res.send(findAllProducts);
});
export default handler;
