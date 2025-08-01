import * as React from "react";
import clsx from "clsx";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variantClasses =
      variant === "outline"
        ? "border border-gray-300 text-gray-700 bg-white"
        : "bg-blue-600 text-white";
    return (
      <button
        ref={ref}
        className={clsx(
          "px-4 py-2 rounded font-medium", variantClasses, className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
