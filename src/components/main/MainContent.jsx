import React from "react";
import "./mainContent.css";
import MusicArticle from "./musicArticle/MusicArticle";
import MusicSection from "./musicCard/MusicSection";
import SearchInput from "./SearchInput";
import TitleContent from "./TitleContent";

const MainContent = () => {
  return (
    <main className="mainContainer">
      <SearchInput />
      <MusicArticle />
      <TitleContent />
      <MusicSection />
    </main>
  );
};

export default MainContent;
