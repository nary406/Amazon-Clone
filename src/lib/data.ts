import { Product } from '@/types'

export const products: Product[] = [
    {
        id: 1,
        title: 'Embroidered Net Gown',
        brand: 'Manyavar',
        price: 62990,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png',
        rating: 4.5,
        category: '1',
        description: 'A beautiful gown for special occasions.',
        availability: 'In Stock',
        totalReviews: 120,
        similarProducts: [
            {
                id: 2,
                title: 'TRUBLEND Perfect Liquid Foundation',
                brand: 'Covergirl',
                price: 3500,
                imageUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png',
                rating: 4.2,
            }
        ]
    },
    {
        id: 2,
        title: 'TRUBLEND Perfect Liquid Foundation',
        brand: 'Covergirl',
        price: 3500,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png',
        rating: 4.2,
        category: '2',
        description: 'Perfect foundation for all skin types.',
        availability: 'In Stock',
        totalReviews: 85,
        similarProducts: [
            {
                id: 1,
                title: 'Embroidered Net Gown',
                brand: 'Manyavar',
                price: 62990,
                imageUrl: 'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png',
                rating: 4.5,
            }
        ]
    },
    {
        id: 3,
        title: 'Exclusive Watch',
        brand: 'Fossil',
        price: 12000,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png',
        rating: 4.8,
        category: '2',
        description: 'Premium watch for men.',
        availability: 'In Stock',
        totalReviews: 200,
        similarProducts: []
    },
    {
        id: 4,
        title: 'Fresh Vegetables Pack',
        brand: 'Farm Fresh',
        price: 400,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png',
        rating: 4.1,
        category: '4',
        description: 'Freshly picked vegetables.',
        availability: 'In Stock',
        totalReviews: 50,
        similarProducts: []
    },
    {
        id: 5,
        title: 'Teddy Bear',
        brand: 'Toy Story',
        price: 1200,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png',
        rating: 4.6,
        category: '5',
        description: 'Soft and cuddly teddy bear.',
        availability: 'In Stock',
        totalReviews: 150,
        similarProducts: []
    }
]

export const primeDeals: Product[] = [
    {
        id: 3,
        title: 'Exclusive Watch',
        brand: 'Fossil',
        price: 12000,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png',
        rating: 4.8,
    },
]

export const getProductsData = async (searchParams?: { sort_by?: string; category?: string; title_search?: string; rating?: string }) => {
    // Simulate delay to show loading state if needed, but for optimization we keep it fast
    // await new Promise(resolve => setTimeout(resolve, 500)) 

    let filteredProducts = [...products]

    if (searchParams) {
        if (searchParams.category) {
            filteredProducts = filteredProducts.filter(p => p.category === searchParams.category)
        }

        if (searchParams.title_search) {
            filteredProducts = filteredProducts.filter(p =>
                p.title.toLowerCase().includes(searchParams.title_search!.toLowerCase())
            )
        }

        if (searchParams.rating) {
            filteredProducts = filteredProducts.filter(p => p.rating >= parseFloat(searchParams.rating!))
        }

        if (searchParams.sort_by === 'PRICE_HIGH') {
            filteredProducts.sort((a, b) => b.price - a.price)
        } else if (searchParams.sort_by === 'PRICE_LOW') {
            filteredProducts.sort((a, b) => a.price - b.price)
        }
    }

    return filteredProducts
}

export const getProductDetailsData = async (id: string) => {
    const product = products.find(p => p.id === parseInt(id))
    return product || null
}

export const getPrimeDealsData = async () => {
    return primeDeals
}
