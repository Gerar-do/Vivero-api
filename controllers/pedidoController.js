import Pedido from '../models/pedido.js';

export const createPedido = async (req, res) => {
const { cliente, productos, total } = req.body;
try {
    const nuevoPedido = new Pedido({ cliente, productos, total });
    await nuevoPedido.save();
    res.status(201).json(nuevoPedido);
} catch (error) {
    res.status(500).json({ error: 'Error al crear pedido' });
}
};

export const getPedidos = async (req, res) => {
try {
    const pedidos = await Pedido.find().populate('productos');
    res.json(pedidos);

} catch (error) {
    res.status(500).json({ error: 'Error al obtener pedidos' });
}
};
