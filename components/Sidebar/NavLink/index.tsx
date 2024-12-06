import { usePathname } from "next/navigation";
import Link from "next/link";

type NavLinkProps = {
    title: string;
    icon: string;
    url?: any;
    onClick?: () => void;
    visible?: boolean;
};

const NavLink = ({ title, icon, url, onClick, visible }: NavLinkProps) => {
    const CreatedTag = url ? Link : "button";
    const pathname = usePathname();
    const active = pathname === url;
    const notification = url === "/notification";

    return (
        <CreatedTag
            className={`group flex items-center h-12 rounded-full text-theme-secondary transition-colors hover:text-theme-primary ${
                visible ? "px-4 md:px-5" : "px-3"
            } ${active ? "bg-theme-on-surface-2 !text-theme-primary" : ""}`}
            href={url}
            onClick={onClick}
        >
            <div className="relative">

                {notification && (
                    <div className="absolute top-0 right-0 w-3 h-3 border-2 border-theme-on-surface-1 bg-theme-red rounded-full"></div>
                )}
            </div>
            <div className={`ml-4 text-base-1s ${visible ? "" : "hidden"}`}>
                {title}
            </div>

        </CreatedTag>
    );
};

export default NavLink;
