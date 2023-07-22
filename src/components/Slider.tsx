import React from 'react'

const Slider = () => {
  return (
    <div className='slider-all'>
      <div className="container slider px-4 py-5">
        <h2 className="pb-2 ">Hot topics</h2>
        <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5 ">
          <div className="col d-flex flex-column align-items-start gap-2 ">
            <h3 className="fw-bold ">
              <img className="viewBig"
                src={"https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/news2.jpg"}
                alt=""
              />
            </h3>
            <p className="text-muted">
              Don't miss out on the latest news about Travel tips, Hotels
              review, Food guide...
            </p>
            <a href="#" className="btn btn-primary btn-lg">
              <i className="fa-solid fa-arrow-left"></i>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="col">
            <div className="row row-cols-1 row-cols-sm-2 g-4">
              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center  fs-4 rounded-3">
                  <img
                    src={"https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/img3.jpg"}
                    alt=""
                  />
                </div>
                <h4 className="fw-semibold mb-0 text-center">Interviews</h4>
                <p className="text-muted text-center">5 Articles</p>
              </div>
              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center  fs-4 rounded-3">
                  <img
                    src={"https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/img2.jpg"}
                    alt=""
                  />
                </div>
                <h4 className="fw-semibold mb-0 text-center">Design</h4>
                <p className="text-muted text-center">9 Articles</p>
              </div>
              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center  fs-4 rounded-3">
                  <img
                    src={"https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/img2.jpg"}
                    alt=""
                  />
                </div>
                <h4 className="fw-semibold mb-0 text-center">Technology</h4>
                <p className="text-muted text-center">5 Articles</p>
              </div>
              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center   fs-4 rounded-3">
                  <img
                    src={"https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/img3.jpg"}
                    alt=""
                  />
                </div>
                <h4 className="fw-semibold mb-0 text-center">Travel</h4>
                <p className="text-muted text-center">8 Articles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider