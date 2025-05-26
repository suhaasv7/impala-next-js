import { Metadata } from "next";

export const metadata: Metadata = {
  title: "1966 Chevrolet Impala SS - Complete Specifications | Car Database",
  description:
    "Detailed specifications for the 1966 Chevrolet Impala SS including engine options, performance data, dimensions, and features. The ultimate muscle car reference.",
  keywords:
    "1966 Chevrolet Impala SS, muscle car specs, V8 engine, classic car, Super Sport, automotive specifications",
  openGraph: {
    title: "1966 Chevrolet Impala SS - Complete Specifications",
    description: "Detailed specs for the legendary 1966 Impala SS muscle car",
    images: ["/impala-specs-og.jpg"],
  },
};

export default function HomePage() {
  const specifications = [
    {
      category: "Engine Options",
      specs: [
        { label: "Base Engine", value: "283 cu in (4.6L) V8" },
        { label: "Optional Engine", value: "327 cu in (5.4L) V8" },
        { label: "High Performance", value: "396 cu in (6.5L) V8" },
        { label: "Top Option", value: "427 cu in (7.0L) V8" },
      ],
    },
    {
      category: "Performance",
      specs: [
        { label: "Horsepower (427)", value: "425 HP @ 5,600 RPM" },
        { label: "Torque (427)", value: "460 lb-ft @ 4,000 RPM" },
        { label: "0-60 mph", value: "5.4 seconds" },
        { label: "Quarter Mile", value: "13.8 @ 103 mph" },
      ],
    },
    {
      category: "Dimensions",
      specs: [
        { label: "Length", value: "213.2 inches" },
        { label: "Width", value: "79.9 inches" },
        { label: "Height", value: "55.4 inches" },
        { label: "Wheelbase", value: "119 inches" },
      ],
    },
    {
      category: "Transmission",
      specs: [
        { label: "Manual", value: "3-speed / 4-speed manual" },
        { label: "Automatic", value: "Turbo Hydra-Matic 3-speed" },
        { label: "Rear Axle", value: "12-bolt Positraction available" },
        { label: "Final Drive", value: "2.73:1 to 4.56:1 ratios" },
      ],
    },
    {
      category: "Suspension & Brakes",
      specs: [
        {
          label: "Front Suspension",
          value: "Independent A-arms, coil springs",
        },
        { label: "Rear Suspension", value: "Live axle, leaf springs" },
        { label: "Brakes", value: "Power-assisted drums (front & rear)" },
        { label: "Steering", value: "Power steering available" },
      ],
    },
    {
      category: "Production & Pricing",
      specs: [
        { label: "Production Total", value: "119,314 units" },
        { label: "Base Price (1966)", value: "$2,947" },
        { label: "SS Package", value: "$161 option" },
        { label: "427 Engine", value: "$312 option" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-8 py-8 sm:py-16">
        {/* Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            1966 Chevrolet Impala SS
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Complete technical specifications for the legendary Super Sport
            muscle car
          </p>
        </header>

        {/* Hero Image */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="relative inline-block rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="1966 Chevrolet Impala SS"
              className="w-full max-w-4xl h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm sm:text-base font-semibold">
                Classic American Muscle - Super Sport Package
              </p>
            </div>
          </div>
        </div>

        {/* Specifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16">
          {specifications.map((section, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-400">
                {section.category}
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {section.specs.map((spec, specIndex) => (
                  <div
                    key={specIndex}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-white/10 pb-2"
                  >
                    <span className="text-gray-300 font-medium text-sm sm:text-base">
                      {spec.label}
                    </span>
                    <span className="text-white font-semibold text-sm sm:text-base mt-1 sm:mt-0">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-6 sm:p-8 border border-blue-400/30 max-w-5xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
            About the Super Sport Package
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-center">
            The 1966 Chevrolet Impala SS was the pinnacle of Chevrolet's
            full-size muscle car lineup. The Super Sport package included
            distinctive styling elements, performance-oriented suspension, and
            access to Chevrolet's most powerful engine options. With its
            combination of luxury, style, and raw power, the '66 Impala SS
            remains one of the most sought-after classic American muscle cars
            today.
          </p>
        </div>

        {/* Key Features Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12 sm:mb-16">
          <div className="text-center p-4 sm:p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl sm:text-4xl mb-2">🚀</div>
            <h3 className="font-bold text-blue-400 mb-2">427 V8</h3>
            <p className="text-sm text-gray-300">425 HP Beast</p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl sm:text-4xl mb-2">⚡</div>
            <h3 className="font-bold text-blue-400 mb-2">5.4 Seconds</h3>
            <p className="text-sm text-gray-300">0-60 MPH</p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl sm:text-4xl mb-2">🏁</div>
            <h3 className="font-bold text-blue-400 mb-2">13.8 @ 103</h3>
            <p className="text-sm text-gray-300">Quarter Mile</p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl sm:text-4xl mb-2">🎯</div>
            <h3 className="font-bold text-blue-400 mb-2">119,314</h3>
            <p className="text-sm text-gray-300">Units Produced</p>
          </div>
        </div>
      </div>
    </div>
  );
}
