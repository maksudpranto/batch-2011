import { getGallery, getGalleryPageData } from "@/lib/keystatic";
import GalleryGrid from "@/components/GalleryGrid";
import "./gallery.css";

export default async function Gallery() {
  const items = await getGallery();
  const pageData = await getGalleryPageData();

  return (
    <div className="gallery-page">
      <div className="page-header decoration-bg">
        <div className="container">

          <h1><span className="text-gradient">{pageData?.title || "Batch Gallery"}</span></h1>
          <p>{pageData?.pageSubtitle || "A curated collection of our best memories from school to current reunions."}</p>
        </div>
      </div>

      <div className="container">
        <GalleryGrid items={items} />
      </div>
    </div>
  );
}
