import { Fragment } from "react";

function About() {
  return (<Fragment>
    <header className="site-header section-padding-img site-header-image">
      <div className="container">
        <div className="row">

          <div className="col-lg-6 col-12 header-info">
            <h1>
              <span className="d-block text-primary">Phi Design</span>
              <span className="d-block text-dark">Uy tín - chất lượng</span>
            </h1>
          </div>
        </div>
      </div>

      <img src="/images/du-an/du-an-3/bca6f72789a83af663b925.jpg" className="header-image img-fluid" alt="" />
    </header>

    <section className="team section-padding">
      <div className="container">
        <div className="row">

          <div className="col-12">
            <h2 className="mb-5">Thành viên</h2>
          </div>

          <div className="col-lg-4 mb-4 col-12">
            <div className="team-thumb d-flex align-items-center">
              <img src="/images/thanh-vien/phi-1.jpg" className="img-fluid custom-circle-image team-image me-4" alt="" />

              <div className="team-info">
                <h5 className="mb-0">Phi Nguyễn</h5>
                <strong className="text-muted">Team lead, architecture</strong>

                {/* Button trigger modal */}
                <button type="button" className="btn custom-modal-btn" data-bs-toggle="modal" data-bs-target="#don">
                  <i className="bi-plus-circle-fill"></i>
                </button>

              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4 col-12">
            <div className="team-thumb d-flex align-items-center">
              <img src="/images/thanh-vien/phi-2.jpg" className="img-fluid custom-circle-image team-image me-4" alt="" />

              <div className="team-info">
                <h5 className="mb-0">Hành Phi</h5>
                <strong className="text-muted">Product Marketing</strong>

                {/* Button trigger modal */}
                <button type="button" className="btn custom-modal-btn" data-bs-toggle="modal" data-bs-target="#kelly">
                  <i className="bi-plus-circle-fill"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-lg-0 mb-4 col-12">
            <div className="team-thumb d-flex align-items-center">
              <img src="/images/thanh-vien/phi-3.jpg" className="img-fluid custom-circle-image team-image me-4" alt="" />

              <div className="team-info">
                <h5 className="mb-0">Quốc Phi</h5>
                <strong className="text-muted">Architect designer</strong>

                {/* Button trigger modal */}
                <button type="button" className="btn custom-modal-btn" data-bs-toggle="modal" data-bs-target="#marie">
                  <i className="bi-plus-circle-fill"></i>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="testimonial section-padding">
      <div className="container">
        <div className="row">

          <div className="col-lg-9 mx-auto col-11">
            <h2 className="text-center">Châm ngôn của chúng tôi</h2>

            <div className="slick-testimonial">
              <div className="slick-testimonial-caption">
                <p className="lead">Ngôi nhà tốt bắt đầu từ nền móng vững chắc.</p>

                <div className="slick-testimonial-client d-flex align-items-center mt-4">
                  <img src="/images/thanh-vien/phi-1.jpg" className="img-fluid custom-circle-image me-3" alt="" />

                  <span>Nguyễn Phi, <strong className="text-muted">Kiến trúc sư</strong></span>
                </div>
              </div>

              <div className="slick-testimonial-caption">
                <p className="lead">Không có công trình vĩ đại nào được xây trong một ngày.</p>

                <div className="slick-testimonial-client d-flex align-items-center mt-4">
                  <img src="/images/thanh-vien/phi-2.jpg" className="img-fluid custom-circle-image me-3" alt="" />

                  <span>Hành Phi, <strong className="text-muted">Product Marketing</strong></span>
                </div>
              </div>

              <div className="slick-testimonial-caption">
                <p className="lead">Xây dựng không chỉ tạo nên công trình, mà còn tạo nên tương lai.</p>

                <div className="slick-testimonial-client d-flex align-items-center mt-4">
                  <img src="/images/thanh-vien/phi-2.jpg" className="img-fluid custom-circle-image me-3" alt="" />
                  <span>Hành Phi, <strong className="text-muted">Product Marketing</strong></span>
                </div>
              </div>

              <div className="slick-testimonial-caption">
                <p className="lead">Xây dựng không chỉ là đặt từng viên gạch, mà là kiến tạo không gian sống, chắp cánh cho ước mơ và định hình diện mạo tương lai của một cộng đồng.</p>

                <div className="slick-testimonial-client d-flex align-items-center mt-4">
                  <img src="/images/thanh-vien/phi-3.jpg" className="img-fluid custom-circle-image me-3" alt="" />

                  <span>Quốc Phi, <strong className="text-muted">Architect designer</strong></span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </Fragment>);
}

export default About;
