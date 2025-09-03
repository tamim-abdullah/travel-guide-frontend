// src/components/ImageGallery.tsx
type ImageGalleryProps = {
  images: string[];
};

export function ImageGallery({ images }: ImageGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className="my-8">
      <h3 className="text-2xl font-semibold mb-4">Photo Gallery</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.slice(0, 2).map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Travel view ${i + 1}`}
            className="h-60 w-full object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-2">
        Images: Wikimedia Commons / Unsplash
      </p>
    </section>
  );
}