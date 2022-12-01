import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const DashboardMain = () => {
  const [greetingMode, setGreetingMod] = useState(null);
  useEffect(() => {
    const currentDate = new Date();
    const timestamp = currentDate.getHours();
    if (timestamp < 12) {
      setGreetingMod("Good morning");
    } else if (timestamp === 12) {
      setGreetingMod("Good afternoon");
    } else {
      setGreetingMod("Good evening");
    }
  }, []);
  return (
    <div>
      <h2>
        {greetingMode} {"[NAME]"}!
      </h2>
    </div>
  );
};

export default DashboardMain;
