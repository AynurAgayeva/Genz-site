
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [name, setName] = useState("developer");
  useEffect(()=>{
const intervalid = setInterval(()=>{
setName((prevText)=>{
  if(prevText.length === 4){
    clearInterval(intervalid);
    return " designer"
  }
  return(prevText.slice(0,-1))
});

}, 500);
return()=>{
  clearInterval(intervalid);
}


  },[])
  return (
    <div className="all">
      <div className="container">

        <div className="header-bottom py-5">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-12">
              <div className="about-right mt-5 ms-md-3 me-md-3">
                <h6 style={{ fontSize: 18, marginBottom: 25 }}>
                  Hello Everyone!
                </h6>
                 {/* animate__animated animate__fadeInLeft */}
                <h1 className="color-gray-50 mt-10 mb-20 ">
                  I’m {name}
                  {/* <span style={{ color: "#0ea5ea", fontSize: "65px" }}>
                
                  </span> */}
                  <a
                    className="typewrite color-linear text-center animate__animated animate__fadeInLeft"
                    href="#"
                    data-period={3000}
                    data-type='["Brian Clark", "Developer", "Designer", " Blogger"]'
                  >
                    <span className="wrap" />
                  </a>
                </h1>
                <h5 className="my-5" style={{ lineHeight: "1.61em" }}>
                  I use animation as a third dimension by which to simplify
                  experiences and kuiding thro each and every interaction. I’m
                  not adding motion just to spruce things up, but doing it in
                  ways that. Type your email address
                </h5>
                <button className="search-btn p-3 b-0" style={{}}>
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2 "
                      type="search"
                      placeholder="Type your email adress"
                      aria-label="Search"
                    />
                    <button className="w-70 btn" type="submit">
                      Subscribe&#8594;
                    </button>
                  </form>
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-12">
              <div className="about-left mt-lg-0 mt-5 ms-2 me-3 d-flex align-items-center justify-content-center">
                <img
                  width="350vw"
                  height="510vh"
                  src={"https://jthemes.net/themes/wp/genz/wp-content/themes/genz/assets/imgs/page/homepage1/banner.png"}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home