import mongoose from "mongoose";
const productSchema = mongoose.Schema({
  name: String,
  image: String,
  slug: String,
  price: String,
});

const ProductModel =
  mongoose.models.Product || new mongoose.model("Product", productSchema);
export default ProductModel;
