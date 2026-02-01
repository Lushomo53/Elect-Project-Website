function PageHeader({ title, subtitle, image, children }) {
  return (
    <div className="relative h-[90vh] md:h-[80vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/50 to-white/70 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        {/* Title */}
        <h1 className="text-7xl md:text-8xl font-extrabold text-green-700 leading-tight drop-shadow-md">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-gray-800 mt-4 max-w-3xl drop-shadow-sm">
          {subtitle}
        </p>

        {/* Children (e.g., buttons) */}
        {children && (
          <div className="mt-8 flex flex-col md:flex-row gap-4 items-center">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export default PageHeader;
