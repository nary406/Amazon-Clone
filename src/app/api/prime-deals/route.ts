import { NextResponse } from 'next/server'
import { getPrimeDealsData } from '@/lib/data'

export async function GET() {
    const primeDeals = await getPrimeDealsData()
    return NextResponse.json({ prime_deals: primeDeals })
}
