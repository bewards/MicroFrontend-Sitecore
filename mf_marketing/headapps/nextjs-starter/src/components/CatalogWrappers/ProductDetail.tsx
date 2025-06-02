import React, { Suspense } from 'react';
import { GetServerSideComponentProps, TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { PDPService } from 'mf_catalog/PDPService';
import PDPLoader from 'components/Loaders/PDPLoader';

type ProductDetail = {
  propFromComponentServerSideProps: string;
  fields: {
    testTitle?: TextField;
  };
};

const MF_ProductDetail = React.lazy(() => import('mf_catalog/ProductDetail'));

const ProductDetail: React.FC<ProductDetail> = (props) => {
  console.log('ProductDetail props', props);
  if (!props) {
    return <></>;
  }
  return (
    <>
      <Suspense fallback={<PDPLoader />}>
        <MF_ProductDetail {...props}>
          <section className="mt-2">
            <p>Product Detail Children content (from Sitecore)</p>
          </section>
        </MF_ProductDetail>
      </Suspense>
    </>
  );
};

export const getServerSideProps: GetServerSideComponentProps = async (
  rendering,
  layoutData,
  context
) => {
  console.log('ProductDetail getServerSideProps', rendering, layoutData, context);

  // Calling the PDPService.getPDP() method from the mf_catalog module
  const actualRequestPath = (context?.params?.requestPath as string) || '';
  const pdpService = new PDPService(actualRequestPath);
  const pdp = await pdpService.getPDP();

  return { propFromComponentServerSideProps: 'hello there server', ...pdp };
};

export default ProductDetail;
