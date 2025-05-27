import React, { PropsWithChildren } from 'react';
type FeaturedProductByCategoryCTAProps = PropsWithChildren & {
    ctaCategories: ProductCategory[];
    saveIcon?: React.ReactNode;
    plusIcon?: React.ReactNode;
};
type ProductCategory = {
    categoryId: string;
    categoryLabel: string;
};
declare const FeaturedProductsByCategoryCTA: React.FC<FeaturedProductByCategoryCTAProps>;
export default FeaturedProductsByCategoryCTA;
