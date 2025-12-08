import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { username, password } = body

        // Mock authentication logic
        // In a real app, you would check against a database
        if (username === 'rahul' && password === 'rahul@2021') {
            return NextResponse.json({
                jwt_token: 'mock_jwt_token_xyz_123',
            })
        } else {
            return NextResponse.json(
                {
                    error_msg: "Username and Password didn't match",
                },
                { status: 400 }
            )
        }
    } catch {
        return NextResponse.json(
            { error_msg: 'Internal Server Error' },
            { status: 500 }
        )
    }
}
