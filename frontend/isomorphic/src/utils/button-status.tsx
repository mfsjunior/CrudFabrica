'use client';

import { useState } from 'react';
import cn from '@/utils/class-names';
import { ProductColor } from '@/types';


interface StatusButtonProps {
  onAccept?: () => void;
  onReject?: () => void;
  onBoth?: () => void;
}

export function StatusButtons({ onAccept, onReject, onBoth }: StatusButtonProps) {
  const [active, setActive] = useState<'accepted' | 'rejected' | 'both' | null>(null);

  return (
    <div className="flex gap-4 pt-2">
      {onAccept && (
        <button
          className={`px-4 py-2 rounded bg-green-500 text-white hover:bg-green-200 ${active === 'accepted' ? 'ring-2 ring-green-700 ' : ''}`}
          onClick={() => {
            setActive('accepted');
            onAccept();
          }}
        >
          Aceitar
        </button>
      )}
      {onReject && (
        <button
          className={`px-4 py-2 rounded bg-red-500 text-white hover:bg-red-200 ${active === 'rejected' ? 'ring-2 ring-red-700 ' : ''}`}
          onClick={() => {
            setActive('rejected');
            onReject();
          }}
        >
          Rejeitar
        </button>
      )}
      {onBoth && (
        <button
          className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-sky-700 ${active === 'both' ? 'ring-2 ring-blue-700 hover:bg-sky-700' : ''}`}
          onClick={() => {
            setActive('both');
            onBoth();
          }}
        >
          ENTREGAR
        </button>
      )}
    </div>
  );
}
