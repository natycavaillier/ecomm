import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    // _id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true, validate: /^(?![0-9])[a-zA-Z0-9]{3,}$/ },
    status: { type: String },
  },
  {
    versionKey: false,
  },
);

const categories = mongoose.model('categories', categorySchema);

export default categories;
