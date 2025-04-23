import { useLocation } from "react-router-dom";

function NavBar() {
  const { pathname } = useLocation();

  const getActiveClass = (path, exact = true) => {
    return exact
      ? pathname === path
        ? 'active'
        : ''
      : pathname.startsWith(path)
        ? 'active'
        : ''
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand" href="/">
          <strong><span>Phi</span> Design</strong>
        </a>

        <div className="d-lg-none">
          {/* <a href="/dang-nhap" className="bi-person custom-icon me-3"></a> */}
          {/* <a href="/du-an" className="bi-bag custom-icon"></a> */}
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className={`nav-link ${getActiveClass('/')}`} href="/">Trang chủ</a>
            </li>

            <li className="nav-item">
              <a className={`nav-link ${getActiveClass('/gioi-thieu')}`} href="/gioi-thieu">Giới thiệu</a>
            </li>

            <li className="nav-item">
              <a className={`nav-link ${getActiveClass('/du-an', false)}`} href="/du-an">Dự án</a>
            </li>

            <li className="nav-item">
              <a className={`nav-link ${getActiveClass('/bao-gia')}`} href="/bao-gia">Báo giá</a>
            </li>
          </ul>

          <div className="d-none d-lg-block">
            {/* <a href="/dang-nhap" className="bi-person custom-icon me-3"></a> */}
            {/* <a href="/du-an" className="bi-bag custom-icon"></a> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
