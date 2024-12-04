import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/mensaje', (req, res) => {
    const { nombre, apellido, cohorte } = req.body;

    if (!nombre || !apellido || !cohorte) {
        return res.status(400).json({ mensaje: 'Faltan datos. Por favor envía nombre, apellido, y cohorte.' });
    }
    res.status(200).json({ mensaje: '¡Estás dentro!' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
