import React from 'react'
import Image from 'next/image'

const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Fashion Enthusiast',
        image: 'https://assets.ccbp.in/frontend/react-js/es-theresa-webb-img.png',
        quote: "The quality of the clothing is absolutely outstanding. I've never felt more confident in my outfits!",
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Tech Reviewer',
        image: 'https://assets.ccbp.in/frontend/react-js/es-jacob-jones-img.png',
        quote: "Fast shipping and excellent customer service. The electronics I bought were exactly as described.",
    },
    {
        id: 3,
        name: 'Emily Davis',
        role: 'Interior Designer',
        image: 'https://assets.ccbp.in/frontend/react-js/es-isabella-berger-img.png',
        quote: "Beautiful home decor items that completely transformed my living space. Highly recommended!",
    },
]

const Testimonials = () => {
    return (
        <section className="py-20 bg-background overflow-hidden">
            <div className="w-full px-6 md:px-12 lg:px-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Customers Say</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-surface p-8 rounded-2xl shadow-premium hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-2">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-accent/20">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                                    <p className="text-xs text-accent font-bold uppercase tracking-wider">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-text-secondary italic leading-relaxed">"{testimonial.quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
