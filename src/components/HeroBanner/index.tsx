'use client'

import React from 'react'
import Slider from 'react-slick'
import Link from 'next/link'
import Image from 'next/image'

const heroOffers = [
    {
        id: 'offer_101',
        title: 'Diwali Dhamaka Sale',
        subtitle: 'Up to 50% Off on Ethnic Wear',
        imageUrl: 'https://cdn.pixabay.com/photo/2025/06/23/06/50/sweatshirt-9675253_1280.jpg',
        ctaText: 'Shop Now',
        ctaLink: '/products?category=1',
        backgroundColor: '#ff9f00',
    },
    {
        id: 'offer_102',
        title: 'New Arrivals in Tech',
        subtitle: 'Latest Gadgets at Best Prices',
        imageUrl: 'https://cdn.pixabay.com/photo/2025/03/09/09/53/woman-9456852_1280.jpg',
        ctaText: 'Explore',
        ctaLink: '/products?category=2',
        backgroundColor: '#2563eb',
    },
    {
        id: 'offer_103',
        title: 'Home Makeover',
        subtitle: 'Refresh your space with our new collection',
        imageUrl: 'https://cdn.pixabay.com/photo/2022/10/10/08/32/woman-7511233_1280.jpg',
        ctaText: 'View Collection',
        ctaLink: '/products?category=3',
        backgroundColor: '#10b981',
    },
]

const HeroBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        arrows: false,
        dotsClass: "slick-dots !bottom-8",
    }

    return (
        <div className="w-full h-[600px] md:h-[700px] lg:h-[800px] relative overflow-hidden bg-background">
            <Slider {...settings} className="h-full hero-slider">
                {heroOffers.map((offer) => (
                    <div key={offer.id} className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] outline-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-100 flex items-center">
                            <div className="w-full px-6 md:px-12 lg:px-24 grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-8 z-10 animate-slide-up">
                                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-primary leading-none tracking-tighter">
                                        {offer.title.split(' ').map((word, i) => (
                                            <span key={i} className="block">{word}</span>
                                        ))}
                                    </h1>
                                    <p className="text-xl text-text-secondary max-w-md font-medium border-l-4 border-accent pl-6">
                                        {offer.subtitle}
                                    </p>
                                    <Link href={offer.ctaLink}>
                                        <button className="mt-4 px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-accent hover:text-primary transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                                            {offer.ctaText}
                                        </button>
                                    </Link>
                                </div>
                                <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl animate-pulse" />
                                    <Image
                                        src={offer.imageUrl}
                                        alt={offer.title}
                                        width={600}
                                        height={600}
                                        className="object-contain relative z-10 drop-shadow-2xl animate-fade-in"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default HeroBanner
