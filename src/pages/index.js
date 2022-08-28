import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Clients } from '../components/clients';
import { Features } from '../components/features';
import { Buttons } from '../components/buttons';
import { Dedication } from '../components/dedication';
import styles from './styles.module.css';
import Head from '@docusaurus/Head';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.headingOne}>
        Single experience operating system (XOS) <br /> to align your entire
        business
      </h1>
      <p className={styles.description}>
        Combine all your business tools into one <b>streamlined</b> and
        integrated &nbsp;<b>open-source</b> framework
      </p>
      <Buttons />
      <p className={styles.suggestion}>
        Explore our alternative no set-up and scalable hosted version.
        <a href="https://erxes.io/" target="_blank">
          {' '}
          Try <b>Erxes Cloud</b>
        </a>
        <i>
          Due to the minimum hosting requirements, many small businesses will
          benefit from using our flexible and scalable cloud product for real
          production sites
        </i>
      </p>
    </div>
  );
};

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { title, tagline, url, favicon } = siteConfig;

  const ogImage = `${url}/img/default.jpg`;

  return (
    <Layout
      title={title}
      description={tagline}
      ogImage={ogImage}
      url={url}
      favicon={favicon}
    >
      <Head>
        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </Head>
      <header
        id="hero"
        className={classnames('hero hero--primary', styles.heroBanner)}
      >
        <div className="container">
          <Header />
        </div>
      </header>
      <Dedication />
      <Clients />
      <Features />
      <div className={styles.cta}>
        <Buttons />
      </div>
    </Layout>
  );
}

export default Home;
