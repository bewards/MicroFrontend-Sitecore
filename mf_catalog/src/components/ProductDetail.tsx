import { Product } from '@/types/product';
import { useI18n } from 'next-localization';
import React, { FC, PropsWithChildren } from 'react';

export interface ProductDetailProps extends PropsWithChildren, Product {}

const ProductDetail: FC<ProductDetailProps> = (props) => {
  const { children, price, description } = props;
  const { t } = useI18n() || { t: (key: string) => key };

  return (
    <div className="container mx-auto p-4 outline-4 outline-offset-[-4px] outline-yellow-500">
      <div className="flex flex-col md:flex-row gap-4">
        {/* 60% Column */}
        <div className="md:w-3/5">
          <img src="https://i.imgur.com/13B3uJM.png" alt="Sitecore Streamer Sunglasses" className="mx-auto w-auto h-[500px]" />
          <h2 className="text-xl font-semibold mb-2">
            {t('ProductDetail.DescriptionLabel') || 'Description'}
          </h2>
          <p className="mb-4">LEO-16-54</p>
          <p>{description}</p>
          <h2 className="text-xl font-semibold mb-2">Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="flex items-center gap-4">
                <img src="https://placehold.co/60x60" alt="Detail" className="w-16 h-16" />
                <p className="flex-1">Random product detail {index + 1}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 40% Column */}
        <div className="md:w-2/5">
          <h1 className="text-2xl font-bold mb-4">Sitecore Silk Stream Viewers</h1>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gray-500 line-through">$169.99</span>
            <span className="text-red-500 font-bold">{price || 'Price not available'}</span>
          </div>
          <div className="flex gap-4">
            <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center">
              <span className="w-6 h-6 bg-brown-500 rounded-full"></span>
            </button>
            <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center">
              <span className="w-6 h-6 bg-orange-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ProductDetail;
