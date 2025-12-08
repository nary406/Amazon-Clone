'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react'

// Define types
export interface CartItem {
    id: string | number
    title: string
    brand: string
    price: number
    imageUrl: string
    rating: number
    quantity: number
}

interface CartContextType {
    cartList: CartItem[]
    addCartItem: (product: CartItem) => void
    removeCartItem: (id: string | number) => void
    incrementCartItemQuantity: (id: string | number) => void
    decrementCartItemQuantity: (id: string | number) => void
    removeAllCartItems: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartList, setCartList] = useState<CartItem[]>([])

    const addCartItem = (product: CartItem) => {
        setCartList((prevCartList) => {
            const productObject = prevCartList.find(
                (eachCartItem) => eachCartItem.id === product.id
            )

            if (productObject) {
                return prevCartList.map((eachCartItem) => {
                    if (productObject.id === eachCartItem.id) {
                        const updatedQuantity = eachCartItem.quantity + product.quantity
                        return { ...eachCartItem, quantity: updatedQuantity }
                    }
                    return eachCartItem
                })
            }
            return [...prevCartList, product]
        })
    }

    const removeCartItem = (id: string | number) => {
        setCartList((prevCartList) =>
            prevCartList.filter((eachCartItem) => eachCartItem.id !== id)
        )
    }

    const incrementCartItemQuantity = (id: string | number) => {
        setCartList((prevCartList) =>
            prevCartList.map((eachCartItem) => {
                if (id === eachCartItem.id) {
                    const updatedQuantity = eachCartItem.quantity + 1
                    return { ...eachCartItem, quantity: updatedQuantity }
                }
                return eachCartItem
            })
        )
    }

    const decrementCartItemQuantity = (id: string | number) => {
        setCartList((prevCartList) => {
            const productObject = prevCartList.find(
                (eachCartItem) => eachCartItem.id === id
            )
            if (productObject && productObject.quantity > 1) {
                return prevCartList.map((eachCartItem) => {
                    if (id === eachCartItem.id) {
                        const updatedQuantity = eachCartItem.quantity - 1
                        return { ...eachCartItem, quantity: updatedQuantity }
                    }
                    return eachCartItem
                })
            }
            return prevCartList.filter((eachCartItem) => eachCartItem.id !== id)
        })
    }

    const removeAllCartItems = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider
            value={{
                cartList,
                addCartItem,
                removeCartItem,
                incrementCartItemQuantity,
                decrementCartItemQuantity,
                removeAllCartItems,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}
