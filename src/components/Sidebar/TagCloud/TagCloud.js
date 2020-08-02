/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { navigate } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { TagCloud } from 'react-tagcloud';
import styles from './TagCloud.module.scss';
import { useTagsList } from '../../../hooks';

let data = [];

const TagCloudX = () => {
  const tags = useTagsList();

  data = [];
  tags.map((tag) => (
    data.push({ value: tag.fieldValue, count: tag.totalCount })
  ));

  return (
    <div className={styles['tagcloud']}>
      <br/>
      <TagCloud
            minSize={12}
            maxSize={35}
            tags={data}
            onClick={(tag) =>
              navigate(`/tag/${kebabCase(tag.value)}`)
            }
        />
    </div>
  );
};

export default TagCloudX;