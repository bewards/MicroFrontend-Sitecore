import Link from 'next/link';
import { HeaderProps } from './Header.types';
import { useI18n } from 'next-localization';
import 'tailwindcss/index.css';

// CSS module styles
import classnames from 'classnames/bind';
import styles from './Header.module.scss';
import React, { useEffect } from 'react';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { useRouter } from 'next/router';
const cx = classnames.bind(styles);

const FavoritesDropdown = React.lazy(() => import('mf_catalog/FavoritesDropdown'));

const Header = (props: HeaderProps): JSX.Element => {
  // console.log('Header props:', props);
  const { t } = useI18n() || {};
  const router = useRouter();
  const { sitecoreContext } = useSitecoreContext();
  const currentLang = sitecoreContext.language || router.locale;
  const labelSelectStore = (t && t('CatalogSelectStore')) || 'Select Store';

  useEffect(() => {
    // Log the current language to the console
    console.log('Current language:', currentLang);
  }, [currentLang]);

  const {
    fields: {
      data: {
        item: { logo, logoLink, children },
      },
    },
  } = props;

  return (
    <header className={cx('header', 'outline-4 outline-offset-[-4px] outline-red-500')}>
      <div className="container flex items-center justify-between">
        <div className={cx('header__logo')}>
          <Link
            href={logoLink.jsonValue.value.href || '/'}
            className={logoLink.jsonValue.value.className}
          >
            <img src={logo.jsonValue.value?.src} alt="Logo" />
          </Link>
        </div>
        <nav className={cx('header__nav')}>
          <ul>
            {children.results.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.childLink.jsonValue.value.href || '/'}
                  className={link.childLink.jsonValue.value.className}
                >
                  {link.childLink.jsonValue.value.text}
                </Link>
              </li>
            ))}
            <li>
              <Link href={'/catalog'}>{t('CatalogMainNavLink') || 'Catalog'}</Link>
            </li>
            <li>
              <Link href={'/select-store'}>{labelSelectStore}</Link>
            </li>
            <li>
              <FavoritesDropdown />
            </li>
            <li>
              <Link href={router.asPath} locale={currentLang === 'en' ? 'es-ES' : 'en'}>
                {currentLang === 'en' ? 'Español' : 'English'}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
