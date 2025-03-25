export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <!doctype html>
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="description" content="" />
        <meta name="author" content="" />

        <title>Tooplate's Little Fashion</title>

        {/* <!-- CSS FILES --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700;900&display=swap" rel="stylesheet" />

        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/bootstrap-icons.css" rel="stylesheet" />

        <link rel="stylesheet" href="css/slick.css" />

        <link href="css/tooplate-little-fashion.css" rel="stylesheet" />
      </head>

      <body>

        <section className="preloader">
          <div className="spinner">
            <span className="sk-inner-circle"></span>
          </div>
        </section>

        <main>

          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <a className="navbar-brand" href="index.html">
                <strong><span>Little</span> Fashion</strong>
              </a>

              <div className="d-lg-none">
                <a href="sign-in.html" className="bi-person custom-icon me-3"></a>

                <a href="product-detail.html" className="bi-bag custom-icon"></a>
              </div>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <a className="nav-link active" href="index.html">Home</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="about.html">Story</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="products.html">Products</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="faq.html">FAQs</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact</a>
                  </li>
                </ul>

                <div className="d-none d-lg-block">
                  <a href="sign-in.html" className="bi-person custom-icon me-3"></a>

                  <a href="product-detail.html" className="bi-bag custom-icon"></a>
                </div>
              </div>
            </div>
          </nav>

          <section className="slick-slideshow">
            <div className="slick-custom">
              <img src="images/slideshow/medium-shot-business-women-high-five.jpeg" className="img-fluid" alt="" />

              <div className="slick-bottom">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-10">
                      <h1 className="slick-title">Cool Fashion</h1>

                      <p className="lead text-white mt-lg-3 mb-lg-5">Little fashion template comes with total 8 HTML pages provided by Tooplate website.</p>

                      <a href="about.html" className="btn custom-btn">Learn more about us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="slick-custom">
              <img src="images/slideshow/team-meeting-renewable-energy-project.jpeg" className="img-fluid" alt="" />

              <div className="slick-bottom">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-10">
                      <h1 className="slick-title">New Design</h1>

                      <p className="lead text-white mt-lg-3 mb-lg-5">Please share this Little Fashion template to your friends. Thank you for supporting us.</p>

                      <a href="product.html" className="btn custom-btn">Explore products</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="slick-custom">
              <img src="images/slideshow/two-business-partners-working-together-office-computer.jpeg" className="img-fluid" alt="" />

              <div className="slick-bottom">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-10">
                      <h1 className="slick-title">Talk to us</h1>

                      <p className="lead text-white mt-lg-3 mb-lg-5">Tooplate is one of the best HTML CSS template websites for everyone.</p>

                      <a href="contact.html" className="btn custom-btn">Work with us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>

          <section className="about section-padding">
            <div className="container">
              <div className="row">

                <div className="col-12 text-center">
                  <h2 className="mb-5">Get started with <span>Little</span> Fashion</h2>
                </div>

                <div className="col-lg-2 col-12 mt-auto mb-auto">
                  <ul className="nav nav-pills mb-5 mx-auto justify-content-center align-items-center" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Introduction</button>
                    </li>

                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-youtube-tab" data-bs-toggle="pill" data-bs-target="#pills-youtube" type="button" role="tab" aria-controls="pills-youtube" aria-selected="true">How we work?</button>
                    </li>

                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-skill-tab" data-bs-toggle="pill" data-bs-target="#pills-skill" type="button" role="tab" aria-controls="pills-skill" aria-selected="false">Capabilites</button>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-10 col-12">
                  <div className="tab-content mt-2" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                      <div className="row">
                        <div className="col-lg-7 col-12">
                          <img src="images/pim-chu-z6NZ76_UTDI-unsplash.jpeg" className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-5 col-12">
                          <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                            <h4 className="mb-3">Good <span>Design</span> <br />Ideas for <span>your</span> fashion</h4>

                            <p>Little Fashion templates comes with <a href="sign-in.html">sign in</a> / <a href="sign-up.html">sign up</a> pages, product listing / product detail, about, FAQs, and contact page.</p>

                            <p>Since this HTML template is based on Boostrap 5 CSS library, you can feel free to add more components as you need.</p>

                            <div className="mt-2 mt-lg-auto">
                              <a href="about.html" className="custom-link mb-2">
                                Learn more about us
                                <i className="bi-arrow-right ms-2"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="pills-youtube" role="tabpanel" aria-labelledby="pills-youtube-tab">

                      <div className="row">
                        <div className="col-lg-7 col-12">
                          <div className="ratio ratio-16x9">
                            <iframe src="https://www.youtube-nocookie.com/embed/f_7JqPDWhfw?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                          </div>
                        </div>

                        <div className="col-lg-5 col-12">
                          <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                            <h4 className="mb-3">Life at Studio</h4>

                            <p>Over three years in business, We’ve had the chance to work on a variety of projects, with companies</p>

                            <p>Custom work is branding, web design, UI/UX design</p>

                            <div className="mt-2 mt-lg-auto">
                              <a href="contact.html" className="custom-link mb-2">
                                Work with us
                                <i className="bi-arrow-right ms-2"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="pills-skill" role="tabpanel" aria-labelledby="pills-skill-tab">
                      <div className="row">
                        <div className="col-lg-7 col-12">
                          <img src="images/cody-lannom-G95AReIh_Ko-unsplash.jpeg" className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-5 col-12">
                          <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                            <h4 className="mb-3">What can help you?</h4>

                            <p>Over three years in business, We’ve had the chance on projects</p>

                            <div className="skill-thumb mt-3">

                              <strong>Branding</strong>
                              <span className="float-end">90%</span>
                              <div className="progress">
                                <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}></div>
                              </div>

                              <strong>Design & Stragety</strong>
                              <span className="float-end">70%</span>
                              <div className="progress">
                                <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}></div>
                              </div>

                              <strong>Online Platform</strong>
                              <span className="float-end">80%</span>
                              <div className="progress">
                                <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}></div>
                              </div>

                            </div>

                            <div className="mt-2 mt-lg-auto">
                              <a href="products.html" className="custom-link mb-2">
                                Explore products
                                <i className="bi-arrow-right ms-2"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </section>

          <section className="front-product">
            <div className="container-fluid p-0">
              <div className="row align-items-center">

                <div className="col-lg-6 col-12">
                  <img src="images/retail-shop-owner-mask-social-distancing-shopping.jpg" className="img-fluid" alt="" />
                </div>

                <div className="col-lg-6 col-12">
                  <div className="px-5 py-5 py-lg-0">

                    <h2 className="mb-4"><span>Retail</span> shop owners</h2>

                    <p className="lead mb-4">Credits go to Unsplash and FreePik websites for images used in this Little Fashion by Tooplate.</p>

                    <a href="products.html" className="custom-link">
                      Explore Products
                      <i className="bi-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section className="featured-product section-padding">
            <div className="container">
              <div className="row">

                <div className="col-12 text-center">
                  <h2 className="mb-5">Featured Products</h2>
                </div>

                <div className="col-lg-4 col-12 mb-3">
                  <div className="product-thumb">
                    <a href="product-detail.html">
                      <img src="images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg" className="img-fluid product-image" alt="" />
                    </a>

                    <div className="product-top d-flex">
                      <span className="product-alert me-auto">New Arrival</span>

                      <a href="#" className="bi-heart-fill product-icon"></a>
                    </div>

                    <div className="product-info d-flex">
                      <div>
                        <h5 className="product-title mb-0">
                          <a href="product-detail.html" className="product-title-link">Tree pot</a>
                        </h5>

                        <p className="product-p">Original package design from house</p>
                      </div>

                      <small className="product-price text-muted ms-auto mt-auto mb-5">$25</small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-12 mb-3">
                  <div className="product-thumb">
                    <a href="product-detail.html">
                      <img src="images/product/jordan-nix-CkCUvwMXAac-unsplash.jpeg" className="img-fluid product-image" alt="" />
                    </a>

                    <div className="product-top d-flex">
                      <span className="product-alert">Low Price</span>

                      <a href="#" className="bi-heart-fill product-icon ms-auto"></a>
                    </div>

                    <div className="product-info d-flex">
                      <div>
                        <h5 className="product-title mb-0">
                          <a href="product-detail.html" className="product-title-link">Fashion Set</a>
                        </h5>

                        <p className="product-p">Costume Package</p>
                      </div>

                      <small className="product-price text-muted ms-auto mt-auto mb-5">$35</small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-12">
                  <div className="product-thumb">
                    <a href="product-detail.html">
                      <img src="images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg" className="img-fluid product-image" alt="" />
                    </a>

                    <div className="product-top d-flex">
                      <a href="#" className="bi-heart-fill product-icon ms-auto"></a>
                    </div>

                    <div className="product-info d-flex">
                      <div>
                        <h5 className="product-title mb-0">
                          <a href="product-detail.html" className="product-title-link">Juice Drinks</a>
                        </h5>

                        <p className="product-p">Nature made another world</p>
                      </div>

                      <small className="product-price text-muted ms-auto mt-auto mb-5">$45</small>
                    </div>
                  </div>
                </div>

                <div className="col-12 text-center">
                  <a href="products.html" className="view-all">View All Products</a>
                </div>

              </div>
            </div>
          </section>

        </main>

        <footer className="site-footer">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-10 me-auto mb-4">
                <h4 className="text-white mb-3"><a href="index.html">Little</a> Fashion</h4>
                <p className="copyright-text text-muted mt-lg-5 mb-4 mb-lg-0">Copyright © 2022 <strong>Little Fashion</strong></p>
                <br />
                <p className="copyright-text">Designed by <a href="https://www.tooplate.com/" target="_blank">Tooplate</a></p>
                <h5 className="text-white mb-3">Sitemap</h5>

                <ul className="footer-menu d-flex flex-wrap">
                  <li className="footer-menu-item"><a href="about.html" className="footer-menu-link">Story</a></li>

                  <li className="footer-menu-item"><a href="#" className="footer-menu-link">Products</a></li>

                  <li className="footer-menu-item"><a href="#" className="footer-menu-link">Privacy policy</a></li>

                  <li className="footer-menu-item"><a href="#" className="footer-menu-link">FAQs</a></li>

                  <li className="footer-menu-item"><a href="#" className="footer-menu-link">Contact</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-4">
                <h5 className="text-white mb-3">Social</h5>

                <ul className="social-icon">

                  <li><a href="#" className="social-icon-link bi-youtube"></a></li>

                  <li><a href="#" className="social-icon-link bi-whatsapp"></a></li>

                  <li><a href="#" className="social-icon-link bi-instagram"></a></li>

                  <li><a href="#" className="social-icon-link bi-skype"></a></li>
                </ul>
              </div>

            </div>
          </div>
        </footer>

        {/* <!-- JAVASCRIPT FILES --> */}
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/Headroom.js"></script>
        <script src="js/jQuery.headroom.js"></script>
        <script src="js/slick.min.js"></script>
        <script src="js/custom.js"></script>

      </body>
    </html >
  );
}
