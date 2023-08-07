import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userSchema";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

 
connect();

export async function PUT(request, response) {
  const token=request.cookies.get("token")?.value || '';
  const decodedtoken = jwt.verify(token, 'pussy');
  console.log(decodedtoken);
  const reqBody = await request.json()
   const {image,gender,year,bio} = reqBody;
  const update = await User.findByIdAndUpdate(decodedtoken.id, { image, gender, bio, year });
   return NextResponse.json({message:'success'})

}