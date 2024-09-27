import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-all duration-500", // Add transition-all and duration for hover
  {
    variants: {
      variant: {
        default: "bg-accent text-primary hover:bg-accent-hover",
        primary: "bg-primary text-white",
        outline: "border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary",
      },
      size: {
        default: "h-[44px] px-6",
        md: "h-[44px] px-6",
        lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, loading = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        buttonVariants({ variant, size, className }),
        "hover:scale-[1.1] hover:-translate-y-1 hover:shadow-[0_0_25px_#00ff99]",
        { "opacity-50 cursor-not-allowed": loading } // Apply styles when loading
      )}
      ref={ref}
      disabled={loading} // Disable button when loading
      {...props}
    >
      {loading ? (
        <>
          <span className="loader"></span> {/* Loading spinner */}
          Loading...
        </>
      ) : (
        props.children // Render children when not loading
      )}
    </Comp>
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
