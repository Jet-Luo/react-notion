import { useState, useEffect } from "react";

export function useScrollTop(threshold: number = 10) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > threshold) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // return相当于componentWillUnmount/onUnmounted，作用是在组件卸载时移除事件监听器，防止内存泄漏
    }, [threshold]);

    return scrolled;
}