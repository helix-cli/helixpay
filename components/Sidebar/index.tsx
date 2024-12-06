import Link from "next/link";
import NavLink from "./NavLink";
import UpgradeToPro from "./UpgradeToPro";
import styles from "./sidebar.module.css";

import { navigation } from "@/lib/navigation";

type SidebarProps = {
    className?: string;
    visible: boolean;
};

const Sidebar = ({ className, visible }: SidebarProps) => {

    return (
        <div className={styles.sidebar}>
            <div className={styles.nav_links}>
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
        </div>
    );
};

export default Sidebar;
