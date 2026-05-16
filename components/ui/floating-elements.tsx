"use client"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full floating-animation"></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-lg rotate-45 floating-animation"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-accent-muted/15 rounded-full floating-animation"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 right-40 w-24 h-24 bg-accent/5 rounded-lg floating-animation"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute top-1/3 left-1/4 w-8 h-8 bg-accent-hover/15 rounded-full floating-animation"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute top-2/3 right-1/3 w-6 h-6 bg-accent/10 rounded-full floating-animation"
        style={{ animationDelay: "2.5s" }}
      ></div>
    </div>
  )
}
