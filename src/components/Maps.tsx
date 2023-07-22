
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../image/GM.png"

const Maps = () => {
  return (
    <div className="maps ">
      <div className="container py-5">
        <div className="row my-5">
          <div className="col-lg-6 mt-5 col-sm-12 col-md-12">
            <div className="about-left ms-2 me-3 d-flex align-items-center justify-content-center">
              <img
                width="100%"
                src={"https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/10/landing-posts-img-1.jpg"}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-12">
            <div className="about-right  ms-md-3 me-md-3">
              <h2 style={{ fontSize: 18, marginBottom: 25 }}>
                <img
                  data-aos="fade-up-right"
                  src={"https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/10/landing-plane-img.png"}
                  alt=""
                />
              </h2>
              <h1
                className="color-gray-50 mt-10 mb-20 wow animate__ animate__fadeInUp animated"
                style={{
                  visibility: "visible",
                  animationName: "fadeInUp",
                  animationDuration: "1.25s",
                }}
              >
                FEATURE DESTINATIONS ON THE MAP
                <a
                  className="typewrite color-linear"
                  href="#"
                  data-period={3000}
                  data-type='["Brian Clark", "Developer", "Designer", " Blogger"]'
                >
                  <span className="wrap" />
                </a>
              </h1>

              <h5 className="mt-5" style={{ lineHeight: "1.61em" }}>
                Our theme lets you integrate Google Maps on any of your pages.
                Not only this, but the maps are fully customizable so you can
                use the style that fits you the most! You can also easily pin
                the destinations from your posts right on the map!
              </h5>

              <a className="search-btn  b-0">
                <img src={Logo} alt="" style={{ width: "10vw" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-6 col-sm-12 col-md-12 mt-5">
            <div className="about-right mt-5 ms-md-3 me-md-3">
              <h2 style={{ fontSize: 18, marginBottom: 25 }}></h2>
              <h1
                className="color-gray-50 mt-10 mb-20 wow animate__ animate__fadeInUp animated"
                style={{
                  visibility: "visible",
                  animationName: "fadeInUp",
                  animationDuration: "1.25s",
                }}
              >
                SO MANY STUNNING POST VARIATIONS!
                <a
                  className="typewrite color-linear"
                  href="#"
                  data-period={3000}
                  data-type='["Brian Clark", "Developer", "Designer", " Blogger"]'
                >
                  <span className="wrap" />
                </a>
              </h1>

              <h5 className="my-5" style={{ lineHeight: "1.61em" }}>
                Packed full with amazing layouts which are great for showcasing
                all kinds of posts straight out of the box!
              </h5>
              <ul>
                <li>
                  <i className="fa-solid fa-location-dot"></i> Beautiful single post
                  layout set
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i> A variety of blog
                  list styles
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i> Feature eye-catching
                  blog sliders
                </li>
                <li>
                  {" "}
                  <i className="fa-solid fa-location-dot"></i> Add videos, audio &
                  much more
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-12 mt-5">
            <div className="about-left ms-2 me-3 d-flex align-items-center justify-content-center">
              <img
                width="100%"
                src={"https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/landing-posts-img-3.jpg"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maps