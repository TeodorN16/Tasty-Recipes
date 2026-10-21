export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-md-6 col-lg-2">
                <div className="footer_widget">
                  <h3 className="footer_title">Top Products</h3>
                  <ul>
                    <li>
                      <a href="#">Managed Website</a>
                    </li>
                    <li>
                      <a href="#"> Manage Reputation</a>
                    </li>
                    <li>
                      <a href="#">Power Tools</a>
                    </li>
                    <li>
                      <a href="#">Marketing Service</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-lg-2">
                <div className="footer_widget">
                  <h3 className="footer_title">Quick Links</h3>
                  <ul>
                    <li>
                      <a href="#">Jobs</a>
                    </li>
                    <li>
                      <a href="#">Brand Assets</a>
                    </li>
                    <li>
                      <a href="#">Investor Relations</a>
                    </li>
                    <li>
                      <a href="#">Terms of Service</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-lg-2">
                <div className="footer_widget">
                  <h3 className="footer_title">Features</h3>
                  <ul>
                    <li>
                      <a href="#">Jobs</a>
                    </li>
                    <li>
                      <a href="#">Brand Assets</a>
                    </li>
                    <li>
                      <a href="#">Investor Relations</a>
                    </li>
                    <li>
                      <a href="#">Terms of Service</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-lg-2">
                <div className="footer_widget">
                  <h3 className="footer_title">Resources</h3>
                  <ul>
                    <li>
                      <a href="#">Guides</a>
                    </li>
                    <li>
                      <a href="#">Research</a>
                    </li>
                    <li>
                      <a href="#">Experts</a>
                    </li>
                    <li>
                      <a href="#">Agencies</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-lg-4">
                <div className="footer_widget">
                  <h3 className="footer_title">Subscribe</h3>
                  <p className="newsletter_text">
                    You can trust us. we only send promo offers,
                  </p>
                  <form action="#" className="newsletter_form">
                    <input type="text" placeholder="Enter your mail" />
                    <button type="submit">
                      {" "}
                      <i className="ti-arrow-right"></i>{" "}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right_text">
          <div className="container">
            <div className="footer_border"></div>
            <div className="row align-items-center">
              <div className="col-xl-8 col-md-8">
                <p className="copy_right">
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                </p>
              </div>
              <div className="col-xl-4 col-md-4">
                <div className="socail_links">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="ti-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-twitter-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
