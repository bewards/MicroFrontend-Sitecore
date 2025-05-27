import { ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

export type HeaderProps = ComponentProps & {
  fields: {
    data: {
      item: HeaderFields;
    };
  };
};
type HeaderFields = {
  logo: {
    jsonValue: ImageField;
  };
  logoLink: {
    jsonValue: LinkField;
  };
  children: {
    results: ChildLink[];
  };
};

type ChildLink = {
  childLink: {
    jsonValue: LinkField;
  };
};
