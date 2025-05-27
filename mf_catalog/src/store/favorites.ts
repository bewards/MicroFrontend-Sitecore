import { Product } from '@/types/product';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type FavoritesState = {
  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
};

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (product) =>
        set((state) => ({
          favorites: [...state.favorites, product],
        })),
      removeFavorite: (productId) =>
        set((state) => ({
          favorites: state.favorites.filter((product) => product.id !== productId),
        })),
      isFavorite: (productId) => get().favorites.some((product) => product.id === productId),
    }),
    {
      name: 'favorites-storage', // Key for localStorage
      partialize: (state) => ({ favorites: state.favorites }), // Only persist the favorites array
    }
  )
);
