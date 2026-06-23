import { NextResponse } from "next/server";

const user = {
    id: 1,
    name: "rupali",
    password: "123456"
}

export async function POST(req: Request) {
    const body = await req.json();
    const {name, password} = body;

    if (name != user.name) {
        return NextResponse.json({
            message: "required field"
        })
    }

    if (password != user.password) {
        return NextResponse.json({
            message: "required field"
        })
    }

}