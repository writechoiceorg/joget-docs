import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import '../css/HomePage.css';
import HomepageHeader from '../components/Homepage/Header';
import HomepageSection from '../components/Homepage/Section';
import cardContent from './content/cardContent';

const sectionContent = [
  {
    title1: 'Low Code Application',
    title2: 'Guides',
  },
  {
    title1: 'Developers',
    title2: 'Documentation',
  },
  {
    title1: 'Developers',
    title2: 'Documentation',
  },
];

export default function Home() {
  // const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={'Docs'}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {
          sectionContent.map((content, idx) => (
            <>
              <HomepageSection
                key={idx}
                title1={content.title1} 
                title2={content.title2} 
                cards={cardContent[`section${idx + 1}`]}
                className={`cards${cardContent[`section${idx + 1}`].length}`}
              />
              { idx < sectionContent.length - 1 && <div className='breakLine'/>}
            </>
          ))
        }
      </main>
    </Layout>
  );
}
