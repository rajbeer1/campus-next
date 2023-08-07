import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userSchema';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

connect();

export async function GET(request, response) {

  const token = request.cookies.get('token')?.value || '';
  
  const decodedtoken = jwt.verify(token, 'pussy');
  const e = decodedtoken.id
  
  const user = await User.findById(e);
  const emails = user.connections.map((connection) =>  connection.email);

  console.log(emails);
  return NextResponse.json(emails)
}