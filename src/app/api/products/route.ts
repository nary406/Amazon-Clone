import { NextResponse } from 'next/server'
import { getProductsData } from '@/lib/data'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const sort_by = searchParams.get('sort_by') || undefined
    const category = searchParams.get('category') || undefined
    const title_search = searchParams.get('title_search') || undefined
    const rating = searchParams.get('rating') || undefined

    const products = await getProductsData({ sort_by, category, title_search, rating })

    return NextResponse.json({ products })
}
