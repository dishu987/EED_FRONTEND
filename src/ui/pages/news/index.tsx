import React, { useState, useEffect } from "react";
import NewsFeed from "../../shared/news feed";
import { useSelector } from "react-redux";
import NewsService from "../../../services/auth/news";
import DateTimeComponent from "../../../utils/datetime";

const NewsAll: React.FC = () => {
  const [news, setNews] = useState<any>({});
  const auth = useSelector((state: any) => state.getauth);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const handleNews = async () => {
      try {
        const res = await NewsService.getnews(auth?.data?.token);
        console.log(res);
        if (res.data) {
          setNews(res.data);
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    handleNews();
  }, []);
  return (
    <>
      <div className="py-5">
        <h1 className="main_head text-center">
          <span>News </span>
          <br />
        </h1>
        <br />
        <NewsFeed news={news} loading={loading} />
        <div className="m-5 mt-5">
          <p className="fw-bold h1 mb-3">Highlights</p>
          <ul>
            {!loading &&
              news &&
              news?.map((n: any, i: any) => {
                return (
                  <li key={i} className="mb-3">
                    <span className="badge bg-success p-2 mx-2">{n?.type}</span>
                    {n?.title} - {n?.description} -{" "}
                    <DateTimeComponent datetimeString={n?.timestamp} />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NewsAll;
