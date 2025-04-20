function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <a class="navbar-brand" href="/">
          <strong><span>Phi</span> Design</strong>
        </a>

        <div class="d-lg-none">
          <a href="sign-in.html" class="bi-person custom-icon me-3"></a>

          <a href="/du-an/2" class="bi-bag custom-icon"></a>
        </div>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link active" href="/">Trang chủ</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/gioi-thieu">Giới thiệu</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/du-an">Dự án</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/lien-he">Liên hệ</a>
            </li>
          </ul>

          <div class="d-none d-lg-block">
            <a href="sign-in.html" class="bi-person custom-icon me-3"></a>

            <a href="/du-an/3" class="bi-bag custom-icon" hidden></a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
