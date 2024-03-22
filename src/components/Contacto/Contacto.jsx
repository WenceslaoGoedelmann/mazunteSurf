import React from "react";

const Contacto = () => {
  return (
    <div className="container px-5 ">
      <div className="row  align-items-center ">
        <div className="col p-3  justify-content-center">
          <div className="d-flex flex-column  row-gap-3">
            <b>Contacto:</b>
            <span>
              <i class="bi bi-whatsapp"></i>+ 52 123 12345678
            </span>
            <span>
              <i className="bi bi-envelope"></i> info@mazuntesurf.com.mx
            </span>
            <span>
              <i className="bi bi-geo-alt"></i> PLAYA RINCONCITO SN, 70946
              Mazunte, Oax.
            </span>
            <b>Nuestras Redes:</b>
            <div className="d-flex  column-gap-3">
              <a href="https://www.instagram.com/" target="_blank">
                <img src={"https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"}  width="36" height="36" alt="..."/>
              </a>
              <a href="https://www.facebook.com/" target="_blank">
              <img src={"https://upload.wikimedia.org/wikipedia/commons/9/9d/Facebook-logo.png"} width="36" height="36" alt="..."/>
              </a>
              <a href="https://www.youtube.com/" target="_blank">
              <img src={"https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"} width="80" height="36"alt="..."/>
              </a>
            </div>
          </div>
        </div>
        <div className="col p-3 text-center ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d960.4106771569624!2d-96.5563489305061!3d15.664003290358568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDM5JzUwLjQiTiA5NsKwMzMnMjAuNSJX!5e0!3m2!1ses-419!2smx!4v1708469043089!5m2!1ses-419!2smx"
            width="250"
            height="250"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
