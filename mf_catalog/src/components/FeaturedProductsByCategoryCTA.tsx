import { withPublicUrl } from '@/lib/url-helper';
import { useFavoritesStore } from '@/store/favorites';
import { Product } from '@/types/product';
import { useI18n } from 'next-localization';
import React, { PropsWithChildren, useState } from 'react';

type FeaturedProductByCategoryCTAProps = PropsWithChildren & {
  ctaCategories: ProductCategory[];

  // passed in from Sitecore wrapper component for editability
  saveIcon?: React.ReactNode;
  plusIcon?: React.ReactNode;

  optionalHeader?: string;
};

type ProductCategory = {
  categoryId: string;
  categoryLabel: string;
};

const featuredProductsByCategory: Product[] = [
  {
    id: 101,
    categoryId: '1',
    name: 'Eyeglasses Product 1',
    brand: 'Brand A',
    priceLineThrough: '$100.00',
    price: '$80.00',
    image: '/catalog/product-5.webp',
    detailPageUrl: '/product/7703-bravo-16-54-silk-stream-viewers',
  },
  {
    id: 102,
    categoryId: '1',
    name: 'Eyeglasses Product 2',
    brand: 'Brand B',
    priceLineThrough: '$200.00',
    price: '$150.00',
    image: '/catalog/product-2.webp',
  },
  {
    id: 103,
    categoryId: '1',
    name: 'Eyeglasses Product 3',
    brand: 'Brand C',
    priceLineThrough: '$300.00',
    price: '$250.00',
    image: '/catalog/product-5.webp',
  },

  {
    id: 201,
    categoryId: '2',
    name: 'Sunglasses Product 1',
    brand: 'Brand D',
    priceLineThrough: '$120.00',
    price: '$90.00',
    image: '/catalog/product-3.webp',
  },
  {
    id: 202,
    categoryId: '2',
    name: 'Sunglasses Product 2',
    brand: 'Brand E',
    priceLineThrough: '$220.00',
    price: '$170.00',
    image: '/catalog/product-4.webp',
  },
  {
    id: 203,
    categoryId: '2',
    name: 'Sunglasses Product 3',
    brand: 'Brand F',
    priceLineThrough: '$320.00',
    price: '$270.00',
    image: '/catalog/product-3.webp',
  },

  {
    id: 301,
    categoryId: '3',
    name: 'Contacts Product 1',
    brand: 'Brand D',
    image: '/catalog/product-contacts-misight.webp',
  },
  {
    id: 302,
    categoryId: '3',
    name: 'Contacts Product 2',
    brand: 'Brand E',
    image: '/catalog/product-contacts-misight.webp',
  },
  {
    id: 303,
    categoryId: '3',
    name: 'Contacts Product 3',
    brand: 'Brand F',
    image: '/catalog/product-contacts-misight.webp',
  },
];

const FeaturedProductsByCategoryCTA: React.FC<FeaturedProductByCategoryCTAProps> = (props) => {
  const { ctaCategories, plusIcon, saveIcon, children } = props;
  const { t } = useI18n() || { t: (key: string) => key };
  if (!ctaCategories) {
    return <></>;
  }
  const bottomButtonLabel = t('FeaturedProductsByCategoryCTA.BottomButtonLabel') || 'Shop Now';

  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

  const toggleFavorite = (product: Product) => {
    if (isFavorite(product.id)) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  // STATE
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(ctaCategories[0]);

  // EVENTS
  const selectProductCategory = (category: ProductCategory) => {
    setSelectedCategory(category);
  };
  return (
    <div className="container mx-auto py-4 mt-4 outline-4 outline-offset-[-4px] outline-yellow-500">
      <div className="productCTA__header text-center mb-4">
        <h2 className="text-2xl font-bold">
          {props.optionalHeader || 'Featured Products By Category CTA'}
        </h2>
      </div>
      <div className="productCTA__selection">
        <div className="container mx-auto py-4">
          <div className="productCTA__selection">
            <div className="inline-flex space-x-2 rounded-lg bg-gray-200 p-2">
              {ctaCategories.map((category, key) => (
                <button
                  key={category.categoryId}
                  onClick={() => selectProductCategory(category)}
                  className={`px-4 py-2 rounded-lg ${
                    selectedCategory.categoryId === category.categoryId
                      ? 'bg-white text-black'
                      : 'bg-gray-300 text-gray-700'
                  }`}
                >
                  {category.categoryLabel}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="productCTA__categoryProducts">
        <div className="container mx-auto py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredProductsByCategory
              .filter((product) => product.categoryId === selectedCategory.categoryId)
              .map((product) => (
                <div key={product.id} className="bg-white p-4 rounded-md shadow-md">
                  <div className="productCTA__item__imgWrap relative">
                    <img
                      src={withPublicUrl(product.image)}
                      alt={product.name}
                      className="w-full h-auto mb-4"
                    />
                    <div className="productCTA__imgActions absolute right-1 bottom-1">
                      {saveIcon && (
                        <button
                          className={`productCTA__save rounded-full border p-1 hover:border-gray-600 ${
                            isFavorite(product.id)
                              ? 'border-red-500 bg-red-100'
                              : 'border-gray-400 bg-white'
                          }`}
                          onClick={() => toggleFavorite(product)}
                        >
                          {typeof saveIcon === 'string' ? (
                            <img
                              src={saveIcon}
                              alt="Save"
                              className={`w-4 h-4`}
                              style={{
                                filter: isFavorite(product.id)
                                  ? 'invert(27%) sepia(94%) saturate(747%) hue-rotate(340deg) brightness(91%) contrast(88%)'
                                  : 'none',
                              }}
                            />
                          ) : (
                            saveIcon
                          )}
                        </button>
                      )}
                      {plusIcon && (
                        <button className="productCTA__plus rounded-full border border-gray-400 bg-white p-1 hover:border-gray-600 ms-1">
                          {typeof plusIcon === 'string' ? (
                            <img src={plusIcon} alt="Plus" className="w-4 h-4" />
                          ) : (
                            plusIcon
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      {product.detailPageUrl ? (
                        <a href={product.detailPageUrl} className="text-blue-500 hover:underline">
                          <h3 className="text-lg font-semibold">{product.name}</h3>
                        </a>
                      ) : (
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                      )}
                      <p className="text-gray-500">{product.brand}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-red-500 line-through">{product.priceLineThrough}</p>
                      <p className="text-green-500 font-bold">{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="productCTA__bottomAction text-center">
        <button className="border border-orange-500 bg-white text-orange-500 font-semibold px-4 py-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors cursor-pointer w-3/7">
          {bottomButtonLabel}
        </button>
      </div>
      {children}
    </div>
  );
};

export default FeaturedProductsByCategoryCTA;
