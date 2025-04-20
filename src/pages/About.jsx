import { Fragment } from "react";

function About() {
  return (<Fragment>
    <header class="site-header section-padding-img site-header-image">
      <div class="container">
        <div class="row">

          <div class="col-lg-6 col-12 header-info">
            <h1>
              <span class="d-block text-primary">Phi Design</span>
              <span class="d-block text-dark">Uy tín - chất lượng</span>
            </h1>
          </div>
        </div>
      </div>

      <img src="/images/du-an/du-an-3/bca6f72789a83af663b925.jpg" class="header-image img-fluid" alt="" />
    </header>

    <section class="team section-padding">
      <div class="container">
        <div class="row">

          <div class="col-12">
            <h2 class="mb-5">Thành viên</h2>
          </div>

          <div class="col-lg-4 mb-4 col-12">
            <div class="team-thumb d-flex align-items-center">
              <img src="/images/thanh-vien/phi-1.jpg" class="img-fluid custom-circle-image team-image me-4" alt="" />

              <div class="team-info">
                <h5 class="mb-0">Phi Nguyễn</h5>
                <strong class="text-muted">Team lead, architecture</strong>

                {/* Button trigger modal */}
                <button type="button" class="btn custom-modal-btn" data-bs-toggle="modal" data-bs-target="#don">
                  <i class="bi-plus-circle-fill"></i>
                </button>

              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-4 col-12">
            <div class="team-thumb d-flex align-items-center">
              <img src="/images/thanh-vien/phi-2.jpg" class="img-fluid custom-circle-image team-image me-4" alt="" />

              <div class="team-info">
                <h5 class="mb-0">Hành Phi</h5>
                <strong class="text-muted">Product Marketing</strong>

                {/* Button trigger modal */}
                <button type="button" class="btn custom-modal-btn" data-bs-toggle="modal" data-bs-target="#kelly">
                  <i class="bi-plus-circle-fill"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-lg-0 mb-4 col-12">
            <div class="team-thumb d-flex align-items-center">
              <img src="/images/thanh-vien/phi-3.jpg" class="img-fluid custom-circle-image team-image me-4" alt="" />

              <div class="team-info">
                <h5 class="mb-0">Quốc Phi</h5>
                <strong class="text-muted">Architect designer</strong>

                {/* Button trigger modal */}
                <button type="button" class="btn custom-modal-btn" data-bs-toggle="modal" data-bs-target="#marie">
                  <i class="bi-plus-circle-fill"></i>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="testimonial section-padding">
      <div class="container">
        <div class="row">

          <div class="col-lg-9 mx-auto col-11">
            <h2 class="text-center">Châm ngôn của chúng tôi</h2>

            <div class="slick-testimonial">
              <div class="slick-testimonial-caption">
                <p class="lead">Ngôi nhà tốt bắt đầu từ nền móng vững chắc.</p>

                <div class="slick-testimonial-client d-flex align-items-center mt-4">
                  <img src="/images/thanh-vien/phi-1.jpg" class="img-fluid custom-circle-image me-3" alt="" />

                  <span>Nguyễn Phi, <strong class="text-muted">Kiến trúc sư</strong></span>
                </div>
              </div>

              <div class="slick-testimonial-caption">
                <p class="lead">Không có công trình vĩ đại nào được xây trong một ngày.</p>

                <div class="slick-testimonial-client d-flex align-items-center mt-4">
                  <img src="/images/thanh-vien/phi-2.jpg" class="img-fluid custom-circle-image me-3" alt="" />

                  <span>Hành Phi, <strong class="text-muted">Product Marketing</strong></span>
                </div>
              </div>

              <div class="slick-testimonial-caption">
                <p class="lead">Xây dựng không chỉ tạo nên công trình, mà còn tạo nên tương lai.</p>

                <div class="slick-testimonial-client d-flex align-items-center mt-4">
                  <img src="/images/thanh-vien/phi-2.jpg" class="img-fluid custom-circle-image me-3" alt="" />
                  <span>Hành Phi, <strong class="text-muted">Product Marketing</strong></span>
                </div>
              </div>

              <div class="slick-testimonial-caption">
                <p class="lead">Xây dựng không chỉ là đặt từng viên gạch, mà là kiến tạo không gian sống, chắp cánh cho ước mơ và định hình diện mạo tương lai của một cộng đồng.</p>

                <div class="slick-testimonial-client d-flex align-items-center mt-4">
                  <img src="/images/thanh-vien/phi-3.jpg" class="img-fluid custom-circle-image me-3" alt="" />

                  <span>Quốc Phi, <strong class="text-muted">Architect designer</strong></span>
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
