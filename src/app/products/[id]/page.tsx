import { cookies } from 'next/headers'
import Header from '@/components/Header'
import ProductDetails from '@/components/ProductDetails'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'

async function getProductDetails(id: string) {
    const cookieStore = await cookies()
    const jwtToken = cookieStore.get('jwt_token')?.value

    if (!jwtToken) return null

    const apiUrl = `https://apis.ccbp.in/products/${id}`
    const options = {
        headers: {
            Authorization: `Bearer ${jwtToken}`,
        },
        method: 'GET',
    }

    try {
        const response = await fetch(apiUrl, options)
        if (response.ok) {
            const data = await response.json()
            const updatedData = {
                id: data.id,
                imageUrl: data.image_url,
                title: data.title,
                price: data.price,
                description: data.description,
                brand: data.brand,
                totalReviews: data.total_reviews,
                rating: data.rating,
                availability: data.availability,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                similarProducts: data.similar_products.map((prod: any) => ({
                    id: prod.id,
                    imageUrl: prod.image_url,
                    title: prod.title,
                    price: prod.price,
                    description: prod.description,
                    brand: prod.brand,
                    totalReviews: prod.total_reviews,
                    rating: prod.rating,
                    availability: prod.availability,
                }))
            }
            return updatedData
        }
    } catch {
        return null
    }
    return null
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const productDetails = await getProductDetails(id)

    if (!productDetails) {
        return (
            <div className="min-h-screen bg-background">
                <Header />
                <div className="flex flex-col items-center justify-center min-h-[80vh]">
                    <Image
                        alt="failure view"
                        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
                        width={300}
                        height={300}
                        className="mb-6"
                    />
                    <h1 className="text-3xl font-bold text-text-primary mb-8">Product Not Found</h1>
                    <Link href="/products">
                        <button type="button" className="btn-primary">
                            Continue Shopping
                        </button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <div className="w-full px-6 md:px-12 lg:px-24 py-10 flex-1">
                <ProductDetails productDetails={productDetails} />
            </div>
            <Footer />
        </div>
    )
}
