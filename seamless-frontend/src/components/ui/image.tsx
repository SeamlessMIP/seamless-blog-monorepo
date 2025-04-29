
import * as React from "react"
import { cn } from "@/lib/utils"

const Image = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, alt, ...props }, ref) => {
  return (
    <img
      className={cn("max-w-full h-auto", className)}
      alt={alt}
      ref={ref}
      {...props}
    />
  )
})
Image.displayName = "Image"

export { Image }
