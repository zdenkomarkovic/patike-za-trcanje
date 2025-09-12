"use client"
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { getImageUrl } from "../../../sanity/lib/image";
import { motion } from "framer-motion";
export default function CategoryCard({ category, className = "", ...props }) {
  const href = category.slug?.current
    ? `/kategorije/${category.slug.current}`
    : "#";

  // Generisanje URL-a za sliku iz Sanity-a
  const imageUrl = category.image?.asset
    ? getImageUrl(category.image, 600)
    : category.image?.src || category.image;
  const imageAlt = category.image?.alt || category.name;

  return (
    <Link
      href={href}
      className={cn("group cursor-pointer block", className)}
      {...props}
    >
      <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}  
     
      className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
        <div className="aspect-video relative h-full">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{category.name}</h3>
          {/* <p className="text-sm text-gray-200">{category.description}</p> */}
        </div>
      </motion.div>
    </Link>
  );
}
