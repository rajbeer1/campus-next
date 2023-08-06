import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userSchema";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken';
 
connect();

export async function POST(request) {
  try { 
     const reqBody = await request.json()
        const {email, password} = reqBody;
    const user = await User.findOne({ email })
    if (!user) {
      return NextResponse.json({ error: "user doesn,t exist" }, { status: 400 });
    }
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "wrong password" }, { status: 400 });
    }
    const tokenData = {
      id: user._id
    }
    const token = await jwt.sign(tokenData, 'pussy', { expiresIn: "1d" });
    const response = NextResponse.json({
      message: "success",
      success:true
    })
    response.cookies.set("token", token, {
      httpOnly: true
    })
    return response
  }
  catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}