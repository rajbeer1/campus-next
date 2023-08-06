import { connect } from "@/dbConfig/dbConfig";
import College from "@/models/College.js";
import allowedCollege from "@/models/allowedcollege";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'


connect();
export async function POST(request) {
  try { 
    const reqBody = await request.json()
    const { name, email, password } = reqBody;
    const domain = email.split('@');
    const saveddomain = domain[domain.length - 1];
    const newDomain = new allowedCollege({
      domain: saveddomain
    });
    await newDomain.save();
     console.log(reqBody);
    const college = await College.findOne({ email });
    if (college) {
      return NextResponse.json({ error: "user exists already" }, { status: 400 });
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser=new College({
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