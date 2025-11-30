import { Category } from '@/src/types/CategoryType';
import { getCategories } from '@/src/lib/api';
import FilterSidebarClient from './FilterSidebarClient';

const FilterSidebar = async () => {
  const categories: Category[] = await getCategories();

  return <FilterSidebarClient categories={categories} />;
};

export default FilterSidebar;
