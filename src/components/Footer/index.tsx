import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-surface border-t border-border pt-16 pb-8">
            <div className="w-full px-4 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-black text-primary tracking-tighter">NXT TRENDZ</h3>
                        <p className="text-text-secondary leading-relaxed">
                            Your one-stop destination for all things trendy. We bring you the latest fashion, electronics, and home essentials at unbeatable prices.
                        </p>
                        <div className="flex gap-4">
                            {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                                <a key={index} href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-text-primary mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'Products', 'Cart', 'About Us'].map((item) => (
                                <li key={item}>
                                    <Link href="/" className="text-text-secondary hover:text-primary transition-colors hover:translate-x-1 inline-block">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-text-primary mb-6">Customer Service</h4>
                        <ul className="space-y-4">
                            {['Contact Us', 'Shipping Policy', 'Returns & Exchanges', 'FAQs'].map((item) => (
                                <li key={item}>
                                    <Link href="/" className="text-text-secondary hover:text-primary transition-colors hover:translate-x-1 inline-block">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-text-primary mb-6">Newsletter</h4>
                        <p className="text-text-secondary mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            />
                            <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-secondary text-sm">
                        © {new Date().getFullYear()} NXT Trendz. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-text-secondary">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
