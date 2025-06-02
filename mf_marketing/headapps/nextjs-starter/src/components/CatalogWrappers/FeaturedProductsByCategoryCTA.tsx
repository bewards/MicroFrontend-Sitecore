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
          <section className="mt-2">
            <i>
              This Sitecore component acts as a wrapper around the mf_catalog component, passing
              through Sitecore Datasource content to the federated module, such as the save icon as
              a ReactNode for editability.
            </i>
            {datasource.testTitle?.jsonValue && (
              <p className="test-title">
                <strong>Datasource field language test:</strong>
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
