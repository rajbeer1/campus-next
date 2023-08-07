import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userSchema';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

connect();

export async function PUT(request, response) {
  const reqbody =await request.json()
  const { email } = reqbody;
  const token = request.cookies.get('token')?.value || '';
  const decodedtoken = jwt.verify(token, 'pussy');
  console.log(decodedtoken.email);
   await User.findByIdAndUpdate(decodedtoken.id, {
     $push: {
       connections: {
         email: email,
         connectedAt: Date.now(),
       },
     },
   });
  return NextResponse.json({ message: 'success' });
}
