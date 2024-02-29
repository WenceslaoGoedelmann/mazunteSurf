import { setCurrentUser } from "../../redux/user/userSlice";
import "./navbarStyles.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function NavarBasic() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={
              "https://fontmeme.com/permalink/240202/fd25bfc9825d0ce48aeeaad208e135b6.png"
            }
            alt="Logo"
            className="logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                {currentUser ? "" : "Iniciar sesión"}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/register">
                {currentUser ? "" : "Registrarse"}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/turno">
                Nuevo Turno
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/user">
                {currentUser ? "Mi Perfil" : ""}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/admin">
                {currentUser?.rol === "50yun4admin" ? "Admin" : ""}
              </a>
            </li>
            <li className="nav-item">
              {currentUser ? (
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => {
                    let confirmar = window.confirm("Quiere cerrar sesion?");
                    if (confirmar) {
                      navigate("/");
                      dispatch(setCurrentUser());
                    }else return
                  }}
                >
                  Cerrar Sesion
                </button>
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavarBasic;
