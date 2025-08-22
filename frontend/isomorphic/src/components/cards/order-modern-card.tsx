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
import { Order } from '@/types';



interface OrderProps {
  order: Order;
  className?: string;
}

export default function OrderModernCard({
  order,
  className,
}:  OrderProps) {
  const {
    id,
    name,
    email,
    avatar,
    items,
    price,
    status,
    products = [],
     } = order;

  // Funções para tratar aceitação/rejeição (opcional)
  const handleAccept = () => {
    // lógica para aceitar pedido
    console.log('Pedido aceito:', order.id);
  };

   const handleBoth = () => {
    // lógica para aceitar pedido
    console.log('Pedido concluído:', order.id);
  };

  const handleReject = () => {
    // lógica para rejeitar pedido
    console.log('Pedido rejeitado:', order.id);
  };

  return (
    <div className={cn(className)}>
      <div className="relative">
        
        <span className="absolute end-3 top-3">Pedido:#{id}</span>

      </div>
      <div className={`pt-3 ${status}`}>
       
        <Link
          href={routes.eCommerce.orderDetails(
            String(id ?? generateSlug(name))
          )}
        >
            <div className="relative aspect-square h-16 w-16 shrink-0 @5xl:h-20 @5xl:w-20">
                       <Image
                         fill
                         alt="avatar"
                         className="inline-block size-8 rounded-full"
                         sizes="(max-width: 400px) 100vw"
                         src={avatar}
                       />
                     </div>
          <Title
            as="h6"
            className="mb-1 truncate font-semibold transition-colors hover:text-orange-100"
          >
          {name}
        </Title>
        </Link>
          
        <div className="relative mx-auto aspect-[4/5.06] w-full overflow-hidden rounded-lg bg-gray-100">
          <Image
            alt='padrao'
            src='https://receitadaboa.com.br/wp-content/uploads/2024/07/iStock-926778778.jpg'
            fill
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw"
            className="h-full w-full object-cover"
          />
        </div>
     <div className="mt-2 flex items-center font-semibold text-gray-900">
        <Text as="p" className=""> 
     <div><span className="mr-2 justify-items-end"> TOTAL DO PEDIDO: {toCurrency(price)}</span> <br /></div>
          {products.map((product) => (
            <span key={product.id} className="mr-2">    
        
              * {product.name} - {product.category}<br />
              
            </span>
            ))}         
          
        </Text>

    
        
    
        </div>
          
       {status === 'novo' && (
                 <StatusButtons onAccept={handleAccept} onReject={handleReject} />
            )}
            {status === 'andamento' && (
              
              <StatusButtons onBoth={handleBoth} />
              
            )}
            {status === 'pronto' && (
              
              <StatusButtons onReject={handleReject} />
              
            )}
      </div>
      
    </div>
  );
}