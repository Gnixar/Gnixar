import mongoose from "mongoose";

const uri = "mongodb+srv://Gnixar:0987654321@cluster0.jxl3hoi.mongodb.net/Gnixar_Db?retryWrites=true&w=majority";

export const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error.message);

        // Exit only after a few retries (optional)
        process.exit(1);
    }
};
