'use client';

import Image from 'next/image';
import Table, { HeaderCell } from '@/components/ui/table';
import { Title, Text } from 'rizzui';
import { toCurrency } from '@/utils/to-currency';
import { orderData } from '@/data/order-data';

const columns = [
  {
    title: <HeaderCell title="Produto" />,
    dataIndex: 'product',
    key: 'product',
    width: 250,
    render: (_: any, row: any) => (
      <div className="flex items-center">
        <div className="relative aspect-square w-12 overflow-hidden rounded-lg">
          <Image
            alt={row.name}
            src={row.image}
            fill
            sizes="(max-width: 768px) 100vw"
            className="object-cover"
          />
        </div>
        <div className="ms-4">
          <Title as="h6" className="!text-sm font-medium">
            {row.name}
          </Title>
        </div>
      </div>
    ),
  },
  {
    title: <HeaderCell title="Preço do Produto" align="right" />,
    dataIndex: 'price',
    key: 'price',
    width: 200,
    render: (price: string) => (
      <Text className="text-end text-sm">{toCurrency(price)}</Text>
    ),
  },
  {
    title: <HeaderCell title="Quantidade" align="center" />,
    dataIndex: 'quantity',
    key: 'quantity',
    width: 150,
    render: (quantity: number) => (
      <Text className="text-center text-sm font-semibold">{quantity}</Text>
    ),
  },
  {
    title: <HeaderCell title="Preço" align="right" />,
    dataIndex: 'price',
    key: 'price',
    width: 200,
    render: (price: string, row: any) => (
      <Text className="text-end text-sm">
        {toCurrency(Number(price) * row.quantity)}
      </Text>
    ),
  },
];

export default function OrderViewProducts() {
  // Exemplo: mostra produtos do primeiro pedido
  const order = orderData[0];
  const items = order ? order.products : [];

  return (
    <Table
      data={items}
      // @ts-ignore
      columns={columns}
      className="text-sm"
      variant="minimal"
      rowKey={(record) => record.id}
      scroll={{ x: 800 }}
    />
  );
}
