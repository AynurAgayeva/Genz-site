import React from 'react'

const Footer = () => {
  return (
    <div className="footer-end py-5">
      <div className="container pt-5">
        <footer className="footer-con container py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3 me-lg-5">
              <h5>
                <img
                  src={"https://jthemes.net/themes/wp/genz/wp-content/themes/genz/assets/imgs/template/logo.svg"}
                  alt=""
                />
              </h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <p>
                    When an unknown prnoto sans took a galley and scrambled it
                    to make specimen book not only five
                  </p>
                </li>

                <li>
                  Adress
                  <li>123 Main Street</li>
                  <li>New York, NY 10001</li>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3 ms-lg-3">
              <h5>Categories</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    Design
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    Healthy
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    Travel
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    Interviews
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    LifeStyle
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    Movie
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3 ms-lg-3">
              <h5>
                <br />
              </h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className=" col-md-5 mb-3">
              <form>
                <h5>Newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2022 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#twitter" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#instagram" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#facebook" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>

      {/* <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        Placeholder content for this accordion, which is intended to
        demonstrate the <code>.accordion-flush</code> class. This is the
        first item's accordion body.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        Placeholder content for this accordion, which is intended to
        demonstrate the <code>.accordion-flush</code> class. This is the
        second item's accordion body. Let's imagine this being filled
        with some actual content.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        Placeholder content for this accordion, which is intended to
        demonstrate the <code>.accordion-flush</code> class. This is the
        third item's accordion body. Nothing more exciting happening
        here in terms of content, but just filling up the space to make
        it look, at least at first glance, a bit more representative of
        how this would look in a real-world application.
      </div>
    </div>
  </div>
</div> */}

      </div>
    </div>
  );
}

export default Footer