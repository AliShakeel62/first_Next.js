import { NextRequest, NextResponse } from "next/server";

export function GET (request: NextRequest) {
  const user = [
    {
      id:1,
      name: "ali",
      age: 16,
      gender: "male",
    },
    {
      id:2,
      name: "hamid",
      age: 16,
      gender: "male",
    },
    {
      id:3,
      name: "hamad",
      age: 15,
      gender: "male",
    },
    {
      id:4,
      name: "ayan",
      age: 16,
      gender: "male",
    },
  ];

  return NextResponse.json({
    Sucsseful:true,
    data: user,
    message:"message send succesfully"
  },{status:200});
}
