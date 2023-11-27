import React, { useEffect } from 'react'
import NewsItem from 'components/NewsItem/NewsItem'
import { List } from './NewsList.styled'
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from 'redux/news/news-thunk';
import { selectSearchQuery } from 'redux/notices/noticesSelectors';

function NewsList() {
  const dispatch = useDispatch();
  const news = useSelector(state => state.news.data);
  const query = useSelector(selectSearchQuery);

  const filterNewsByQuery = (news, query) => {
    return news.filter(n => n.title.toLowerCase().includes(query.toLowerCase()));
  };

  const filteredNews = query ? filterNewsByQuery(news, query) : news;

  useEffect(() => {
    dispatch(fetchNews({ page: 1, limit: 6, search: '' }));
  }, [dispatch]);


  return (
    <List>
    {filteredNews.map(n => (
       <NewsItem 
       key={n._id}
       imgUrl={n.imgUrl}
          title={n.title}
          text={n.text}
          date={n.date}
          url={n.url}
       />
    ))}
    </List>
  )
}

export default NewsList

