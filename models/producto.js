import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
nombre: String,
precio: Number,
enStock: Boolean,
descripcion: String,
imagenUrl: String,
fechaLlegada: { type: Date, default: Date.now }
});

export default mongoose.model('Producto', productoSchema);
