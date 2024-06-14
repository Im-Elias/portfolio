"use client";
import { CountUp } from "react-countup";

const Badge = ({
   containerStyles,
   icon,
   endCountNum,
   endCountText,
   badgeText,
}) => {
   return (
      <div className={`badge ${containerStyles}`}>
         <div className="text-3xl text-primary">{icon}</div>
      </div>
   );
};

export default Badge;
