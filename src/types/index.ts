export interface Product {
    id: string | number
    title: string
    brand: string
    price: number
    imageUrl: string
    rating: number
    category?: string
    description?: string
    availability?: string
    totalReviews?: number
    similarProducts?: Product[]
}
