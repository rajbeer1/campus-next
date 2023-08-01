import mongoose from "mongoose";
export async function connect() {
  try {
    mongoose.connect(process.env.MONGO);
   
    
  } catch (error) {
    console.log('something went wrong');
    console.log(error);
  }
  
}