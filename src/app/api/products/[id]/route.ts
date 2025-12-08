import { NextResponse } from 'next/server'
import { getProductDetailsData } from '@/lib/data'

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params
    const product = await getProductDetailsData(id)

    if (product) {
        return NextResponse.json(product)
    } else {
        return NextResponse.json(
            { error_msg: 'Product Not Found' },
            { status: 404 }
        )
    }
}
