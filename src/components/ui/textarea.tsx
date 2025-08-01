import * as React from "react";
import clsx from "clsx";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={clsx("border rounded px-3 py-2", className)}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
