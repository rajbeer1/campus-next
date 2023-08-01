import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userSchema";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'

 



connect();
export async function POST(request) {
  try { 
    const reqBody = await request.json()
    const { name, email, password} = reqBody;
     console.log(reqBody);
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ error: "user exists already" }, { status: 400 });
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser=new User({
      name,
      email,
      password: hashedPassword,
    })
     const saveduser=await newUser.save();

    
    return NextResponse.json({
      message:"user created"
    ,status:201,saveduser})
  }
  catch (error) {
    return NextResponse.json({ error: error.message }, {status: 500})
  }
}