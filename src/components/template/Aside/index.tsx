import { Item } from "./item";

import { BellIcon, HomeIcon, LogoutIcon, SettingsIcon } from "../../icons";
import { Logo } from "./logo";

export function Aside() {
  return (
    <aside className={`dark:bg-gray-900 bg-gray-200 flex flex-col`}>
      <Logo />
      <ul className={`flex-grow`}>
        <Item url="/" text="Home" icon={HomeIcon()} />
        <Item url="/settings" text="Settings" icon={SettingsIcon()} />
        <Item url="/notifications" text="News" icon={BellIcon()} />
      </ul>
      <ul>
        <Item 
          className={`text-red-600 dark:text-red-400 hover:bg-red-400 hover:text-white dark:hover:text-white`}
          onClick={() => console.log("logout")} 
          text="Logout"
          icon={LogoutIcon()} />
      </ul>
    </aside>
  );
}