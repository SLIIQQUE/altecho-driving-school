"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "/images/gallery/imgi_16_617887058_18087618605104479_7731158101922751270_n.webp",
    alt: "Students in driving lesson",
  },
  {
    src: "/images/gallery/imgi_17_625115547_18081731729266398_6697556791016038406_n.webp",
    alt: "Driving vehicle on road",
  },
  {
    src: "/images/gallery/imgi_26_530654913_3158050364359191_7174807736723127807_n.webp",
    alt: "Instructional moment",
  },
  {
    src: "/images/gallery/imgi_34_625895079_18338958316240880_8841328644279050408_n.webp",
    alt: "Training session",
  },
];

export default function LuxuryGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + galleryImages.length) % galleryImages.length,
      );
    }
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedIndex === null) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") {
      setSelectedIndex((prev) =>
        prev === null
          ? prev
          : (prev - 1 + galleryImages.length) % galleryImages.length,
      );
    }
    if (e.key === "ArrowRight") {
      setSelectedIndex((prev) =>
        prev === null ? prev : (prev + 1) % galleryImages.length,
      );
    }
  };

  // Add keyboard listener
  if (typeof window !== "undefined") {
    window.addEventListener("keydown", handleKeyDown);
  }

  return (
    <>
      <section className="py-24 bg-[#050505]">
        <div className="container-main">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#d4af37] text-sm tracking-widest uppercase mb-4">
              Our Gallery
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Training Moments
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See what our students experience during their training sessions.
              Professional instruction in a comfortable learning environment.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                {/* View Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            onClick={closeLightbox}
            style={{ position: "absolute", top: "24px", right: "24px" }}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Prev Button */}
          <button
            className="absolute left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            onClick={goToPrev}
            style={{
              position: "absolute",
              left: "24px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Next Button */}
          <button
            className="absolute right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            onClick={goToNext}
            style={{
              position: "absolute",
              right: "24px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image Container */}
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "relative",
              maxWidth: "80vw",
              maxHeight: "80vh",
              width: "auto",
              height: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Using standard img tag for reliability */}
            <img
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                width: "auto",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </motion.div>

          {/* Counter */}
          <div
            style={{
              position: "absolute",
              bottom: "24px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "rgba(255,255,255,0.6)",
              fontSize: "14px",
            }}
          >
            {selectedIndex + 1} / {galleryImages.length}
          </div>
        </motion.div>
      )}
    </>
  );
}
