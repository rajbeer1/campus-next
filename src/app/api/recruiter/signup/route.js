import { connect } from "@/dbConfig/dbConfig";
import Recruiter from "@/models/Recruiter";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
connect();
export async function POST(request) {
  try {
    const reqBody = await request.json()
    const { name, email, password,companyName} = reqBody;
   
    
    
    const rec = await Recruiter.findOne({ email });
   
    
    if (rec) {
      return NextResponse.json({ error: "recruiter exists already" }, { status: 400 });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newrecuriter = new Recruiter({
      name,
      email,
      password: hashedPassword,
      companyName
    })
    const savedrec = await newrecuriter.save();

    
    return NextResponse.json({
      message: "user created"
      , status: 201, savedrec
    })
 
  }
  catch (error) {
    return NextResponse.json({ error: error.message }, {status: 500})
  }
}