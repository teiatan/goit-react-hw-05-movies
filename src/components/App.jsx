import { useState } from "react";
import { Header } from "./header/Header";
import { Main } from "./main/Main";

export const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const changeCurrentPage = (pageName) => {
    setCurrentPage(pageName);
  };
  
  return (
    <>
      <Header changeCurrentPage={changeCurrentPage}/>
      <Main currentPage={currentPage}/>
    </>
  );
};
