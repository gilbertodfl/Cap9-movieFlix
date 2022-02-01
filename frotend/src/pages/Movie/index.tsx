import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
 
const Movies = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();
 
  useEffect(() => {
    const params : AxiosRequestConfig = {
      url: '/movies',
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
         <a href={"/movies/"+item.id.toString()} >{item.title}</a>
        </p>
        </div>
      ))}
    </div>
  );
};
 
export default Movies;
