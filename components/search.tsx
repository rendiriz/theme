'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';

export function Search() {
  const [search, setSearch] = useState('');

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      const url = `https://themeforest.net/user/rendiriz/portfolio?term=${search}`;
      window.open(url, '_blank');
    }
  };

  return (
    <Input
      className="w-full md:w-[500px]"
      placeholder="Search Theme"
      onChange={(event) => {
        setSearch(event.target.value);
      }}
      onKeyDown={handleSearch}
    />
  );
}
