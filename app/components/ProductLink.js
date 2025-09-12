"use client";
import Link from "next/link";

export default function ProductLink({ slug, children }) {
  return <Link href={`/proizvodi/${slug}`}>{children}</Link>;
}
