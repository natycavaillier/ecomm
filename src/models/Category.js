import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    nome: { type: String, required: true, match: /^(?![0-9])[a-zA-Z0-9]{3,}$/ },
    status: { type: String },
  },
  {
    versionKey: false,
  },
);

const categories = mongoose.model('categories', categorySchema);

export default categories;
