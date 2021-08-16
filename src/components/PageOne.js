import React from "react";
import { Link } from "react-router-dom";
const PageOne = () => {
  return (
    <div>
      PageOne
      <Link to="/PageTwo">Navigate to PageTwo</Link>
    </div>
  );
};

export default PageOne;
