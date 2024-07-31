'use client';

import { useEffect, useState } from "react";

interface Image {
  _id: string;
  url: string;
  description: string;
}

export default function Home() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('/api/images');
      const data = await res.json();
      setImages(data || []);
    };

    fetchImages();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-4">Online Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image._id} className="border rounded-lg p-2">
            <img src={image.url} alt={image.description} className="w-full h-auto" />
            <p className="mt-2">{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
