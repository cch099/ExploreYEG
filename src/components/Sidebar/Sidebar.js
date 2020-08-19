// @flow strict
import React from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Search from './Search';
import TagCloudX from './TagCloud';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';
import type { AllMarkdownRemark } from '../types';

type Props = {
  isIndex?: boolean,
  setEdges: any,
  allEdges: AllMarkdownRemark.edges
};

const Sidebar = ({ isIndex, setEdges, allEdges }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Search setEdges={setEdges} allEdges={allEdges}/>
        <Menu menu={menu} />
        {
          isIndex
          && <TagCloudX />
        }
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;
