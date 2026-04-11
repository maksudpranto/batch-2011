'use client';

import Image from "next/image";
import { useState } from "react";

type GalleryItem = {
  slug: string;
  entry: {
    title: string;
    image: string;
    caption?: string;
  };
};

export default function GalleryGrid({ items, containerClassName = "gallery-masonry" }: { items: GalleryItem[], containerClassName?: string }) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className={containerClassName}>
        {items.map((item) => (
          <div key={item.slug} className="gallery-item" onClick={() => setSelectedImage(item)}>
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
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>&times;</button>
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
        </div>
      )}
    </>
  );
}
