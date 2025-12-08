import ProductCard from '../ProductCard'
import Image from 'next/image'
import { Product } from '@/types'

interface ProductListProps {
    products: Product[] | null
}

const ProductList = ({ products }: ProductListProps) => {
    if (!products) {
        return (
            <div className="flex flex-col items-center justify-center py-16">
                <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
                    alt="products failure"
                    width={250}
                    height={200}
                    className="mb-6"
                />
                <h1 className="text-2xl font-bold text-text-primary mb-3">
                    Oops! Something Went Wrong
                </h1>
                <p className="text-text-secondary text-center max-w-md">
                    We are having some trouble processing your request. Please try again.
                </p>
            </div>
        )
    }

    if (products.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-16">
                <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
                    alt="no products"
                    width={250}
                    height={200}
                    className="mb-6"
                />
                <h1 className="text-2xl font-bold text-text-primary mb-3">
                    No Products Found
                </h1>
                <p className="text-text-secondary">
                    We could not find any products. Try other filters.
                </p>
            </div>
        )
    }

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
                <ProductCard productData={product} key={product.id} />
            ))}
        </ul>
    )
}

export default ProductList
