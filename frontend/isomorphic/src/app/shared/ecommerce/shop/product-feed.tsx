'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from 'rizzui';
import ProductModernCard from '@/components/cards/product-modern-card';
import { modernProductsGrid } from '@/data/shop-products';
import GenderSpecificFilter from '@/app/shared/ecommerce/shop/shop-filters/gender-specific-filter';
import { orderData } from '@/data/order-data';
import  OrderModernCard  from '@/components/cards/order-modern-card';

const countPerPage = 12;
const initialState = { gender: '' };

export default function ProductFeed() {
  const searchParams = useSearchParams();
  const genderFromUrl = searchParams.get('gender') || '';

  const [isLoading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(countPerPage);
  const [state, setState] = useState({ ...initialState, gender: genderFromUrl });

  // Atualiza o filtro se a URL mudar
  useEffect(() => {
    setState((prev) => ({ ...prev, gender: genderFromUrl }));
    setNextPage(countPerPage);
  }, [genderFromUrl]);

  function handleLoadMore() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setNextPage(nextPage + countPerPage);
    }, 600);
  }

  function applyFilter(query: string, value: any) {
    setState((prev) => ({ ...prev, [query]: value }));
    setNextPage(countPerPage);
    // Opcional: atualizar a URL ao filtrar
    // window.history.replaceState(null, '', `?gender=${value}`);
  }

  const filteredProducts = state.gender
    ? orderData.filter((item) => item.status === state.gender)
    : orderData;

  return (
    <div className="@container">


         <div className="grid grid-cols-1 gap-x-5 gap-y-6 @md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] @xl:gap-x-7 @xl:gap-y-9 @4xl:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] @6xl:grid-cols-[repeat(auto-fill,minmax(364px,1fr))]">
        {filteredProducts
          ?.slice(0, nextPage)
          ?.map((order) => (
            
            <OrderModernCard key={order.id} order={{ ...order, id: Number(order.id) }} />
          ))}
      </div>



      {nextPage < filteredProducts?.length && (
        <div className="mb-4 mt-5 flex flex-col items-center xs:pt-6 sm:pt-8">
          <Button isLoading={isLoading} onClick={handleLoadMore}>
            veja mais 
          </Button>
        </div>
      )}
    </div>
  );
}
