import { MoonIcon, SunIcon } from "../icons";

interface ToggleThemeProps {
  theme: string;
  toggleTheme: () => void;
}

export function ToggleTheme({theme, toggleTheme} : ToggleThemeProps) {

  return theme === "dark" ? (
    <div 
      className={`cursor-pointer hidden sm:flex items-center gap-4 bg-gradient-to-r from-yellow-200
      to-yellow-600 w-14 lg:w-24 h-8 p-1 rounded-full`} 
      onClick={toggleTheme}
    >
      <div 
        className={`flex items-center justify-center w-6 h-6 rounded-full
        sm:bg-white lg:bg-transparent text-yellow-600
        `} 
      >
        {SunIcon(4)}
      </div>
      <div 
        className={`hidden lg:flex items-center`}
      >
        <span>{theme}</span>
      </div>
    </div>
    
  ) : (
    <div 
      className={`cursor-pointer hidden sm:flex items-center justify-end gap-5 bg-gradient-to-r from-gray-400
      to-gray-700 w-14 lg:w-24 h-8 p-1 rounded-full`} 
      onClick={toggleTheme}
    >
      <div 
        className={`hidden lg:flex items-center ml-3 text-black`}
      >
        <span>{theme}</span>
      </div>
      <div 
        className={`flex items-center justify-center w-6 h-6 rounded-full
        sm:bg-black lg:bg-transparent text-yellow-300
        `}
      >
        {MoonIcon(4)}
      </div>
    </div>
  );
}