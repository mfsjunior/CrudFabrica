'use client';
import Link from 'next/link';
import Image from 'next/image';
import { routes } from '@/config/routes';
import { Title, Text } from 'rizzui';
import cn from '@/utils/class-names';
import WishlistButton from '@/components/wishlist-button';
import { generateSlug } from '@/utils/generate-slug';
import ColorSwatch from '@/utils/color-swatch';
import {StatusButtons} from '@/utils/button-status';
import { Product } from '@/types';
import { toCurrency } from '@/utils/to-currency';


interface ProductProps {
  product: Product;
  className?: string;
}

export default function ProductModernCard({
  product,
  className,
}: ProductProps) {
  const {
    id,
    title,
    thumbnail,
    slug,
    description,
    price,
    sale_price,
    colors = [],
    estatus,
     } = product;

  // Funções para tratar aceitação/rejeição (opcional)
  const handleAccept = () => {
    // lógica para aceitar pedido
    console.log('Pedido aceito:', product.id);
  };

   const handleBoth = () => {
    // lógica para aceitar pedido
    console.log('Pedido concluído:', product.id);
  };

  const handleReject = () => {
    // lógica para rejeitar pedido
    console.log('Pedido rejeitado:', product.id);
  };

  return (
    <div className={cn(className)}>
      <div className="relative">
        
        <span className="absolute end-3 top-3">Pedido:#{id}</span>

      </div>
      <div className={`pt-3 ${estatus}`}>
       
        <Link
          href={routes.eCommerce.productDetails(
            String(slug ?? generateSlug(title))
          )}
        >
          <Title
            as="h6"
            className="mb-1 truncate font-semibold transition-colors hover:text-primary"
          >
           {title}
          </Title>
        </Link>
          
        <div className="relative mx-auto aspect-[4/5.06] w-full overflow-hidden rounded-lg bg-gray-100">
          <Image
            alt={title}
            src={thumbnail}
            fill
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw"
            className="h-full w-full object-cover"
          />
        </div>
     <div className="mt-2 flex items-center font-semibold text-gray-900">
        <Text as="p" className="">
          {description}
          
        </Text>
       
        
    
        </div>
          
       {estatus === 'novo' && (
                 <StatusButtons onAccept={handleAccept} onReject={handleReject} />
            )}
            {estatus === 'andamento' && (
              
              <StatusButtons onBoth={handleBoth} />
              
            )}
            {estatus === 'pronto' && (
              
              <StatusButtons onReject={handleReject} />
              
            )}
      </div>
      
    </div>
  );
}


