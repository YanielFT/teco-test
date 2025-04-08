import React, { useEffect } from "react";
import { ProductCard } from "../components/Products/components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingProducts } from "../store/Products/thunks";
import { AppDispatch, RootState } from "../store/store";
import { Loading } from "../components/ui/Loading";
import { SearchInput } from "../components/ui/SearchInput";

export const ProductsPage = () => {
  const { searchQuery } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();
  const { products, filteredProducts, loading, error } = useSelector(
    (state: RootState) => state.products
  );
  const finalProducts =
    searchQuery.trim().length > 0 ? filteredProducts : products;
  console.log(searchQuery);
  console.log({finalProducts});

  useEffect(() => {
    dispatch(startLoadingProducts());
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <section className="bg-inherit py-8 min-w-[95vw] antialiased 
        md:py-12 h-full flex flex-col gap-5 max-w-screen" >
          <div className="px-4 w-full">
            <SearchInput />
          </div>
          <div className="mx-auto  2xl:px-0">
            <div className="mb-4 grid gap-4 sm:grid-cols-2 
            md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
              {!error &&
                finalProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    category={product.category}
                    image={product.image}
                  />
                ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
