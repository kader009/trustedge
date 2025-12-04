import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IProduct {
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  ratings: number;
}

const initialState: IProduct = {
  title: '',
  description: '',
  price: 0,
  category: '',
  images: [],
  ratings: 0,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setImages: (state, action: PayloadAction<string[]>) => {
      state.images = action.payload;
    },
    setRatings: (state, action: PayloadAction<number>) => {
      state.ratings = action.payload;
    },
  },
});

export const {
  setCategory,
  setTitle,
  setDescription,
  setPrice,
  setImages,
  setRatings,
} = productSlice.actions;

export default productSlice.reducer;
