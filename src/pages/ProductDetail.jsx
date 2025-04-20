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
              <img src={project?.projectMainURL} className="img-fluid product-image" alt="" />
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="product-info d-flex">
              <div>
                <h2 className="product-title mb-0">{project?.projectName}</h2>
                <p className="product-p">{project?.productDetail}</p>
              </div>
              <small className="product-price text-muted ms-auto mt-auto mb-5">$25</small>
            </div>

            <div className="product-description">
              <strong className="d-block mt-4 mb-2">Mô tả</strong>
              <p className="lead mb-5">{project?.projectDescription}</p>
            </div>

            <div className="product-cart-thumb row">
              <div className="col-lg-6 col-12 mt-4 mt-lg-0">
                <button type="submit" className="btn custom-btn cart-btn" data-bs-toggle="modal" data-bs-target="#cart-modal">Liên hệ báo giá</button>
              </div>

              <p>
                <a href="#" className="product-additional-link">Details</a>

                <a href="#" className="product-additional-link">Delivery and Payment</a>
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>

    <section className="related-product section-padding border-top">
      <div className="container">
        <div className="row">

          <div className="col-12">
            <h3 className="mb-5">You might also like</h3>
          </div>

          <div className="col-lg-4 col-12 mb-3">
            <div className="product-thumb">
              <a href="product-detail.html">
                <img src="images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg" className="img-fluid product-image" alt="" />
              </a>

              <div className="product-top d-flex">
                <span className="product-alert me-auto">New arrival</span>

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
                    <a href="product-detail.html" className="product-title-link">Fashion set</a>
                  </h5>

                  <p className="product-p">Costume package</p>
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

        </div>
      </div>
    </section>
  </Fragment>
  )
}

export default ProductDetail;
