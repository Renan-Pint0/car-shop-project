import express from 'express';
import carRoutes from './Routes/CarRoutes';
import motoRoutes from './Routes/MotorcycleRoutes';

const app = express();

app.use(express.json());
app.use('/cars', carRoutes);
app.use('/motorcycles', motoRoutes);

export default app;
