'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'

const sortbyOptions = [
    {
        optionId: 'PRICE_HIGH',
        displayText: 'Price (High-Low)',
    },
    {
        optionId: 'PRICE_LOW',
        displayText: 'Price (Low-High)',
    },
]

const ProductsHeader = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const activeSortby = searchParams.get('sort_by') || 'PRICE_HIGH'

    const onChangeSortby = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('sort_by', event.target.value)
        router.push(`${pathname}?${params.toString()}`)
    }

    return (
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-border">
            <h1 className="text-2xl font-bold text-text-primary">All Products</h1>
            <div className="flex items-center gap-3">
                <label htmlFor="sortby" className="text-sm font-semibold text-text-secondary">
                    Sort by:
                </label>
                <select
                    id="sortby"
                    className="px-4 py-2 border border-border rounded bg-white text-text-primary focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                    value={activeSortby}
                    onChange={onChangeSortby}
                >
                    {sortbyOptions.map(eachOption => (
                        <option key={eachOption.optionId} value={eachOption.optionId}>
                            {eachOption.displayText}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default ProductsHeader
