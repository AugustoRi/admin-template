import { useAppData } from "../../../data/hooks/UseAppData";
import { ToggleTheme } from "../../buttons/ToggleTheme";
import { Title } from "../Title";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export function Header({
  title, 
  subtitle,
} : HeaderProps) {

  const { theme, toggleTheme } = useAppData();

  return(
    <div className={`flex items-center`}>
      <Title title={title} subtitle={subtitle} />
      <div className={`flex flex-grow justify-end`}>
        <ToggleTheme theme={theme} toggleTheme={toggleTheme}/>
      </div>
    </div>
  )
}