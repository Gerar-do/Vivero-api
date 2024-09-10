import mongoose from 'mongoose';

const connectDB = async () => {
try {
    // Verifica que el valor de la URI esté definido
    const uri = process.env.MONGO_URI;
    if (!uri) {
    throw new Error("MONGO_URI no está definida en el archivo .env");
    }

    await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
} catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1); // Detiene la app si no puede conectar
}
};

export default connectDB;
