import React from "react";

const Footer = () => {
  return (
    <div className="footer container-fluid">
      <hr />
      <div className="row">
        <div className="tmdb-logo-container col-sm-2">
          <h3>Powered by</h3>
          <a href="https://www.themoviedb.org/">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt=""
            />
          </a>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Footer;
