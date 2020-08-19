// @flow strict
import React from 'react';
import styles from './Content.module.scss';

type Props = {
  body: string,
  title: string,
  timeToRead: number
};

const Content = ({ body, title, timeToRead }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <h1 className={styles['content__timeToRead']}>Time To Read:&nbsp;{timeToRead} {timeToRead > 1 ? "minutes" : "minute"}</h1>
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
