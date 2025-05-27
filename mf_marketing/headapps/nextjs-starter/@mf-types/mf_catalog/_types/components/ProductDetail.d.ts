import { Product } from '@/types/product';
import { FC, PropsWithChildren } from 'react';
export interface ProductDetailProps extends PropsWithChildren, Product {
}
declare const ProductDetail: FC<ProductDetailProps>;
export default ProductDetail;
