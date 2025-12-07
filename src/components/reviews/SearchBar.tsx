'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useDebouncedCallback } from 'use-debounce';

interface SearchBarProps {
  initialSearch?: string;
}

export default function SearchBar({ initialSearch }: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(initialSearch || '');

  const debouncedSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }

    params.set('page', '1');
    router.push(`/reviews?${params.toString()}`);
  }, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    debouncedSearch(value);
  };

  const handleClear = () => {
    setSearch('');
    const params = new URLSearchParams(searchParams.toString());
    params.delete('search');
    params.set('page', '1');
    router.push(`/reviews?${params.toString()}`);
  };

  return (
    <div className="relative">
      <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search reviews by keyword..."
        className="w-full pl-12 pr-12 py-4 border border-border-light dark:border-border-dark rounded-lg bg-white dark:bg-gray-900 text-text-light dark:text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
      />
      {search && (
        <button
          onClick={handleClear}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          aria-label="Clear search"
        >
          <FaTimes className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
