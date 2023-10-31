import mongoose from "mongoose"

 export const dbConection = async():Promise<void>=>{
    try{
        const dbURL = process.env.DB_URL;
        if (!dbURL) {
            throw new Error('La URL no está correctamente definida en los Var de entorno')
    }
    await mongoose.connect(dbURL);
}
    catch(error){
        console.log(error);
        throw new Error('Error al iniciar la DB');
    }
 }

 