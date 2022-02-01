import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Review } from 'types/review';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
 
const Reviews = () => {
  const [page, setPage] = useState<SpringPage< Review>>();
 
  useEffect(() => {
    const params : AxiosRequestConfig = {
      url: '/movies/1/reviews',
      withCredentials: true,
      params: {
        page: 0,
        size: 12,
      },
    };
 
    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);
 
  return (
    <div>
      {page?.content.map((item) => (
        
        <div>
        <p key={item.id}  > 
        {item.id} {item.movieId}  {item.text} 
        </p>
        </div>
      ))}
    </div>
  );
};
 
export default Reviews;
