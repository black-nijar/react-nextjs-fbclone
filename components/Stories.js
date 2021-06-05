import React from "react";
import StoryCard from "./StoryCard";
const storyData = [
  {
    name: "Elan Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Gate",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {storyData.map((st) => {
        return (
          <StoryCard
            name={st.name}
            src={st.src}
            profile={st.profile}
            key={st.name}
          />
        );
      })}
    </div>
  );
};

export default Stories;
