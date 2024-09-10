import Producto from '../models/producto.js';

export const getProductos = async (req, res) => {
    
try {
    const productos = await Producto.find();
    res.json(productos);
} catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
}
};

export const createProducto = async (req, res) => {

const { nombre, precio, enStock, descripcion, imagenUrl } = req.body;

try {
    const nuevoProducto = new Producto({ nombre, precio, enStock, descripcion, imagenUrl });
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
} catch (error) {
    res.status(500).json({ error: 'Error al crear producto' });
}
};
