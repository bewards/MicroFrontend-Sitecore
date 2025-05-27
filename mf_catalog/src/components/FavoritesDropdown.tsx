import React, { useState } from 'react';
import { useFavoritesStore } from '@/store/favorites';
import 'tailwindcss/index.css';
import { withPublicUrl } from '@/lib/url-helper';

const FavoritesDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { favorites } = useFavoritesStore();

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="relative px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 outline-4 outline-offset-[-4px] outline-red-500"
      >
        Favorites ({favorites.length})
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded shadow-lg">
          {favorites.length > 0 ? (
            <ul className="p-2">
              {favorites.map((product) => (
                <li
                  key={product.id}
                  className="flex items-center gap-2 p-2 border-b last:border-b-0"
                >
                  <img
                    src={withPublicUrl(product.image)}
                    alt={product.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm font-semibold">{product.name}</p>
                    <p className="text-xs text-gray-500">{product.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="p-4 text-sm text-gray-500">No favorites yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FavoritesDropdown;
