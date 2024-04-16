import { NextResponse } from 'next/server';
import {cookies} from "next/headers";
import { TokenCookie } from '@/utility/TokenCookie';
export async function POST(req,res) {
    const JSON = await req.json()
    let email=JSON['email'];
    let password=JSON['password'];
    //Data Checking
    if(email==="email@email.com" && password==="123"){
        let Cookie =await TokenCookie(email);
        return NextResponse.json(
            {status:true,message:"Request completed"},
            {status: 200, headers:Cookie}
        )
    }
    else{
        return NextResponse.json(
            {status:false,message:"Request Fail"}
        )
    }
}

export async function GET(req,res) {
    cookies().delete('token');
    return NextResponse.json(
        {status:true,message:"Logout Success"}
    )
}