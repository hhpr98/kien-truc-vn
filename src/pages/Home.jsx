import { Fragment } from "react";

function Home() {
  return (<Fragment>
    <section className="slick-slideshow">
      <div className="slick-custom">
        <img src="images/trang-chu/6331673819b7aae9f3a62.jpg" className="img-fluid" alt="" />

        <div className="slick-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-10">
                <h1 className="slick-title">Nội thất đẹp</h1>

                <p className="lead text-white mt-lg-3 mb-lg-5">Với thiết kế sang trọng và quý phái, sứ mệnh của chúng tôi là mang đến cho bạn trải nghiệm tốt nhất</p>

                <a href="/du-an" className="btn custom-btn">Dự án của chúng tôi</a>
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
            <h2 className="mb-5">Dự án nổi bật</h2>
          </div>

          <div className="col-lg-2 col-12 mt-auto mb-auto">
            <ul className="nav nav-pills mb-5 mx-auto justify-content-center align-items-center" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Giới thiệu</button>
              </li>

              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-youtube-tab" data-bs-toggle="pill" data-bs-target="#pills-youtube" type="button" role="tab" aria-controls="pills-youtube" aria-selected="true">Tổng thể dự án</button>
              </li>

              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-skill-tab" data-bs-toggle="pill" data-bs-target="#pills-skill" type="button" role="tab" aria-controls="pills-skill" aria-selected="false">Thành tựu</button>
              </li>
            </ul>
          </div>

          <div className="col-lg-10 col-12">
            <div className="tab-content mt-2" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                <div className="row">
                  <div className="col-lg-7 col-12">
                    <img src="/images/du-an/du-an-2/1e922dc65349e017b95818.jpg" className="img-fluid" alt="" />
                  </div>

                  <div className="col-lg-5 col-12">
                    <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                      <h4 className="mb-3">Dự án 80x80 m&sup2;<br />căn hộ sang trọng</h4>
                      <p>Dự án 80×80 m&sup2; tọa lạc ngay trung tâm thành phố, mang đến vị trí đắc địa thuận tiện kết nối mọi khu vực. Với thiết kế tối ưu không gian và phong cách hiện đại, dự án hứa hẹn đáp ứng đa dạng nhu cầu sử dụng.</p>
                      <p>Diện tích lý tưởng cho văn phòng, showroom hoặc không gian sáng tạo cá nhân. Tiện ích xung quanh đầy đủ, phù hợp để an cư hoặc đầu tư lâu dài.</p>
                      <div className="mt-2 mt-lg-auto">
                        <a href="/du-an/1" className="custom-link mb-2">
                          Tìm hiểu thêm dự án tại đây
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
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/XqZsoesa55w?si=fwzsZv69VAziN5ZI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                  </div>

                  <div className="col-lg-5 col-12">
                    <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                      <h4 className="mb-3">Tổng quan dự án</h4>
                      <p>Dự án 80×80 m² được xây dựng tại vị trí trung tâm thành phố, nơi giao thoa giữa tiện ích hiện đại và không gian sống lý tưởng. Được đầu tư bởi [Tên nhà đầu tư], công trình mang phong cách thiết kế châu Âu, tối ưu hóa công năng và thẩm mỹ.</p>
                      <p>Tổng diện tích 6.400 m² là nền tảng cho các giải pháp không gian đa năng, từ thương mại đến sinh hoạt. Dự án là minh chứng cho sự kết hợp giữa tầm nhìn chiến lược và giá trị bền vững trong phát triển đô thị.</p>
                      <div className="mt-2 mt-lg-auto">
                        <a href="contact.html" className="custom-link mb-2">
                          Liên hệ với chúng tôi
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
                    <img src="/images/du-an/du-an-2/a0c3dc96a2191147480820.jpg" className="img-fluid" alt="" />
                  </div>

                  <div className="col-lg-5 col-12">
                    <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                      <h4 className="mb-3">Thành tựu của chúng tôi</h4>
                      <p>Trong suốt ba năm qua, chúng tôi đã:</p>

                      <div className="skill-thumb mt-3">

                        <strong>Xây dựng</strong>
                        <span className="float-end">90+ công trình</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}></div>
                        </div>

                        <strong>Thiết kế và tư vấn</strong>
                        <span className="float-end">200+ dự án</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}></div>
                        </div>

                        <strong>Đã hoàn thành</strong>
                        <span className="float-end">80 công trình</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}></div>
                        </div>

                      </div>

                      <div className="mt-2 mt-lg-auto">
                        <a href="/du-an" className="custom-link mb-2">
                          Dự án của chúng tôi
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
    <section className="featured-product section-padding">
      <div className="container">
        <div className="col-12 text-center">
          <h2 className="mb-5">Dự án sắp tới</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-12 mb-3">
            <div className="product-thumb">
              <a href="/du-an/1">
                <img src="/images/du-an/du-an-1/4069ed6493eb20b579fa10.jpg" className="img-fluid product-image image-full" alt="Căn hộ 2 phòng ngủ" />
              </a>
              <div className="product-top d-flex">
                <span className="product-alert me-auto">Mới</span>
                <a href="#" className="bi-heart-fill product-icon"></a>
              </div>
              <div className="product-info d-flex">
                <div>
                  <h5 className="product-title mb-0">
                    <a href="/du-an/1" className="product-title-link">Căn hộ</a>
                  </h5>
                  <p className="product-p">2 phòng ngủ, 80×80 m&sup2;</p>
                </div>
                <small className="product-price text-muted ms-auto mt-auto mb-5">Q2-2024</small>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 mb-3">
            <div className="product-thumb">
              <a href="/du-an/2">
                <img src="/images/du-an/du-an-2/78e739b2473df463ad2c16.jpg" className="img-fluid product-image image-full" alt="" />
              </a>
              <div className="product-top d-flex">
                <span className="product-alert">Mới</span>
                <a href="#" className="bi-heart-fill product-icon ms-auto"></a>
              </div>
              <div className="product-info d-flex">
                <div>
                  <h5 className="product-title mb-0">
                    <a href="/du-an/2" className="product-title-link">Nhà</a>
                  </h5>
                  <p className="product-p">Nhà cấp 4, 40x100 m&sup2;, có bãi đậu ô tô</p>
                </div>
                <small className="product-price text-muted ms-auto mt-auto mb-5">Q4-2024</small>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="product-thumb">
              <a href="/du-an/3">
                <img src="/images/du-an/du-an-3/242356a3282c9b72c23d24.jpg" className="img-fluid product-image image-full" alt="" />
              </a>
              <div className="product-top d-flex">
                <a href="#" className="bi-heart-fill product-icon ms-auto"></a>
              </div>
              <div className="product-info d-flex">
                <div>
                  <h5 className="product-title mb-0">
                    <a href="/du-an/3" className="product-title-link">Căn hộ</a>
                  </h5>
                  <p className="product-p">Luxury, ngay trung tâm Quận 1</p>
                </div>
                <small className="product-price text-muted ms-auto mt-auto mb-5">Q1-2025</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 text-center">
          <a href="/du-an" className="view-all">Xem tất cả dự án</a>
        </div>
      </div>
    </section>
  </Fragment>);
}

export default Home;
