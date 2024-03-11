import mongoose from mongoose 

const productSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  produtImage: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  stock: {
    type: Number,
    default: 0
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: true
  },
  owener: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }

},{timestams: true})


export const product = mongoose.model("product",productSchema)