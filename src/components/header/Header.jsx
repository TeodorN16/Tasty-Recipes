import { Link } from "react-router";

export default function Header() {
  return (
    <header>
      <div className="header-area ">
        <div id="sticky-header" className="main-header-area ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-2">
                <div className="logo">
                  <Link to="/">
                    <img src="img/logo.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="main-menu   d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <Link to="/">home</Link>
                      </li>
                      <li>
                        <Link to="/about">about</Link>
                      </li>
                      <li>
                        <Link to="/recipes">Recipes</Link>
                      </li>
                      <li>
                        <Link to="/blog">
                          blog <i className="ti-angle-down"></i>
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/blog">blog</Link>
                          </li>
                          <li>
                            <Link to="/single-blog">single-blog</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/pages">
                          pages <i className="ti-angle-down"></i>
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/recipes-details">Recipes Details</Link>
                          </li>
                          <li>
                            <Link to="/elements">elements</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                <div className="search_icon">
                  <Link to="#">
                    <i className="ti-search"></i>
                  </Link>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
