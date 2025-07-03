"use client"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full floating-animation"></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg rotate-45 floating-animation"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full floating-animation"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 right-40 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-lg floating-animation"
        style={{ animationDelay: "0.5s" }}
      ></div>

      {/* Additional decorative elements */}
      <div
        className="absolute top-1/3 left-1/4 w-8 h-8 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-full floating-animation"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute top-2/3 right-1/3 w-6 h-6 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full floating-animation"
        style={{ animationDelay: "2.5s" }}
      ></div>
    </div>
  )
}
