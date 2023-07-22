
import { Link,  } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';


const Header = () => {
  return (
    <div className="all pb-5 " style={{ zIndex: "10000" }}>
      <div className="container">
        <div className="header-top  pt-3">
          <nav className="navbar py-3 navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img
                  src={"https://jthemes.net/themes/wp/genz/wp-content/themes/genz/assets/imgs/template/logo.svg"}
                  alt=""
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <a style={{ color: " red" }} className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <LinkContainer to="/">
                      <a className="nav-link ">Home</a>
                    </LinkContainer>

                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className ="fa-solid fa-gear"></i> Home Version 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-gear"></i> Home Version 2
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-gear"></i> Home Version 3
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-gear"></i> Home Version 4
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link "
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      About Me
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-gear"></i> Portfolio
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-gear"></i> Portfolio Style 2
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-gear"></i> Portfolio Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
             
                      <a className="nav-link ">Category</a>
           
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-gear"></i> Travel Tips
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-gear"></i> Lifestyle
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-gear"></i> Healthy
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-gear"></i> Design
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-gear"></i> Yechnology
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-gear"></i> Interviews
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                           <LinkContainer to="/blog">
                    <a
                      className="nav-link "
                      href="#"
                      role="button"
             
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    </LinkContainer>
                    
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link "
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#" type="button">
                          <i className="fa-solid fa-gear"></i> About
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-gear"></i> Search Result
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-solid fa-gear"></i> Contact us
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link ">Contact</a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <Link to="/loginform">
                    {" "}
                    <button className="me-3" >
                      <i className="fa-solid fa-user"></i>
                    </button>
                  </Link>
                  
                    <button type="button" className="me-3">
                      <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                    </button>
                 
                 
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header