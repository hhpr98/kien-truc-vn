import { Fragment } from "react";

function Products() {
  return (
    <Fragment>
      <section className="products section-padding">
        <div className="container">
          <div className="col-12 text-center">
            <h2 className="mt-5 mb-5">Dự án mới</h2>
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
        </div>
      </section>
    </Fragment>
  )
}

export default Products;
