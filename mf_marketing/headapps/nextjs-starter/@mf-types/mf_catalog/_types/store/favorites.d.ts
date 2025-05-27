import { Product } from '@/types/product';
type FavoritesState = {
    favorites: Product[];
    addFavorite: (product: Product) => void;
    removeFavorite: (productId: number) => void;
    isFavorite: (productId: number) => boolean;
};
export declare const useFavoritesStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<FavoritesState>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<FavoritesState, {
            favorites: Product[];
        }>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: FavoritesState) => void) => () => void;
        onFinishHydration: (fn: (state: FavoritesState) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<FavoritesState, {
            favorites: Product[];
        }>>;
    };
}>;
export {};
