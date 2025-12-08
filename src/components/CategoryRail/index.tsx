'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const categories = [
    {
        id: '1',
        name: 'Clothing',
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png',
        link: '/products?category=1',
        description: 'Trendsetting Fashion'
    },
    {
        id: '2',
        name: 'Electronics',
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png',
        link: '/products?category=2',
        description: 'Next-Gen Gadgets'
    },
    {
        id: '3',
        name: 'Appliances',
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-washing-machine.png',
        link: '/products?category=3',
        description: 'Home Essentials'
    },
]

const CategoryRail = () => {
    return (
        <section className="w-full">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Shop By Category</h2>
                <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map(category => (
                    <Link
                        href={category.link}
                        key={category.id}
                        className="group relative h-80 rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-gray-100 group-hover:bg-white transition-colors duration-500" />

                        <div className="absolute inset-0 flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-110">
                            <Image
                                src={category.imageUrl}
                                alt={category.name}
                                width={200}
                                height={200}
                                className="object-contain drop-shadow-xl"
                            />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                        <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{category.name}</h3>
                            <p className="text-gray-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                                {category.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default CategoryRail
