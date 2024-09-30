"use client";
import Image from "next/image";

export default function Loading() {
    return (
        <div className="globalLoaderNotTransition">
            <Image src="/loading-animation.gif" alt="Loading..." width={500} height={42} />
        </div>
    );
}