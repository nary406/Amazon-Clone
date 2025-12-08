'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import Cookies from 'js-cookie'
import { FiShoppingCart, FiLogOut, FiMenu, FiX } from 'react-icons/fi'
import { useCart } from '@/context/CartContext'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { cartList } = useCart()
    const router = useRouter()
    const pathname = usePathname()

    const onClickLogout = () => {
        Cookies.remove('jwt_token')
        router.replace('/login')
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const isActive = (path: string) => pathname === path

    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-50 transition-all duration-300">
            <div className="w-full px-4 md:px-8 lg:px-12">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <Image
                            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                            alt="website logo"
                            width={140}
                            height={48}
                            className="w-auto h-10 transition-transform duration-300 group-hover:scale-105"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-10">
                        <Link
                            href="/"
                            className={`font-medium text-sm tracking-wide transition-all duration-200 ${isActive('/')
                                ? 'text-primary font-bold'
                                : 'text-text-secondary hover:text-primary'
                                }`}
                        >
                            HOME
                        </Link>
                        <Link
                            href="/products"
                            className={`font-medium text-sm tracking-wide transition-all duration-200 ${isActive('/products')
                                ? 'text-primary font-bold'
                                : 'text-text-secondary hover:text-primary'
                                }`}
                        >
                            PRODUCTS
                        </Link>
                        <Link
                            href="/cart"
                            className={`font-medium text-sm tracking-wide transition-all duration-200 relative group ${isActive('/cart')
                                ? 'text-primary'
                                : 'text-text-secondary hover:text-primary'
                                }`}
                        >
                            <div className="relative p-2">
                                <FiShoppingCart className="text-2xl group-hover:scale-110 transition-transform duration-200" />
                                {cartList.length > 0 && (
                                    <span className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-sm border-2 border-white">
                                        {cartList.length}
                                    </span>
                                )}
                            </div>
                        </Link>
                        <button
                            type="button"
                            onClick={onClickLogout}
                            className="btn-primary flex items-center gap-2 !py-2.5 !px-5 text-sm"
                        >
                            <FiLogOut />
                            Logout
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={toggleMobileMenu}
                        className="md:hidden text-text-primary text-2xl p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 space-y-2 border-t border-border animate-fade-in">
                        <Link
                            href="/"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block font-medium px-4 py-3 rounded-lg transition-colors ${isActive('/') ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-gray-50'
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/products"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block font-medium px-4 py-3 rounded-lg transition-colors ${isActive('/products') ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-gray-50'
                                }`}
                        >
                            Products
                        </Link>
                        <Link
                            href="/cart"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block font-medium px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${isActive('/cart') ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-gray-50'
                                }`}
                        >
                            <span className="flex items-center gap-2">
                                <FiShoppingCart />
                                Cart
                            </span>
                            {cartList.length > 0 && (
                                <span className="bg-accent text-white text-xs font-bold rounded-full px-2 py-1">
                                    {cartList.length}
                                </span>
                            )}
                        </Link>
                        <div className="pt-2 px-4">
                            <button
                                type="button"
                                onClick={onClickLogout}
                                className="btn-primary w-full flex items-center justify-center gap-2"
                            >
                                <FiLogOut />
                                Logout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Header
