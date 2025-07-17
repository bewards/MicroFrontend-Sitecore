import { Image, ImageField, Text, TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import CTALoader from 'components/Loaders/CTALoader';
import { lazy, Suspense } from 'react';

type FeaturedProductsByCategoryProps = {
  fields: {
    data: {
      datasource: {
        ctaCategories: {
          targetItems: ProductCategoryItem[];
        };
        saveIcon?: {
          jsonValue: ImageField;
        };
        plusIcon?: {
          jsonValue: ImageField;
        };
        testTitle?: {
          jsonValue: TextField;
        };
      };
    };
  };
};

type ProductCategoryItem = {
  categoryId: {
    jsonValue: TextField;
  };
  categoryLabel: {
    jsonValue: TextField;
  };
};

const MF_FeaturedProductsByCategoryCTA = lazy(
  () => import('mf_catalog/FeaturedProductsByCategoryCTA')
);

const FeaturedProductsByCategoryCTA: React.FC<FeaturedProductsByCategoryProps> = (props) => {
  if (!props.fields?.data?.datasource) {
    return null;
  }
  const { datasource } = props.fields.data;
  return (
    <>
      <Suspense fallback={<CTALoader />}>
        <MF_FeaturedProductsByCategoryCTA
          ctaCategories={datasource.ctaCategories?.targetItems.map((item) => ({
            categoryId: item.categoryId.jsonValue.value as string,
            categoryLabel: item.categoryLabel.jsonValue.value as string,
          }))}
          saveIcon={<Image field={datasource.saveIcon?.jsonValue} className="save-icon" />}
          plusIcon={<Image field={datasource.plusIcon?.jsonValue} className="plus-icon" />}
        >
          <section className="p-4 mt-2 outline-2 outline-offset-[-4px] outline-red-500">
            <p>
              This content comes from the Sitecore wrapper component that renders the Remote{' '}
              <code>mf_catalog</code> component, passing through Sitecore Datasource content to the
              federated module, such as the save icon as a ReactNode for editability.
            </p>
            {datasource.testTitle?.jsonValue && (
              <p className="test-title">
                <span className="text-blue-500 font-semibold">
                  Datasource field <code>&quot;testTitle&quot;</code> value by language:{' '}
                </span>
                <Text field={datasource.testTitle.jsonValue} />
              </p>
            )}
          </section>
        </MF_FeaturedProductsByCategoryCTA>
      </Suspense>
    </>
  );
};

export default FeaturedProductsByCategoryCTA;
