import axios from "axios";
import react from "react";
import Blogcard from "./Blogcard";
let data = null;
axios({
  // Endpoint to send files
  url: "https://api.restful-api.dev/objects",
  method: "GET",
})
  // Handle the response from backend here
  .then((res) => {
    // const productList = res.data;
    data = res.data;
  });

// Catch errors if any
// .catch((err) => {});

function Blogs() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            {data.map((dataD) => {
              // console.log(dataD);
              <Blogcard
                name={dataD.name}
                // Capacity={dataD.data.Capacity}
                // color={dataD.data.color}
              />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
