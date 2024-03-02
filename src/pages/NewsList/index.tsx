import * as React from 'react';
import { useState, use, Suspense } from 'react';
import { faker } from '@faker-js/faker';

export const App = () => {
  const [newsPromise, setNewsPromise] = useState(() => fetchNews());

  const handleUpdate = () => {
    fetchNews().then((news) => {
      setNewsPromise(Promise.resolve(news));
    });
  };

  return (
    <>
      <h3>
        新闻列表 <button onClick={handleUpdate}>刷新</button>
      </h3>
      <NewsContainer newsPromise={newsPromise} />
    </>
  );
};

let news = [...new Array(4)].map(() => faker.lorem.sentence());

const fetchNews = () =>
  new Promise<string[]>((resolve) =>
    // 使用 setTimeout 模拟数据获取过程setTimeout
    setTimeout(() => {
      news.unshift(faker.lorem.sentence());
      resolve(news);
    }, 1000)
  );

const NewsContainer = ({ newsPromise }) => (
  <Suspense fallback={<p>获取新闻中...</p>}>
    <News newsPromise={newsPromise} />
  </Suspense>
);

const News = ({ newsPromise }) => {
  const news = use<string[]>(newsPromise);
  return (
    <ul>
      {news.map((title, index) => (
        <li key={index}>{title}</li>
      ))}
    </ul>
  );
};