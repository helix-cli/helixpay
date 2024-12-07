"use client";

import { useSignMessage } from 'wagmi'
import cn from "classnames";
import styles from "./signmessage.module.css";
export function SignMessage() {
    const { signMessage } = useSignMessage()

    return (
        <button
            className={cn("button-stroke", styles.btn_remove)}
            onClick={() => signMessage({ message: 'hello world' })}>
                Sign message
        </button>

    )
}
