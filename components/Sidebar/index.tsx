import NavLink from "./NavLink";
import styles from "./sidebar.module.css";

import { navigation } from "@/lib/navigation";

const Sidebar = ({}) => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.nav_links}>
                {navigation.map((link, index) => (
                    <NavLink
                        key={link.id || index}
                        title={link.title}
                    />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
