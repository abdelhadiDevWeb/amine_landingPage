"use client";

import type { ImageLoaderProps } from "next/image";

export default function pexelsLoader({ src, width }: ImageLoaderProps) {
  const url = new URL(src);
  url.search = `?auto=compress&cs=tinysrgb&w=${width}`;
  return url.toString();
}
