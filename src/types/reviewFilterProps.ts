export interface ReviewFiltersProps {
  categories: { _id: string; name: string; [key: string]: unknown }[];
  selectedCategory?: string;
  selectedRating?: string;
  selectedSort?: string;
}