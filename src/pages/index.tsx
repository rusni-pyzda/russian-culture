import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Description will go into a meta tag in <head />"
      noFooter>
      <HomepageHeader />
      <main>
        <div className="container">
          <div className="row row--justify-center">
            <div className="col-12">
              <h2 className="text--center">This is what russian culture is</h2>
              <p>
              Perpetual genocide and methodical erasure of history.
              This is what russian culture did to <Link href="https://www.factor-druk.eu/">Factor Druk</Link>, one of the largest printing houses in Europe:
              </p>
              <img src="/img/image1.jpg" />
              <Link href="https://publishingperspectives.com/2024/05/russian-attacks-hit-ukraines-factor-druk-printing-house/">Article</Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
