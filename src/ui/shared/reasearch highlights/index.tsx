import React from "react";
import "./style.css";
import { ResearchHighlightData } from "../../../constants/research.highlights";
import CountUp from "react-countup";
import { counter_delay, duration, start } from "../../../constants/counter.up";
import Button from "../Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ResearchHighlights: React.FC = () => {
  const demographic_data = useSelector((state: any) => state.demographic);
  return (
    <>
      <div className="research_container border-bottom1">
        <h1>
          Research <span>Highlights</span>
        </h1>
        <br />
        <p className="text-center text-secondary fw-bold">
          <small>
            The following are some of the research highlights that we worked on
          </small>
        </p>
        <div className="content">
          {ResearchHighlightData.map((item, index) => {
            return (
              <div className="research_card" key={index}>
                <img src={item.illustration} alt="" width={"50%"} />
                <span>
                  {demographic_data.isLoading && "Please wait.."}
                  {!demographic_data.isLoading && index === 0 ? (
                    <CountUp
                      duration={duration}
                      start={start}
                      end={demographic_data?.data?.publications}
                      delay={counter_delay}
                    />
                  ) : index === 1 ? (
                    <CountUp
                      duration={duration}
                      start={start}
                      end={demographic_data?.data?.patents}
                      delay={counter_delay}
                    />
                  ) : index === 2 ? (
                    <CountUp
                      duration={duration}
                      start={start}
                      end={demographic_data?.data?.cross_funding}
                      delay={counter_delay}
                    />
                  ) : (
                    <CountUp
                      duration={duration}
                      start={start}
                      end={demographic_data?.data?.projects}
                      delay={counter_delay}
                    />
                  )}
                  +
                </span>
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
        <Link to={"/research/publications"}>
          <Button title="Read More" onClick={() => {}} />
        </Link>
      </div>
    </>
  );
};

export default ResearchHighlights;
