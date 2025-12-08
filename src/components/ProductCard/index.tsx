'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface ProductData {
    id: string | number
    title: string
    brand: string
    imageUrl: string
    rating: number
    price: number
}

interface ProductCardProps {
    productData: ProductData
}

const ProductCard: React.FC<ProductCardProps> = ({ productData }) => {
    const { title, brand, id, imageUrl, rating, price } = productData

    return (
        <li className="h-full">
            <Link href={`/products/${id}`} className="block group h-full">
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-primary/20 h-full flex flex-col relative">
                    {/* Image Section */}
                    <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Quick View Button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                            <span className="bg-white/90 backdrop-blur-sm text-primary px-6 py-2.5 rounded-full font-bold text-sm shadow-lg hover:bg-primary hover:text-white transition-colors duration-300">
                                View Details
                            </span>
                        </div>

                        {/* Rating Badge - Absolute positioned */}
                        <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg shadow-sm border border-gray-100">
                            <span className="text-xs font-bold text-gray-900">{rating}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-yellow-500">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 flex flex-col flex-1 bg-white relative z-10">
                        <div className="mb-2">
                            <p className="text-xs font-bold tracking-widest text-primary/80 uppercase mb-1">
                                {brand}
                            </p>
                            <h3 className="text-base font-semibold text-gray-900 line-clamp-1 group-hover:text-primary transition-colors duration-300" title={title}>
                                {title}
                            </h3>
                        </div>

                        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400 font-medium">Price</span>
                                <span className="text-lg font-bold text-gray-900">
                                    Rs {price.toLocaleString()}
                                </span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default ProductCard
