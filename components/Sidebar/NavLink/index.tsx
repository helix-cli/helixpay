import { usePathname } from "next/navigation";
import Link from "next/link";
import cn from "classnames";
import styles from "@/screens/home/balance/balance.module.css";
import React from "react";

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

    <h1 className={cn("label-medium", styles.title)}>
        {title}
    </h1>

    );
};

export default NavLink;
