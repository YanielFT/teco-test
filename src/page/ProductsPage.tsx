import React, { useEffect } from 'react'
import { ProductCard } from '../components/Products/components/ProductCard'
import { useDispatch } from 'react-redux'
import { startLoadingProducts } from '../store/Products/thunks'
import { AppDispatch } from '../store/store'

export const ProductsPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    console.log("entra");
    useEffect(() => {
        
      dispatch(startLoadingProducts());
    }, []);
  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
    <div className="mx-auto max-w-screen- px-4 2xl:px-0">
    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
    {Array.from({ length: 10 }).map((_, index) => (
    <ProductCard key={index} />
    ))}
    </div>
    </div>
    </section>
  )
}
