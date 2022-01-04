import React from "react";
import TopTen from "../TopTen";

const IndexPage = () => {
  return (
    <div>
      <TopTen type="movie" title="Top Ten Movies" />
      <TopTen type="series" title="Top Ten Series" />
    </div>
  );
};

export default IndexPage;
