"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

type GalleryItem = {
  image: string;
  alt: string;
  title?: string;
};

type Props = {
  galleryImages: GalleryItem[];
};

export default function PortfolioSection({ galleryImages }: Props) {
  return (
    <div>
      <div className="container no-p m-t-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
          {galleryImages.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="col-span-12 md:col-span-3 no-p wp-blog-p bounce-hoverflex items-center justify-center"
            >
              <Link href="/campusstellae/gallery">
                <div className="box-style w-100 h-100 md:w-76 lg:w-64 md:h-76 lg:h-64 portfolio-item relative overflow-hidden">
                  {/* Image */}
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
