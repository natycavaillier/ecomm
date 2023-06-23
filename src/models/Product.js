import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true, match: /^(?![0-9])\s*\S.{2,}$/ },
    descricao: { type: String },
    slug: { type: String, match: /^[a-zA-Z0-9-]+$/ },
    preco: { type: Number, validate: (value) => value > 0 },
    estoque: { type: Number, validate: (value) => (value > 0) && (value < 10000) },
    categoria: {
      _id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'categories', validate: (value) => mongoose.Types.ObjectId.isValid(value),
      },
      nome: { type: String, required: true, match: /^(?![0-9])[a-zA-Z0-9]{3,}$/ },
      status: { type: String },
    },
  },
  {
    versionKey: false,
  },
);

const products = mongoose.model('products', productSchema);

export default products;
