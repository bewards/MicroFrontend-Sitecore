import { useI18n } from 'next-localization';
import React from 'react';
import { useFavoritesStore } from '@/store/favorites';
import { Product } from '@/types/product';

const products: Product[] = [
  { id: 1, name: 'Product 1', price: '$10', image: '/catalog/product-1.webp' },
  { id: 2, name: 'Product 2', price: '$20', image: '/catalog/product-2.webp' },
  { id: 3, name: 'Product 3', price: '$30', image: '/catalog/product-3.webp' },
  { id: 4, name: 'Product 4', price: '$40', image: '/catalog/product-4.webp' },
  { id: 5, name: 'Product 5', price: '$40', image: '/catalog/product-4.webp' },
  { id: 6, name: 'Product 6', price: '$40', image: '/catalog/product-3.webp' },
  { id: 7, name: 'Product 7', price: '$40', image: '/catalog/product-2.webp' },
  { id: 8, name: 'Product 8', price: '$40', image: '/catalog/product-1.webp' },
  { id: 9, name: 'Product 9', price: '$40', image: '/catalog/product-3.webp' },
  { id: 10, name: 'Product 10', price: '$40', image: '/catalog/product-4.webp' },
  { id: 11, name: 'Product 11', price: '$40', image: '/catalog/product-2.webp' },
];

const ProductListing: React.FC = () => {
  const { t } = useI18n() || { t: (key: string) => key };
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

  const toggleFavorite = (product: Product) => {
    if (isFavorite(product.id)) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  return (
    <div className="container py-4 outline-4 outline-offset-[-4px] outline-red-500">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            <label htmlFor="filter" className="text-sm font-bold text-gray-700 whitespace-nowrap">
              {t('CatalogFilter')}
            </label>
            <select
              id="filter"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option value="all">All</option>
              <option value="price-low">Shape</option>
              <option value="price-high">Color</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow hover:shadow-lg transition">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
              <button
                onClick={() => toggleFavorite(product)}
                className={`mt-2 px-4 py-2 rounded ${
                  isFavorite(product.id) ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                {isFavorite(product.id) ? 'Unfavorite' : 'Favorite'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
