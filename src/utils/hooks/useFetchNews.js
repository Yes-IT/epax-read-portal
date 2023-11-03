import React, { useState, useEffect } from "react";
import Axios from "axios";

const api = process.env.REACT_APP_GOPERIGON_API;
const secret = process.env.REACT_APP_GOPERIGON_KEY;
const environment = process.env.DATA_SRC
export default function useFetchNews(page, searchTerm) {
  const [news, setNews] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function fetch() {
    const url =
    searchTerm === null ? "v1/all?sourceGroup=top100": `/q?query=${searchTerm}&`;
    Axios.get(`${api}/${url}client_id=${secret}&page=${page}`)
      .then((res) => {
        searchTerm === null ? fetchRandom(res) : fetchSearch(res);
        setIsLoading(false);
      })
      .catch((e) => {
        setErrors(["Unable to fetch news"]);
        setIsLoading(false);
      });
  }

  function fetcTestData(){

  }

  function fetchSearch(res) {
    page > 1
      ? setNews([...news,...res.data.results])
      : setNews([...res.data.results]);
  }
  //this show previous pages
  // function fetchSearch(res) {
  //   page > 1
  //     ? setImages([...images, ...res.data.results])
  //     : setImages([...res.data.results]);
  // }
  function fetchRandom(res) {
    setNews([...news, ...res.data]);
  }

  useEffect(() => {
    setIsLoading(true);
    if(environment==="LOCAL"){
      fetcTestData();
    }else{
      fetch();
    }
   
  }, [page, searchTerm]);

  return [news, setNews, errors, isLoading];
}
