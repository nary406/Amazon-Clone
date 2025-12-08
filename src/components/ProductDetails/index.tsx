'use client'

import { useState } from 'react'
import { BsDashSquare, BsPlusSquare } from 'react-icons/bs'
import { useCart } from '@/context/CartContext'
import SimilarProductsItem from '../SimilarProductsItem'
import Image from 'next/image'
import { Product } from '@/types'

interface ProductDetailsProps {
    productDetails: Product
}

const ProductDetails = ({ productDetails }: ProductDetailsProps) => {
    const [count, setCount] = useState(1)
    const { addCartItem } = useCart()

    const {
        imageUrl,
        title,
        price,
        description,
        brand,
        totalReviews,
        rating,
        availability,
        similarProducts,
    } = productDetails

    const onDecrementQuantity = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1)
        }
    }

    const onIncrementQuantity = () => {
        setCount(prevCount => prevCount + 1)
    }

    const onClickAddToCart = () => {
        const cartItem = {
            id: productDetails.id,
            title: productDetails.title,
            brand: productDetails.brand,
            price: productDetails.price,
            imageUrl: productDetails.imageUrl,
            rating: productDetails.rating,
            quantity: count
        }
        addCartItem(cartItem)
    }

    return (
        <div className="space-y-12">
            <div className="bg-white rounded-2xl shadow-premium p-6 md:p-10 border border-border/50">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                    <div className="relative h-[400px] md:h-[600px] bg-gray-50 rounded-2xl overflow-hidden group">
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-gray-100">
                            <p className="text-sm font-bold text-primary">{availability}</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center space-y-8">
                        <div>
                            <p className="text-sm font-bold tracking-widest text-primary/80 uppercase mb-2">{brand}</p>
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">{title}</h1>

                            <div className="flex items-center gap-6">
                                <p className="text-4xl font-bold text-gray-900">Rs {price.toLocaleString()}/-</p>
                                <div className="flex items-center gap-2 bg-yellow-50 px-3 py-1.5 rounded-lg border border-yellow-100">
                                    <span className="font-bold text-yellow-700">{rating}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-yellow-700/80 border-l border-yellow-200 pl-2 ml-1">{totalReviews} Reviews</span>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg text-gray-600 leading-relaxed">
                            <p>{description}</p>
                        </div>

                        <div className="space-y-6 pt-8 border-t border-gray-100">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-4 bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
                                    <button
                                        type="button"
                                        className="text-gray-500 hover:text-primary transition-colors p-1"
                                        onClick={onDecrementQuantity}
                                        data-testid="minus"
                                    >
                                        <BsDashSquare className="text-2xl" />
                                    </button>
                                    <span className="font-bold text-gray-900 text-xl min-w-[40px] text-center">{count}</span>
                                    <button
                                        type="button"
                                        className="text-gray-500 hover:text-primary transition-colors p-1"
                                        onClick={onIncrementQuantity}
                                        data-testid="plus"
                                    >
                                        <BsPlusSquare className="text-2xl" />
                                    </button>
                                </div>

                                <button
                                    type="button"
                                    className="flex-1 bg-primary text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-primary-dark hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                                    onClick={onClickAddToCart}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-2xl font-bold text-text-primary mb-6">Similar Products</h1>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {similarProducts?.map((eachSimilarProduct: Product) => (
                        <SimilarProductsItem
                            productDetails={eachSimilarProduct}
                            key={eachSimilarProduct.id}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProductDetails
