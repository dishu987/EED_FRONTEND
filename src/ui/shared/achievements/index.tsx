import React from "react";

import Button from "../Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const AchievementsHome: React.FC = () => {
  const achievements = useSelector((state: any) => state.achievements);
  return (
    <>
      <div className="p-5 border-bottom1 d-flex justify-content-start align-items-start flex-column bg3">
        <h1 className="h1 main_head">
          Our <span>Achievements</span>
        </h1>
        <ul className="my-4">
          {!achievements.isLoading &&
            achievements?.data?.map((achievement: any, index: any) => {
              return (
                <li key={index}>
                  Congratulations to <b>{achievement.name}</b>,
                  {achievement.category},{achievement.department}(
                  {achievement.supervisor}),
                  {achievement.award}
                </li>
              );
            })}
        </ul>
        <Link to={"/achievements"}>
          <Button title="Read More" onClick={() => {}} />
        </Link>
      </div>
    </>
  );
};

export default AchievementsHome;
