import "./navbarStyles.css";

function NavarBasic() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src={
              "https://fontmeme.com/permalink/240202/fd25bfc9825d0ce48aeeaad208e135b6.png"
            }
            alt="Logo"
            className="logo"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/register">
                Register
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/verify">
                Verify
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/turno">
                Sacar Nuevo Turno
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/user">
                Mi Perfil
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin">
                Admin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavarBasic;
