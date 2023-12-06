import React from "react";
import BannerHome from "../../shared/Banner Home/BannerHome";
import Button from "../../shared/Button";
import "./style.css";
import ResearchHighlights from "../../shared/reasearch highlights";
import { home } from "../../../constants/content.website";
import AchievementsHome from "../../shared/achievements";
import NewsFeed from "../../shared/news feed";
import CoursesOffered from "../../shared/Courses Offered";
import { useEffect, useState } from "react";
import NewsService from "../../../services/auth/news";
import { useSelector } from "react-redux";

const HomePage: React.FC = () => {
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
      <div className="col-md-12">
        <BannerHome />
      </div>
      <div className="col-md-12 bg1 h-auto d-flex justify-content-start align-items-center flex-column p-5 gap-5">
        <div
          className="main_head h1 text-center"
          dangerouslySetInnerHTML={{ __html: home[0] }}
        ></div>
        <p
          className="text-black mb-3 mt-2"
          dangerouslySetInnerHTML={{ __html: home[1] }}
        ></p>

        <Button
          title={`Read more`}
          onClick={() => {
            (window as any).location = "/about";
          }}
        />
      </div>
      <ResearchHighlights />
      <AchievementsHome />
      <CoursesOffered />
      <div className="py-5 border-bottom1 d-flex justify-content-center flex-column bg4">
        <div className="main_head text-center pb-5">
          Latest <span>News</span>
        </div>
        <NewsFeed news={news} loading={loading} />
        <div className="container text-center pt-5">
          {" "}
          <Button
            title="View More"
            onClick={() => {
              location.href = "/news";
            }}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
