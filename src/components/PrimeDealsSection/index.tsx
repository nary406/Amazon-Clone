import { cookies } from 'next/headers'
import ProductCard from '../ProductCard'
import Image from 'next/image'
import { Product } from '@/types'

async function getPrimeDeals() {
    const cookieStore = await cookies()
    const jwtToken = cookieStore.get('jwt_token')?.value

    if (!jwtToken) return null

    const apiUrl = 'https://apis.ccbp.in/prime-deals'
    const options = {
        headers: {
            Authorization: `Bearer ${jwtToken}`,
        },
        method: 'GET',
    }

    try {
        const response = await fetch(apiUrl, options)
        if (response.ok) {
            const fetchedData = await response.json()
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return fetchedData.prime_deals.map((product: any) => ({
                title: product.title,
                brand: product.brand,
                price: product.price,
                id: product.id,
                imageUrl: product.image_url,
                rating: product.rating,
            }))
        }
    } catch {
        return null
    }
    return null
}

const PrimeDealsSection = async () => {
    const primeDeals = await getPrimeDeals()

    if (!primeDeals) {
        return (
            <div className="mb-8">
                <Image
                    src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
                    alt="Register Prime"
                    width={800}
                    height={300}
                    className="w-full h-auto rounded-lg"
                />
            </div>
        )
    }

    return (
        <div className="mb-12">
            <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
                Exclusive Prime Deals
            </h1>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {primeDeals.map((product: Product) => (
                    <ProductCard productData={product} key={product.id} />
                ))}
            </ul>
        </div>
    )
}

export default PrimeDealsSection
