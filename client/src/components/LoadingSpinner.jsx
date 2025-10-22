const LoadingSpinner = ({ size = "large" }) => {
  const sizeClasses = {
    small: {
      outer: "w-10 h-10",
      border: "border-4"
    },
    medium: {
      outer: "w-16 h-16",
      border: "border-4"
    },
    large: {
      outer: "w-24 h-24",
      border: "border-[6px]"
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className="flex justify-center items-center">
      <div className="relative inline-block">
        {/* Rotating gradient border */}
        <div 
          className={`${currentSize.outer} rounded-full loading-spinner`}
          style={{
            background: `conic-gradient(
              from 0deg,
              #3B82F6 0%,
              #6366F1 25%,
              #8B5CF6 50%,
              #A855F7 75%,
              #3B82F6 100%
            )`,
            mask: "radial-gradient(farthest-side, transparent calc(100% - 6px), #fff calc(100% - 5px))",
            WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 6px), #fff calc(100% - 5px))"
          }}
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
