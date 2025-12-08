import Image from 'next/image'
import { Product } from '@/types'

interface SimilarProductsItemProps {
    productDetails: Product
}

const SimilarProductsItem = ({ productDetails }: SimilarProductsItemProps) => {
    const { imageUrl, title, brand, price, rating } = productDetails

    return (
        <li className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative h-48 bg-gray-100">
                <Image
                    src={imageUrl}
                    alt={`similar product ${title}`}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-4">
                <p className="text-lg font-bold text-text-primary mb-1 line-clamp-2">{title}</p>
                <p className="text-sm text-text-secondary mb-3">by {brand}</p>
                <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-primary">Rs {price}/-</p>
                    <div className="flex items-center gap-1 bg-success/10 px-2 py-1 rounded">
                        <p className="text-sm font-semibold text-success">{rating}</p>
                        <Image
                            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                            alt="star"
                            width={14}
                            height={14}
                        />
                    </div>
                </div>
            </div>
        </li>
    )
}

export default SimilarProductsItem
