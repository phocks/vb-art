import { Handlers, PageProps } from "$fresh/server.ts";
import ImageGallery from "../islands/ImageGallery.tsx";

interface ImageData {
  images: string[];
}

export const handler: Handlers<ImageData> = {
  async GET(_req, ctx) {
    const files: string[] = [];
    for await (const entry of Deno.readDir("./static/images")) {
      if (entry.isFile && entry.name.endsWith(".jpg")) {
        files.push(`/images/${entry.name}`);
      }
    }
    return ctx.render({ images: files });
  },
};

export default function Home({ data }: PageProps<ImageData>) {
  return (
    <div class="px-4 py-8 mx-auto bg-[#ffffff]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <ImageGallery images={data.images} />
      </div>
    </div>
  );
}