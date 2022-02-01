import ProductCard from 'components/ProductCard';
import { Product } from 'types/product';
import { Link } from 'react-router-dom';
import Pagination from 'pages/Pagination';
import { useState, useEffect } from 'react';
import { SpringPage } from 'types/vendor/spring';
import {  requestBackend } from 'util/requests';
import CardLoader from './CardLoader';

import  { AxiosRequestConfig } from 'axios';

import './styles.css';


const Catalog = () => {
 
  const [page, setPage] = useState<SpringPage<Product>>();
  const [ isLoading, setLoading ] = useState(true);

  useEffect( () => {
const params: AxiosRequestConfig= {
        method: 'GET',
        url: "/products",

        params:{
            page: 0,
            size: 12
        }
      }
      //setIsLoading(true);
      requestBackend( params)
        .then(
           response => {
              setPage(  response.data );
      //        console.log( page );
           }
        ).finally( () => {
          setLoading(false);
        })

  }, []);

  
  return (
    <>
    <div className="container md-y4 catalog-container">
      <div className="row catalog-title-container">
          <h1>Catálogo de Produto</h1>
      </div>
    </div>
      <div className="container md-y4">
        <div className="row">
          {isLoading ? <CardLoader /> :(
            page?.content.map( product => 
            (
                  <div className="col-sm-6 col-lg-4 col-xl-3" key={product.id}>
                  <Link to= "/products/1">
                    <ProductCard product={product} />
                  </Link>
                </div>
            ))
            )
          }
        </div>
        <div className="row">
            <Pagination />
        </div>
      </div>
    </>
  );
};

export default Catalog;
