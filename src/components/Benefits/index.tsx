import React from 'react'
import { FaShippingFast, FaUndo, FaHeadset, FaShieldAlt } from 'react-icons/fa'

const benefits = [
    {
        id: 1,
        icon: FaShippingFast,
        title: 'Free Shipping',
        description: 'On all orders over Rs 999',
    },
    {
        id: 2,
        icon: FaUndo,
        title: 'Hassle-Free Returns',
        description: '30-day money-back guarantee',
    },
    {
        id: 3,
        icon: FaHeadset,
        title: '24/7 Support',
        description: 'Dedicated support team',
    },
    {
        id: 4,
        icon: FaShieldAlt,
        title: 'Secure Payment',
        description: '100% secure payment processing',
    },
]

const Benefits = () => {
    return (
        <section className="py-16 bg-white border-y border-border/50">
            <div className="w-full px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={benefit.id}
                            className="flex flex-col items-center text-center group p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors duration-300">
                                <benefit.icon className="text-2xl text-primary group-hover:text-accent transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-2">{benefit.title}</h3>
                            <p className="text-text-secondary text-sm">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Benefits
