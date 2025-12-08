'use client'

import { useCart } from '@/context/CartContext'
import Header from '@/components/Header'
import CartItem from '@/components/CartItem'
import CartSummary from '@/components/CartSummary'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'

export default function CartPage() {
    const { cartList, removeAllCartItems } = useCart()
    const showEmptyView = cartList.length === 0

    const onClickRemoveAllBtn = () => {
        removeAllCartItems()
    }

    const renderEmptyCartView = () => (
        <div className="flex flex-col items-center justify-center min-h-[70vh]">
            <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
                className="w-72 h-auto mb-6"
                alt="cart empty"
                width={300}
                height={200}
            />
            <h1 className="text-3xl font-bold text-text-primary mb-8">Your Cart Is Empty</h1>
            <Link href="/products">
                <button type="button" className="btn-primary">
                    Shop Now
                </button>
            </Link>
        </div>
    )

    const renderCartListView = () => (
        <div className="w-full">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-text-primary">My Cart</h1>
                <button
                    type="button"
                    className="text-primary font-semibold hover:text-primary-dark transition-colors"
                    onClick={onClickRemoveAllBtn}
                >
                    Remove All
                </button>
            </div>
            <ul className="space-y-4 mb-6">
                {cartList.map(eachCartItem => (
                    <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
                ))}
            </ul>
            <CartSummary />
        </div>
    )

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <div className="w-full px-6 md:px-12 lg:px-24 py-10 flex-1">
                {showEmptyView ? renderEmptyCartView() : renderCartListView()}
            </div>
            <Footer />
        </div>
    )
}
