import React from 'react'

const Newsletter = () => {
    return (
        <section className="py-20 bg-primary text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Join Our Exclusive Club</h2>
                    <p className="text-gray-400 mb-10 text-lg">Subscribe to our newsletter for early access to new collections, exclusive offers, and style tips.</p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all backdrop-blur-sm"
                        />
                        <button className="px-8 py-4 bg-accent text-primary font-bold rounded-full hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-xl">
                            Subscribe
                        </button>
                    </form>
                    <p className="text-xs text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
