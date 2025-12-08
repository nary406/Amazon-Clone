'use client'

import { BsPlusSquare, BsDashSquare } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'

interface CartItemProps {
    cartItemDetails: {
        id: string | number
        title: string
        brand: string
        quantity: number
        price: number
        imageUrl: string
    }
}

const CartItem = ({ cartItemDetails }: CartItemProps) => {
    const { id, title, brand, quantity, price, imageUrl } = cartItemDetails
    const { incrementCartItemQuantity, decrementCartItemQuantity, removeCartItem } = useCart()

    const onClickDecrement = () => {
        decrementCartItemQuantity(id)
    }

    const onClickIncrement = () => {
        incrementCartItemQuantity(id)
    }

    const onRemoveCartItem = () => {
        removeCartItem(id)
    }

    const totalPrice = price * quantity

    return (
        <li className="bg-white rounded-xl shadow-sm border border-border/50 p-6 mb-4 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow duration-300 relative group">
            <div className="relative w-full md:w-48 h-48 bg-gray-50 rounded-lg overflow-hidden shrink-0">
                <Image
                    className="object-contain p-4"
                    src={imageUrl}
                    alt={title}
                    fill
                />
            </div>

            <div className="flex-1 flex flex-col justify-between py-2">
                <div>
                    <div className="flex justify-between items-start pr-8">
                        <div>
                            <p className="text-xs font-bold tracking-widest text-primary/80 uppercase mb-1">{brand}</p>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                        </div>
                        <p className="text-2xl font-bold text-gray-900 hidden md:block">Rs {(price * quantity).toLocaleString()}/-</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-6">
                    <div className="flex items-center gap-4 bg-gray-50 rounded-lg px-4 py-2 border border-gray-200">
                        <button
                            type="button"
                            className="text-gray-500 hover:text-primary transition-colors"
                            data-testid="minus"
                            onClick={onClickDecrement}
                        >
                            <BsDashSquare className="text-xl" />
                        </button>
                        <span className="font-bold text-gray-900 min-w-[30px] text-center">{quantity}</span>
                        <button
                            type="button"
                            className="text-gray-500 hover:text-primary transition-colors"
                            data-testid="plus"
                            onClick={onClickIncrement}
                        >
                            <BsPlusSquare className="text-xl" />
                        </button>
                    </div>

                    <div className="flex items-center gap-2 md:hidden w-full justify-between border-t border-gray-100 pt-4">
                        <span className="text-gray-500 font-medium">Total:</span>
                        <p className="text-xl font-bold text-gray-900">Rs {(price * quantity).toLocaleString()}/-</p>
                    </div>
                </div>
            </div>

            <button
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-full"
                type="button"
                onClick={onRemoveCartItem}
                data-testid="remove"
                title="Remove Item"
            >
                <AiFillCloseCircle className="text-2xl" />
            </button>
        </li>
    )
}

export default CartItem
