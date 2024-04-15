import react from "react";
import Blogcard from "./Blogcard";

function Blogs() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Blogcard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
