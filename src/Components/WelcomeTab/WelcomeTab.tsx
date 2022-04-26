import React from "react";
import { welcomeWrapper, bgImage, button } from "./WelcomeTab.css";
import { Link } from "react-router-dom";

const WelcomeTab: React.FC = () => {
  return (
    <div className={welcomeWrapper}>
      <div>
        <Link to="/game">
          <div className={button}>
            <img
              draggable="false"
              src="https://4.downloader.disk.yandex.by/preview/367d94ea7912a784d6375b5731b43af51c6ca6b1227b29919712a191c0636d0f/inf/ikNiJQEduamqJqKkCnHd6psXdCmAC4p_oB5zFFjQm9pLqoeQy1MR6hOWX7UlRw8LALxda9C3fGW8UWXtHw3kRQ%3D%3D?uid=1130000014892791&filename=logoButton.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1130000014892791&tknv=v2&size=2850x1642"
            />
          </div>
        </Link>
        <img
          className={bgImage}
          draggable="false"
          src="https://1.downloader.disk.yandex.by/preview/21295d7e7756b1f4a74f14ca4ed48212ed035fe5a1c81fa2a050e7251c1c1f75/inf/5N5wRrGSi6eDsYNt50GbsgGWRqFAOcxPXBvuAERx_Ih3zP_5Al97hdl12b_F0vOFUHp6iMdUuhTjryq6AricPA%3D%3D?uid=1130000014892791&filename=logo.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1130000014892791&tknv=v2&size=2880x1642"
        />
      </div>
    </div>
  );
};

export default WelcomeTab;
