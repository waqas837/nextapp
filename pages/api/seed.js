import nextConnect from "next-connect";
import db from "../../utils/db";
import { products } from "../../utils/data";
import ProductModel from "../../models/Product";
const handler = nextConnect();
handler.get(async (req, res) => {
  await db.connect();
  await ProductModel.deleteMany();
  const storeProducts = await ProductModel.insertMany(products);
  await db.disconnect();
  res.send(storeProducts);
});
export default handler;
