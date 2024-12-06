import Link from "next/link";
import NavLink from "./NavLink";
import UpgradeToPro from "./UpgradeToPro";

import { navigation } from "@/lib/navigation";

type SidebarProps = {
    className?: string;
    visible: boolean;
};

const Sidebar = ({ className, visible }: SidebarProps) => {

    return (
        <div
            className={`fixed top-0 left-0 bottom-0 z-20 flex flex-col pt-24 bg-theme-on-surface-1 md:pt-20 ${
                visible
                    ? "w-[21.25rem] pb-20 2xl:w-76 xl:shadow-depth-1 md:w-full md:pb-0"
                    : "w-20 pb-[9.25rem]"
            } ${className || ""}`}
        >
            <div
                className={`absolute top-0 left-0 right-0 flex items-center h-24 md:hidden ${
                    visible ? "px-7" : "px-4"
                }`}
            >
                <Link
                    className="flex justify-center items-center w-12 h-12"
                    href="/"
                >
                </Link>
            </div>
            <div
                className={`flex flex-col grow overflow-auto scroll-smooth scrollbar-none md:pb-6 ${
                    visible ? "px-6 md:px-4" : "px-4"
                }`}
            >
                <div className="flex flex-col space-y-2 mb-auto">
                    {navigation.map((link) => (
                        <NavLink
                            title={link.title}
                            icon={link.icon}
                            url={link.url}
                            key={link.id}
                            visible={visible}
                        />
                    ))}
                </div>
                {visible && <UpgradeToPro />}
                <div className="hidden flex-col mt-6 pt-4 border-t border-theme-stroke space-y-1 md:flex">
                    <NavLink
                        title="Contact support"
                        icon="support"
                        url="/support"
                        visible={visible}
                    />

                    <NavLink
                        title="News"
                        icon="news"
                        url="/news"
                        visible={visible}
                    />
                    <NavLink
                        title="Log out"
                        icon="logout"
                        url="/sign-up"
                        visible={visible}
                    />
                </div>
            </div>
            <div
                className={`absolute left-0 right-0 bottom-0 pb-6 md:hidden ${
                    visible ? "pt-4 px-6" : "pt-2 px-4"
                }`}
            >
            </div>
        </div>
    );
};

export default Sidebar;
