'use client'

import { useCart } from '@/context/CartContext'

const CartSummary = () => {
    const { cartList } = useCart()
    let total = 0
    cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
    })

    return (
        <div className="flex justify-end w-full mt-8">
            <div className="bg-white rounded-2xl shadow-premium p-8 max-w-md w-full border border-border/50">
                <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Order Summary</h2>

                <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center text-gray-600">
                        <span>Items ({cartList.length})</span>
                        <span className="font-medium">Rs {total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600">
                        <span>Shipping</span>
                        <span className="text-success font-medium">Free</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600">
                        <span>Tax</span>
                        <span className="font-medium">Rs 0</span>
                    </div>
                    <div className="border-t border-dashed border-gray-200 pt-4 flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">Total Amount</span>
                        <span className="text-2xl font-black text-primary">Rs {total.toLocaleString()}</span>
                    </div>
                </div>

                <button type="button" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-primary-dark hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                    Proceed to Checkout
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default CartSummary
