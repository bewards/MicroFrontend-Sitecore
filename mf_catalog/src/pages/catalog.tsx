import FeaturedProductsByCategoryCTA from '@/components/FeaturedProductsByCategoryCTA';
import ProductListing from '@/components/ProductListing';
// import SitecoreLayout, { getServerSideProps as sitecoreGetServerSideProps } from "mf_marketing/Layout";

function Page(props: any) {
  console.log('Catalog page props:', props);
  return (
    <>
      {/* <SitecoreLayout {...props}> */}
      <FeaturedProductsByCategoryCTA
        ctaCategories={[
          { categoryId: '1', categoryLabel: 'Eyeglasses' },
          { categoryId: '2', categoryLabel: 'Sunglasses' },
          { categoryId: '3', categoryLabel: 'Contacts' },
        ]}
        saveIcon="/catalog/icons/heart-svgrepo-com.svg"
        plusIcon="/catalog/icons/plus-svgrepo-com.svg"
      />
      <ProductListing />
      {/* </SitecoreLayout> */}
    </>
  );
}

const getServerSideProps = async (context: any) => {
  // console.log("getServerSideProps context:", context);
  // console.log("context.resolvedUrl", context.resolvedUrl);

  // If the route is not a dynamic route, we need to add the path to the params object
  // Sitecore relies on the path being in the context.params object
  if (!context.params) {
    context.params = { path: context.resolvedUrl };
  }

  // Call the Sitecore getServerSideProps function to fetch the necessary data back to the route
  // const props = await sitecoreGetServerSideProps(context);
  return {
    props: {},
    // ...props,
  };
};

export { getServerSideProps };

export default Page;
