import mongoose from "mongoose";

const urlConnection = "mongodb://127.0.0.1/cargar-imagenes-yt"


export function connectToDatabase() {
    mongoose.connect(urlConnection)
    .then(() => console.log("Database connected successfully"))
    .catch(error => console.error("Error connecting", error))

}