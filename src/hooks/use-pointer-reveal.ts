import { useEffect, useRef } from "react";

interface UsePointerRevealOptions {
  desktopRadius?: number;
  mobileRadius?: number;
  posLerp?: number;
  radiusLerp?: number;
}

export function usePointerReveal({
  desktopRadius = 220,
  mobileRadius = 140,
  posLerp = 0.14,
  radiusLerp = 0.12,
}: UsePointerRevealOptions = {}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // High-frequency values kept in refs to avoid React re-renders
  const rawPos = useRef<{ x: number; y: number }>({ x: -999, y: -999 });
  const smoothPos = useRef<{ x: number; y: number }>({ x: -999, y: -999 });
  const currentRadius = useRef<number>(0);
  const targetRadius = useRef<number>(0);
  const isTracking = useRef<boolean>(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = mediaQuery.matches;

    const handleMediaChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
    };
    mediaQuery.addEventListener("change", handleMediaChange);

    const isMobileViewport = () => window.innerWidth < 768;

    const updateCoordinates = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      rawPos.current = { x, y };

      // Initialize smooth position on first entry so it doesn't animate in from offscreen (-999)
      if (smoothPos.current.x < -500 || smoothPos.current.y < -500) {
        smoothPos.current = { x, y };
      }
    };

    // POINTER ENTER
    const handlePointerEnter = (e: PointerEvent) => {
      if (e.pointerType === "mouse") {
        isTracking.current = true;
        updateCoordinates(e.clientX, e.clientY);
        targetRadius.current = isMobileViewport() ? mobileRadius : desktopRadius;
      }
    };

    // POINTER MOVE
    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType === "mouse") {
        isTracking.current = true;
        updateCoordinates(e.clientX, e.clientY);
        targetRadius.current = isMobileViewport() ? mobileRadius : desktopRadius;
      } else if (isTracking.current) {
        // Touch move while tracking
        updateCoordinates(e.clientX, e.clientY);
      }
    };

    // POINTER LEAVE
    const handlePointerLeave = (e: PointerEvent) => {
      if (e.pointerType === "mouse") {
        isTracking.current = false;
        targetRadius.current = 0;
      }
    };

    // TOUCH DOWN
    const handlePointerDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") {
        isTracking.current = true;
        updateCoordinates(e.clientX, e.clientY);
        targetRadius.current = mobileRadius;
      }
    };

    // TOUCH UP / CANCEL
    const handlePointerUp = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") {
        isTracking.current = false;
        targetRadius.current = 0;
      }
    };

    const handlePointerCancel = () => {
      isTracking.current = false;
      targetRadius.current = 0;
    };

    // ANIMATION LOOP
    const animate = () => {
      const activeFactorPos = prefersReducedMotion ? 1 : posLerp;
      const activeFactorRadius = prefersReducedMotion ? 1 : radiusLerp;

      // Lerp position
      smoothPos.current.x += (rawPos.current.x - smoothPos.current.x) * activeFactorPos;
      smoothPos.current.y += (rawPos.current.y - smoothPos.current.y) * activeFactorRadius;

      // Lerp radius
      currentRadius.current += (targetRadius.current - currentRadius.current) * activeFactorRadius;

      // Precision clamp near zero
      if (targetRadius.current === 0 && currentRadius.current < 0.5) {
        currentRadius.current = 0;
      }

      // Update CSS variables directly on container element
      container.style.setProperty("--reveal-x", `${smoothPos.current.x.toFixed(1)}px`);
      container.style.setProperty("--reveal-y", `${smoothPos.current.y.toFixed(1)}px`);
      container.style.setProperty("--reveal-radius", `${currentRadius.current.toFixed(1)}px`);

      rafId.current = requestAnimationFrame(animate);
    };

    // Attach listeners
    container.addEventListener("pointerenter", handlePointerEnter, { passive: true });
    container.addEventListener("pointermove", handlePointerMove, { passive: true });
    container.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    container.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    window.addEventListener("pointercancel", handlePointerCancel, { passive: true });

    // Start RAF
    rafId.current = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener("pointerenter", handlePointerEnter);
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
      container.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerCancel);
      mediaQuery.removeEventListener("change", handleMediaChange);

      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [desktopRadius, mobileRadius, posLerp, radiusLerp]);

  return containerRef;
}
