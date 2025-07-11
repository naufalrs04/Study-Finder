import Link from "next/link";
import React from "react";
import { Share } from "lucide-react";
import Image from "next/image";

function VisualLearningPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <style jsx>{`
        @keyframes floating {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .floating-animation {
          animation: floating 3s ease-in-out infinite;
        }
      `}</style>
      {/* Share Button - Desktop */}
      <div className="absolute top-6 right-25 z-20 hidden lg:block">
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full flex items-center gap-2 font-medium shadow-lg transition-colors">
          <Share size={20} />
          Share
        </button>
      </div>

      {/* Share Button - Mobile/Tablet */}
      <div className="absolute top-6 right-6 z-20 lg:hidden">
        <button className="bg-white hover:bg-gray-50 text-cyan-600 px-4 py-2 rounded-full flex items-center gap-2 font-medium shadow-lg transition-colors border border-gray-200">
          <Share size={20} />
          Share
        </button>
      </div>

      {/* Background Circle - Desktop */}
      <div className="absolute top-0 left-0 z-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] overflow-hidden hidden lg:block">
        <div className="absolute w-[120%] h-[120%] bg-gradient-to-b from-[#7FD8E8] to-[#0798C5] rounded-full -top-1/4 -left-1/4"></div>
      </div>

      {/* Background Circle - Mobile/Tablet - Full width at top */}
      <div className="absolute top-0 left-0 w-full h-[60vh] z-10 lg:hidden overflow-hidden">
        <div className="absolute w-[150%] h-[150%] bg-gradient-to-b from-[#7FD8E8] to-[#0798C5] rounded-b-full -top-1/4 left-1/2 transform -translate-x-1/2"></div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex container mx-auto px-6 py-12 items-center justify-center gap-8 min-h-screen">
        {/* Left Side - Character */}
        <div className="flex">
          {/* Main Character */}
          <div className="relative z-20 floating-animation">
            <Image
              src="/assets/visuall.png"
              alt="visual image"
              width={400}
              height={300}
              className="w-[500px] h-[500px] sm:w-[550px] sm:h-[550px] md:w-[699px] md:h-[600px] object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 max-w-md relative">
          {/* Header */}
          <div className="mb-8 text-right">
            <h2 className="text-cyan-600 text-3xl font-bold mb-2">
              Gaya belajar kamu
            </h2>
            <h1 className="text-9xl font-extrabold text-black mb-6">Visual</h1>
          </div>

          {/* Description */}
          <div className="mb-8 text-right">
            <p className="text-[#A4A4A4] text-lg font-semibold leading-relaxed">
              Pembelajar visual adalah individu yang lebih mudah menyerap dan
              mengingat informasi ketika disajikan dalam bentuk visual, seperti
              diagram, bagan, peta, grafik, dan gambar. Mereka cenderung
              berpikir dalam bentuk gambar dan lebih mudah memahami konsep yang
              kompleks jika disajikan secara visual.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-end">
            <button className="px-8 py-3 border-2 border-cyan-500 text-cyan-600 rounded-full font-medium hover:bg-cyan-50 transition-colors">
              Re-take
            </button>
            <button className="px-8 py-3 bg-cyan-500 text-white rounded-full font-medium hover:bg-cyan-600 transition-colors shadow-lg">
              Okay
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden min-h-screen flex flex-col">
        {/* Top Section - Image overlaid on gradient */}
        <div className="relative h-[60vh] flex items-center justify-center">
          <div className="relative z-20 floating-animation">
            <Image
              src="/assets/visuall.png"
              alt="visual image"
              width={400}
              height={300}
              className="w-[500px] h-[500px] sm:w-[550px] sm:h-[550px] md:w-[699px] md:h-[600px] object-contain"
              priority
            />
          </div>
        </div>

        {/* Bottom Section - Content */}
        <div className="flex-1 px-6 py-8 relative z-10 bg-white">
          {/* Header */}
          <div className="mb-6 text-center">
            <h2 className="text-cyan-600 text-2xl sm:text-3xl font-bold mb-2">
              Gaya belajar kamu
            </h2>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-black mb-4">
              Visual
            </h1>
          </div>

          {/* Description */}
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <p className="text-[#A4A4A4] text-base sm:text-lg font-semibold leading-relaxed">
              Pembelajar visual adalah individu yang lebih mudah menyerap dan
              mengingat informasi ketika disajikan dalam bentuk visual, seperti
              diagram, bagan, peta, grafik, dan gambar. Mereka cenderung
              berpikir dalam bentuk gambar dan lebih mudah memahami konsep yang
              kompleks jika disajikan secara visual.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center flex-col sm:flex-row max-w-md mx-auto">
            <button className="px-8 py-3 border-2 border-cyan-500 text-cyan-600 rounded-full font-medium hover:bg-cyan-50 transition-colors">
              Re-take
            </button>
            <button className="px-8 py-3 bg-cyan-500 text-white rounded-full font-medium hover:bg-cyan-600 transition-colors shadow-lg">
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisualLearningPage;
