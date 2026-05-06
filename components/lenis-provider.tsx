"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense, useRef } from "react";

function ScrollHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lenis = useLenis();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (!lenis) return;

    if (pathname === "/") {
      const scrollToId = searchParams.get("scrollTo");
      if (scrollToId) {
        // Wait a brief moment to ensure layout is ready
        setTimeout(() => {
          const element = document.getElementById(scrollToId);
          if (element) {
            lenis.scrollTo(element, { offset: -80, duration: 1.5 });
            window.history.replaceState(null, "", `/#${scrollToId}`);
          }
        }, 100);
        return;
      }
    }

    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      // Cross-page navigation (fallback if regular hash is used):
      if (window.location.hash) {
        const hash = window.location.hash;
        const jump = () => {
          try {
            const element = document.querySelector(hash) as HTMLElement;
            if (element) {
              lenis.scrollTo(element, { immediate: true, offset: -80 });
            }
          } catch (e) {}
        };
        jump();
        setTimeout(jump, 50);
        setTimeout(jump, 150);
        setTimeout(jump, 300);
      } else {
        // No hash, ensure we are at the top for a new page
        lenis.scrollTo(0, { immediate: true });
      }
    }
  }, [pathname, searchParams, lenis]);

  return null;
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        wheelMultiplier: 0.8,
        smoothWheel: true,
        syncTouch: false,
      }}
    >
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
      {children}
    </ReactLenis>
  );
}
