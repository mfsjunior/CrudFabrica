'use client';

import WidgetCard from '@/components/cards/widget-card';
import { Title, Text, Badge } from 'rizzui';
import cn from '@/utils/class-names';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useMedia } from '@/hooks/use-media';
import { CustomTooltip } from '@/components/charts/custom-tooltip';
import TrendingUpIcon from '@/components/icons/trending-up';
import SimpleBar from '@/components/ui/simplebar';

const data = [
  {
    month: 'Jan',
    coxinha: 5780,
    refrigerantes: 1908,
    salgados: 7208,
    sucos: 2780,
  },
  {
    month: 'Feb',
    coxinha: 8500,
    refrigerantes: 1908,
    salgados: 7208,
    sucos: 2780,
  },
  {
    month: 'Mar',
      coxinha: 3000,
    refrigerantes: 1908,
    salgados: 7208,
    sucos: 2780,
  },
  {
    month: 'Apr',
      coxinha: 5780,
    refrigerantes: 1908,
    salgados: 7208,
    sucos: 2780,
  },
  {
    month: 'May',
    coxinha: 5780,
    refrigerantes: 1908,
    salgados: 7208,
    sucos: 2780,
  },
  {
    month: 'Jun',
    coxinha: 5780,
    refrigerantes: 1908,
    salgados: 7208,
    sucos: 2780,
  },
  {
    month: 'Jul',
    coxinha: 5780,
    refrigerantes: 1908,
    salgados: 7208,
    sucos: 2780,
  },
  {
    month: 'Aug',
     coxinha: 5780,
    refrigerantes: 1908,
    salgados: 7208,
    sucos: 2780,
  },
  {
    month: 'Sep',
      coxinha: 5780,
    refrigerantes: 1908,
    salgados: 7208,
    sucos: 2780,
  },
  {
    month: 'Oct',
    coxinha: 5780,
    refrigerantes: 1908,
    salgados: 7208,
    sucos: 2780,
  },
  {
    month: 'Nov',
    coxinha: 4780,
    refrigerantes: 1920,
    salgados: 2930,
    sucos: 1500,
  },
  {
    month: 'Dec',
    coxinha: 7500,
    refrigerantes: 3000,
    salgados: 9000,
    sucos: 1700,
  },
];

function CustomYAxisTick({ x, y, payload }: any) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" className="fill-gray-500">
        {`${payload.value.toLocaleString()}`} Un
      </text>
    </g>
  );
}

export default function StorageReport({ className }: { className?: string }) {
  const isMobile = useMedia('(max-width: 768px)', false);
  const isDesktop = useMedia('(max-width: 1440px)', false);
  const is2xl = useMedia('(max-width: 1780px)', false);
  const isTablet = useMedia('(max-width: 800px)', false);

  return (
    <WidgetCard
      title={'Total de vendas no mês'}
      titleClassName="font-normal text-gray-700 sm:text-base font-inter"
      description={
        <div className="flex items-center justify-start">
          <Title as="h2" className="me-2 font-semibold">
            105,000 UN
          </Title>
          <Text className="flex items-center leading-none text-gray-500">
            <Text
              as="span"
              className={cn(
                'me-2 inline-flex items-center font-medium text-green'
              )}
            >
              <TrendingUpIcon className="me-1 h-4 w-4" />
              32.40%
            </Text>
            no último ano
          </Text>
        </div>
      }
      descriptionClassName="text-gray-500 mt-1.5"
      action={
        <div className="hidden @2xl:block">
          <Badge renderAsDot className="me-0.5 bg-[#282ECA]" /> coxinhas
          <Badge renderAsDot className="me-0.5 ms-4 bg-[#4052F6]" /> salgados
          <Badge renderAsDot className="me-0.5 ms-4 bg-[#96C0FF]" /> refrigerantes
          <Badge
            renderAsDot
            className="me-0.5 ms-4 bg-[#DEEAFC] dark:bg-[#7c88b2]"
          />{' '}
          sucos
        </div>
      }
      className={className}
    >
      <SimpleBar>
        <div className="h-96 w-full pt-9">
          <ResponsiveContainer
            width="100%"
            height="100%"
            {...(isTablet && { minWidth: '700px' })}
          >
            <BarChart
              data={data}
              barSize={isMobile ? 16 : isDesktop ? 28 : is2xl ? 32 : 46}
              margin={{
                left: 16,
              }}
              className="[&_.recharts-tooltip-cursor]:fill-opacity-20 dark:[&_.recharts-tooltip-cursor]:fill-opacity-10 [&_.recharts-cartesian-axis-tick-value]:fill-gray-500 [&_.recharts-cartesian-axis.yAxis]:-translate-y-3 rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12 [&_.recharts-cartesian-grid-vertical]:opacity-0"
            >
              <CartesianGrid strokeDasharray="8 10" strokeOpacity={0.435} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={<CustomYAxisTick />}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="coxinha" fill="#282ECA" stackId="a" />
              <Bar dataKey="salgado" stackId="a" fill="#4052F6" />
              <Bar dataKey="refrigerantes" stackId="a" fill="#96C0FF" />
              <Bar dataKey="sucos" stackId="a" fill="#DEEAFC" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </SimpleBar>
    </WidgetCard>
  );
}
