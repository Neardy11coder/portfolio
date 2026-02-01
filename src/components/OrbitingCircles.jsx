import React from "react";
import { twMerge } from "tailwind-merge";

export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
}) {
  const calculatedDuration = duration / speed;
  const count = React.Children.count(children);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 pointer-events-none size-full"
        >
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            className="stroke-1 stroke-white/10"
          />
        </svg>
      )}

      {React.Children.map(children, (child, index) => {
        const angle = (360 / count) * index;

        return (
          <div
            style={{
              "--duration": `${calculatedDuration}s`,
              "--radius": `${radius}px`,
              "--angle": `${angle}deg`,
              "--icon-size": `${iconSize}px`,
            }}
            className={twMerge(
              "absolute flex items-center justify-center rounded-full " +
                "size-[var(--icon-size)] transform-gpu animate-orbit",
              reverse && "[animation-direction:reverse]",
              className
            )}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
