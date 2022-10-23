import mongoose from "mongoose";
import 'dotenv/config'



const password = process.env.PASSWORD;



const connectString = `mongodb+srv://ShareFile:${password}@sharefile.5zwp06t.mongodb.net/?retryWrites=true&w=majority`

const connect =async ():Promise<any> => {
    try {
        const conn = await mongoose.connect(connectString);
        console.log("Connected successfully");
        
    } catch (error) {
        console.log({errorConnet: error});
        
    }
}

export default connect;