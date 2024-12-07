import cn from "classnames";
import styles from "@/screens/home/balance/balance.module.css";
import React from "react";

type NavLinkProps = {
    title: string;
};

const NavLink = ({ title }: NavLinkProps) => {

    return (

    <h1 className={cn("label-medium", styles.title)}>
        {title}
    </h1>

    );
};

export default NavLink;
