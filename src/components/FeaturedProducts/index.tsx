import { cookies } from 'next/headers'
import ProductCard from '../ProductCard'
import { Product } from '@/types'

async function getFeaturedProducts() {
    const cookieStore = await cookies()
    const jwtToken = cookieStore.get('jwt_token')?.value

    if (!jwtToken) return null

    const apiUrl = 'https://apis.ccbp.in/products?sort_by=PRICE_HIGH&rating=4'
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
            return fetchedData.products.slice(0, 4).map((product: any) => ({
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

const TopSellers = async () => {
    const products = await getFeaturedProducts()

    if (!products) {
        return null
    }

    return (
        <section className="w-full">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Top Sellers</h2>
                <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product: Product) => (
                    <ProductCard productData={product} key={product.id} />
                ))}
            </ul>
        </section>
    )
}

export default TopSellers
