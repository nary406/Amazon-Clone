import { cookies } from 'next/headers'
import Header from '@/components/Header'
import FiltersGroup from '@/components/FiltersGroup'
import ProductsHeader from '@/components/ProductsHeader'
import ProductList from '@/components/ProductList'
import PrimeDealsSection from '@/components/PrimeDealsSection'
import Footer from '@/components/Footer'

async function getProducts(searchParams: { [key: string]: string | string[] | undefined }) {
    const cookieStore = await cookies()
    const jwtToken = cookieStore.get('jwt_token')?.value

    if (!jwtToken) return null

    const sort_by = searchParams.sort_by || 'PRICE_HIGH'
    const category = searchParams.category || ''
    const title_search = searchParams.title_search || ''
    const rating = searchParams.rating || ''

    const apiUrl = `https://apis.ccbp.in/products?sort_by=${sort_by}&category=${category}&title_search=${title_search}&rating=${rating}`
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
            return fetchedData.products.map((product: any) => ({
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

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const resolvedSearchParams = await searchParams
    const products = await getProducts(resolvedSearchParams)

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <div className="w-full px-6 md:px-12 lg:px-24 py-8 flex-1">
                <PrimeDealsSection />
                <div className="grid lg:grid-cols-[280px_1fr] gap-8 mt-8">
                    <aside className="hidden lg:block sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto pr-4 scrollbar-hide">
                        <FiltersGroup />
                    </aside>
                    <div className="w-full">
                        <ProductsHeader />
                        <ProductList products={products} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
