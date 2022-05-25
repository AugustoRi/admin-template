import { ReactNode } from "react";
import { Aside } from "../Aside";
import { Header } from "../Header";
import { Content } from "../Content";

import { useAppData } from "../../../data/hooks/UseAppData";

interface LayoutProps {
  title: string;
  subtitle: string;
  children ?: ReactNode;
}

export function Layout({
  title, 
  subtitle,
  children
} : LayoutProps) {

  const { theme } = useAppData();

  return(
    <div className={`${theme} flex h-screen w-screen`}>
      <Aside />
      <div className={`flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800`}>
        <Header title={title} subtitle={subtitle} />
        <Content>
          {children}
        </Content>
      </div>
    </div>
  )
}