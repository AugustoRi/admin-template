import Link from "next/link";

interface ItemProps {
  url?: string;
  text: string;
  icon: any;
  onClick?: (e: any) => void;
  className?: string;
}

export function Item({
  url,
  text,
  icon,
  onClick,
  className
} : ItemProps) {

  function renderLink() {
    return (
      <a className={`flex flex-col justify-center items-center dark:text-gray-200 text-gray-600 h-20 w-40 ${className}`}>
        {icon}
        <span className={`text-xs font-light`}>{text}</span>
      </a>
    );
  }

  return (
    <li 
      onClick={onClick} 
      className={`hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer`}
    >
      { url ? (
        <Link href={url}>
          {renderLink()}
        </Link>
      ) : (
        renderLink()
      )}
    </li>
  );
}