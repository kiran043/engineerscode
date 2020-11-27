import React from "react";
import Elearning from "./ELearning/Elearning";
import Main from "./Main/Main";
import Tech from "./Technologies/Tech";

export default function Home() {
  return (
    <div>
      <Main/>
      <Elearning/>
      <Tech/>
    </div>
  );
}
