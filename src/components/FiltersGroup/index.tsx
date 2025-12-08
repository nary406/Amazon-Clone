'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import Image from 'next/image'

const categoryOptions = [
    { categoryId: '1', name: 'Clothing' },
    { categoryId: '2', name: 'Electronics' },
    { categoryId: '3', name: 'Appliances' },
    { categoryId: '4', name: 'Grocery' },
    { categoryId: '5', name: 'Toys' },
]

const ratingsList = [
    { ratingId: '4', imageUrl: 'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png' },
    { ratingId: '3', imageUrl: 'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png' },
    { ratingId: '2', imageUrl: 'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png' },
    { ratingId: '1', imageUrl: 'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png' },
]

const FiltersGroup = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const activeCategory = searchParams.get('category') || ''
    const activeRating = searchParams.get('rating') || ''

    const onChangeCategory = (categoryId: string) => {
        const params = new URLSearchParams(searchParams.toString())
        if (categoryId === activeCategory) {
            params.delete('category')
        } else {
            params.set('category', categoryId)
        }
        router.push(`${pathname}?${params.toString()}`)
    }

    const onChangeRating = (ratingId: string) => {
        const params = new URLSearchParams(searchParams.toString())
        if (ratingId === activeRating) {
            params.delete('rating')
        } else {
            params.set('rating', ratingId)
        }
        router.push(`${pathname}?${params.toString()}`)
    }

    const clearFilters = () => {
        const params = new URLSearchParams(searchParams.toString())
        params.delete('category')
        params.delete('rating')
        params.delete('title_search')
        router.push(`${pathname}?${params.toString()}`)
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6 h-fit sticky top-20">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-text-primary">Filters</h2>
                <button
                    onClick={clearFilters}
                    className="text-sm text-primary hover:text-primary-dark font-semibold"
                >
                    Clear All
                </button>
            </div>

            <div className="mb-8">
                <h3 className="text-sm font-bold text-text-secondary mb-4 uppercase tracking-wide">
                    Category
                </h3>
                <ul className="space-y-3">
                    {categoryOptions.map(category => (
                        <li key={category.categoryId}>
                            <button
                                type="button"
                                onClick={() => onChangeCategory(category.categoryId)}
                                className={`w-full text-left px-3 py-2 rounded transition-colors ${activeCategory === category.categoryId
                                        ? 'bg-primary text-white font-semibold'
                                        : 'text-text-secondary hover:bg-gray-100'
                                    }`}
                            >
                                {category.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-sm font-bold text-text-secondary mb-4 uppercase tracking-wide">
                    Rating
                </h3>
                <ul className="space-y-3">
                    {ratingsList.map(rating => (
                        <li key={rating.ratingId}>
                            <button
                                type="button"
                                onClick={() => onChangeRating(rating.ratingId)}
                                className={`w-full flex items-center gap-2 px-3 py-2 rounded transition-colors ${activeRating === rating.ratingId
                                        ? 'bg-primary/10 border-2 border-primary'
                                        : 'hover:bg-gray-100'
                                    }`}
                            >
                                <Image
                                    src={rating.imageUrl}
                                    alt={`${rating.ratingId} stars and up`}
                                    width={80}
                                    height={20}
                                    className="h-5 w-auto"
                                />
                                <span className="text-sm text-text-secondary">&amp; up</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FiltersGroup
