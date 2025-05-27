import {
  DictionaryPhrases,
  ComponentPropsCollection,
  LayoutServiceData,
  SiteInfo,
  HTMLLink,
} from '@sitecore-jss/sitecore-jss-nextjs';

/**
 * Sitecore page props
 */
export type SitecorePageProps = {
  site: SiteInfo;
  locale: string;
  dictionary: DictionaryPhrases;
  componentProps: ComponentPropsCollection;
  notFound: boolean;
  layoutData: LayoutServiceData;
  headLinks: HTMLLink[];

  // custom
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chunks: any;
};
