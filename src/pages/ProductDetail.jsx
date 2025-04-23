import { Fragment, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom'
import projects from '../assets/projects.json';

const ProductDetail = () => {
  const { id } = useParams();

  const [project, setProject] = useState(null);

  useEffect(() => {
    const projectData = projects[id];
    setProject(projectData);
  }, [id]);

  return (<Fragment>
    <section className="product-detail section-padding">
      <div className="container">
        <div className="row">

          <div className="col-lg-6 col-12">
            <div className="product-thumb">
              <img src={project?.projectMainURL} className="img-fluid product-image mt-5" alt="" />
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="product-info d-flex">
              <div>
                <h2 className="product-title mb-0">{project?.projectName}</h2>
                <p className="product-p">{project?.productDetail}</p>
              </div>
            </div>

            <div className="product-description">
              <strong className="d-block mt-4 mb-2">Giá xây dựng</strong>
              <p className="product-p mb-5">{project?.projectPrice}</p>
            </div>

            <div className="product-description">
              <strong className="d-block mt-4 mb-2">Mô tả</strong>
              <p className="text-muted mb-5">{project?.projectDescription}</p>
            </div>

            <div className="product-cart-thumb row">
              <div className="col-lg-6 col-12 mt-4 mt-lg-0">
                <button type="submit" className="btn custom-btn cart-btn" data-bs-toggle="modal" data-bs-target="#cart-modal">Liên hệ báo giá</button>
              </div>
              <p>
                <a href="#" className="product-additional-link">Chi tiết</a>
                <a href="https://zalo.me/0379596083" className="product-additional-link">Thanh toán cọc</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="related-product section-padding border-top">
      <div className="container">
        <div className="col-12 text-center">
          <h2 className="mb-5">Hình ảnh dự án</h2>
        </div>
        <div className="row">
          {project?.projectImages?.map((image, index) => (
            <div className="col-lg-4 col-md-6 col-12 mb-4" key={index}>
              <div className="related-product-thumb">
                <img src={image?.imageURL} className="img-fluid related-product-image" alt={image?.imageName} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="related-product section-padding border-top">
      <div className="container">
        <div className="col-12 text-center">
          <h2 className="mb-5">Có thể bạn sẽ quan tâm</h2>
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
    {/* CART MODAL */}
    <div className="modal fade" id="cart-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content border-0">
          <div className="modal-header flex-column">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
            <div className="row">
              <div className="col-lg-12 col-12 mt-4 mt-lg-0">
                <img src="/images/trang-chu/bao-gia.PNG" className="img-fluid product-image" alt="" />
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-6 col-12 mt-4 mt-lg-0">
                <img src={project?.projectMainURL} className="img-fluid product-image image-full" alt="" />
              </div>

              <div className="col-lg-6 col-12 mt-3 mt-lg-0">
                <h3 className="modal-title" id="exampleModalLabel">{project?.projectName}</h3>
                <p className="product-p mt-2">Giá: <span className="ms-1">{project?.projectPrice}</span></p>
                <p className="product-p">Loại: <span className="ms-1">Chưa xác định</span></p>

              </div>
            </div>
          </div>

          <div className="modal-footer">
            <div className="row w-50">
              <a type="button" className="btn custom-btn cart-btn ms-lg-4" href="https://zalo.me/0379596083" target="_blank">Liên hệ</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </Fragment>
  )
}

export default ProductDetail;
