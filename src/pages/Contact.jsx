function Contact() {
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">

          <div className="col-lg-6 col-12">
            <h2 className="mb-4">Liên hệ và báo giá</h2>

            <form className="contact-form me-lg-5 pe-lg-3" role="form">

              <div className="form-floating">
                <input type="text" name="name" id="name" className="form-control" placeholder="Full name" required />

                <label htmlFor="name">Tên của bạn</label>
              </div>

              <div className="form-floating my-4">
                <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required />

                <label htmlFor="email">Địa chỉ email</label>
              </div>

              <div className="form-floating my-4">
                <input type="subject" name="subject" id="subject" className="form-control" placeholder="Subject" required />

                <label htmlFor="subject">Tiêu đề</label>
              </div>

              <div className="form-floating mb-4">
                <textarea id="message" name="message" className="form-control" placeholder="Leave a comment here" required style={{ height: "160px" }}></textarea>

                <label htmlFor="message">Vui lòng điền thông tin bạn cần</label>
              </div>

              <div className="col-lg-5 col-6">
                <button type="submit" className="form-control">Gửi</button>
              </div>
            </form>
          </div>

          <div className="col-lg-6 col-12 mt-5 ms-auto">
            <div className="row">
              <div className="col-6 border-end contact-info">
                <h6 className="mb-3">Office</h6>

                <a href="mailto:phi.nguyen@gmail.com" className="custom-link">
                  phi.nguyen@gmail.com
                  <i className="bi-arrow-right ms-2"></i>
                </a>
              </div>

              <div className="col-6 contact-info">
                <h6 className="mb-3">Zalo</h6>

                <a href="https://zalo.me/0968960057" target="_blank" className="custom-link">
                  0968960057
                  <i className="bi-arrow-right ms-2"></i>
                </a>
              </div>

              <div className="col-6 border-top border-end contact-info">
                <h6 className="mb-3">Địa chỉ</h6>

                <p className="text-muted">123 Hồ Chí Minh, VN</p>
              </div>

              <div className="col-6 border-top contact-info">
                <h6 className="mb-3">Kênh</h6>

                <ul className="social-icon">
                  <li><a href="https://m.me/6643041375818745" className="social-icon-link bi-messenger"></a></li>
                  <li><a href="#" className="social-icon-link bi-youtube"></a></li>
                  <li><a href="#" className="social-icon-link bi-instagram"></a></li>
                  <li><a href="#" className="social-icon-link bi-whatsapp"></a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact;
