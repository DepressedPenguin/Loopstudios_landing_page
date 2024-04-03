import "./style.css";
import icon_nav from "../../img/icon-hamburger.svg";
import "../DarkMode/darkmode.css";
import { useRef, useState } from "react";

type theme = {
  theme: string;
  modeHandler: () => void;
};

export default function Navbar({ theme, modeHandler }: theme) {
  console.log(theme);
  const [isnavDsiplay, setisnavDsiplay] = useState<boolean>(false);

  const sub_navRef = useRef<HTMLUListElement>(null);

  const onClickIcon = () => {
    if (isnavDsiplay) {
      setisnavDsiplay(false); // Toggle the state
      sub_navRef.current?.classList.add("visible_none");
      sub_navRef.current?.classList.remove("visible_show");
    } else {
      setisnavDsiplay(true); // Toggle the state
      sub_navRef.current?.classList.remove("visible_none");
      sub_navRef.current?.classList.add("visible_show");
    }
  };

  return (
    <>
      <div className={theme}>
        <header className="main_header background">
          <div className="logo_place">
            <h1>loopstdios</h1>
            <img
              onClick={onClickIcon}
              className="img_humb"
              src={icon_nav}
              alt="icon"
            />
          </div>
          <div className="sub_nav">
            <ul ref={sub_navRef} className="ul_nav visibale_none">
              <li className="li_navbar">About</li>
              <li className="li_navbar">Careers</li>
              <li className="li_navbar">Events</li>
              <li className="li_navbar">Products</li>
              <li className="li_navbar">Support</li>
              <div className="dark_Mode_div">
                {theme === "light" ? (
                  <i
                    onClick={modeHandler}
                    className="fa fa-adjust light_icon"
                  ></i>
                ) : (
                  <i
                    onClick={modeHandler}
                    className="fa fa-adjust dark_icon"
                  ></i>
                )}
              </div>
            </ul>
          </div>
          {/* Note */}
          <div className="note_navbar">
            <h1>
              IMMERSIVE
              <br />
              EXPERIENCES
              <br /> THAT DELIVER
            </h1>
          </div>
        </header>
      </div>
    </>
  );
}
