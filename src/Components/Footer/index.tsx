import "./style.css";

type theme = {
  theme: string;
};

export default function Footer({ theme }: theme) {
  return (
    <>
      <div className={theme}>
        <footer className="footer_section background text">
          <div className="logoname">
            <div className="logo_footer text">
              <h1>loopstdios</h1>
            </div>
            <ul className="ul-footer">
              <div className="social_meda_icons">
                <a href="#" className="fa fa-facebook icon_w3 color"></a>
              </div>
              <div className="social_meda_icons">
                <a href="#" className="fa fa-twitter icon_w3 color"></a>
              </div>
              <div className="social_meda_icons">
                <a href="#" className="fa fa-pinterest icon_w3 color"></a>
              </div>
              <div className="social_meda_icons">
                <a href="#" className="fa fa-instagram icon_w3 color"></a>
              </div>
            </ul>
          </div>
          <div className="social_media">
            <ul className="ul_footer_two">
              <li className="li_footer_two">About</li>
              <li className="li_footer_two">Careers</li>
              <li className="li_footer_two">Evenets</li>
              <li className="li_footer_two">Products</li>
              <li className="li_footer_two">Support</li>
            </ul>
            <div className="copyright_s text">
              <p>@2024 Loopstudios. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
