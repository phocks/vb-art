interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div class="my-4 grid grid-cols-4 gap-4">
      {images.map((src) => (
        <img src={src} alt="Image" class="w-full" />
      ))}
    </div>
  );
}