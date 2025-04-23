
import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

interface ButtonCustomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "default";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

const ButtonCustom = forwardRef<HTMLButtonElement, ButtonCustomProps>(({
  variant = "primary",
  size = "md",
  children,
  className,
  asChild = false,
  ...props
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50";
  
  const variantStyles = {
    primary: "bg-affc-blue text-white hover:bg-affc-blue/90 active:scale-[0.98]",
    secondary: "bg-affc-pink text-white hover:bg-affc-pink/90 active:scale-[0.98]",
    outline: "border border-affc-blue text-affc-blue hover:bg-affc-blue/10 active:scale-[0.98]",
    ghost: "text-affc-gray hover:bg-affc-blue/10 active:scale-[0.98]",
    default: "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98]"
  };
  
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  const Comp = asChild ? Slot : "button";
  
  return (
    <Comp
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </Comp>
  );
});

ButtonCustom.displayName = "ButtonCustom";

export { ButtonCustom };
