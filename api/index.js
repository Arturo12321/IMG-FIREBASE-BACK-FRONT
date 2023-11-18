import express from "express";
import { connectToDatabase } from "./config/db.js";
import { upload } from "./config/multer.js";
import { uploadFile } from "./util/uploadFile.js";
import { User } from "./models/User.js";
import cors from 'cors';

connectToDatabase()
const app = express();
const port = 3000

app.use(
    cors({
        origin: 'http://localhost:5173'
    })
);

app.get('/users', async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 })
        res.status(200).json({users})
    } catch (error) {
        res.status(400)
        .json({ message: 'Ocurrio un error al obtener los usuario',error});
    };
});

app.post('/create-user',upload.fields([{name:'image', maxCount: 1}]), async (req, res) => {
    const body = req.body;
    const image = req.files.image;

    if (image && image.length > 0) {
        const {downloadURL} = await uploadFile(image[0])

        const newUser = await new User({
            firstname: body.firstname,
            lastname: body.lastname,
            image: downloadURL
        }).save()

        return res.status(200).json(newUser)
    };

    return res.status(400).json({message: 'Debes inviar una imagen'})
});

app.listen(port, () => {
    console.log(`The API is listening on port ${port}`);
});