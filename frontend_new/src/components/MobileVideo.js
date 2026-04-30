"use client";

import React, { useEffect, useRef, useState } from "react";

export default function MobileVideo({
    src,
    className,
    eager = false,
    decorative = true,
    preload = "metadata",
    children,
}) {
    const videoRef = useRef(null);
    const isObserverUnavailable = typeof IntersectionObserver === "undefined";
    const [isNearViewport, setIsNearViewport] = useState(eager || isObserverUnavailable);
    const [shouldPlay, setShouldPlay] = useState(eager || isObserverUnavailable);

    useEffect(() => {
        const video = videoRef.current;

        if (!video) {
            return;
        }

        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;
        video.setAttribute("muted", "");
        video.setAttribute("playsinline", "");
        video.setAttribute("webkit-playsinline", "");
        video.setAttribute("disablepictureinpicture", "");

        if (eager || isObserverUnavailable) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsNearViewport(true);
                }

                setShouldPlay(entry.isIntersecting);
            },
            {
                rootMargin: "250px 0px",
                threshold: 0.15,
            }
        );

        observer.observe(video);

        return () => observer.disconnect();
    }, [eager, isObserverUnavailable]);

    useEffect(() => {
        const video = videoRef.current;

        if (!video || !isNearViewport) {
            return;
        }

        if (shouldPlay) {
            video.play().catch(() => {
                // Mobile browsers can still block autoplay in low-power or data-saver modes.
            });
        } else {
            video.pause();
        }
    }, [isNearViewport, shouldPlay]);

    return (
        <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload={isNearViewport ? preload : "none"}
            className={className}
            aria-hidden={decorative ? "true" : undefined}
        >
            {isNearViewport && <source src={src} type="video/mp4" />}
            {children}
        </video>
    );
}
