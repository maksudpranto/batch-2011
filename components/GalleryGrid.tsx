'use client';

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type GalleryItem = {
  slug: string;
  entry: {
    title: string;
    image: string;
    caption?: string;
  };
};

export default function GalleryGrid({ items, containerClassName = "gallery-masonry" }: { items: GalleryItem[], containerClassName?: string }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedImage = selectedIndex !== null ? items[selectedIndex] : null;

  const navigateToPrevious = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? items.length - 1 : selectedIndex - 1);
    }
  }, [selectedIndex, items.length]);

  const navigateToNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === items.length - 1 ? 0 : selectedIndex + 1);
    }
  }, [selectedIndex, items.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") navigateToPrevious();
      if (e.key === "ArrowRight") navigateToNext();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, navigateToPrevious, navigateToNext]);

  return (
    <>
      <div className={containerClassName}>
        {items.map((item, index) => (
          <div key={item.slug} className="gallery-item" onClick={() => setSelectedIndex(index)}>
            <div className="gallery-image-container">
              <Image 
                src={item.entry.image} 
                alt={item.entry.title} 
                fill 
                className="gallery-image"
              />
            </div>
            <div className="gallery-content">
              <h3>{item.entry.title}</h3>
              {item.entry.caption && <p>{item.entry.caption}</p>}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedIndex(null)}>
          <button className="lightbox-close" onClick={() => setSelectedIndex(null)}>&times;</button>
          
          <button className="lightbox-nav lightbox-prev" onClick={navigateToPrevious} aria-label="Previous image">
            <ChevronLeft size={48} />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={selectedImage.entry.image} 
              alt={selectedImage.entry.title} 
              fill
              className="lightbox-img"
              unoptimized
            />
            {/* Display title inside lightbox specifically */}
            <div className="lightbox-text">
              <h3>{selectedImage.entry.title}</h3>
              {selectedImage.entry.caption && <p>{selectedImage.entry.caption}</p>}
            </div>
          </div>

          <button className="lightbox-nav lightbox-next" onClick={navigateToNext} aria-label="Next image">
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </>
  );
}
