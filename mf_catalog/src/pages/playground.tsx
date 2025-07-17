import Banner from '@/components/Banner';
import Counter from '@/components/Counter';

// Import Sitecore dynamic route "[[...path]].tsx" to use Sitecore's getServerSideProps and Layout!
import SitecoreLayout, {
  getServerSideProps as sitecoreGetServerSideProps,
} from 'mf_marketing/Layout';

function Page(props: any) {
  console.log('Catalog page props:', props);
  return (
    <>
      <SitecoreLayout {...props}>
        
        <Banner />

        <Counter />

      </SitecoreLayout>
    </>
  );
}

//? TODO: This route has to exist in Sitecore as a page, otherwise the sitecoreGetServerSideProps will return us with not found flag!
const getServerSideProps = async (context: any) => {
  // console.log("getServerSideProps context:", context);
  // console.log("context.resolvedUrl", context.resolvedUrl);

  // ! IMPORTANT
  // If the route is not a dynamic route, we need to add the path to the params object
  // Sitecore relies on the path being in the context.params object
  if (!context.params) {
    context.params = { path: context.resolvedUrl };
  }

  // Call the Sitecore getServerSideProps function to fetch the necessary data back to the route
  const props = await sitecoreGetServerSideProps(context);
  return {
    // props: {},
    ...props,
  };
};

export { getServerSideProps };

export default Page;
