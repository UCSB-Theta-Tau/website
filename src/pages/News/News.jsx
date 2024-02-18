import React from 'react';
import { FullPage, About, Gallery } from '../../components';
import { InstagramEmbed } from 'react-social-media-embed';

const News = () => (
  <>
    <FullPage title="News" img="/static/news/news.jpg" />
    <About title="Recent News" text="" />
    {/* <Gallery imageDir="/static/service/service" size={3} /> */}
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <InstagramEmbed url="https://www.instagram.com/p/C3MEx9_JPTt/" width={328} />
    </div>
  </>
);

export { News };
