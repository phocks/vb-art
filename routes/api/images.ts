import { Handler } from "$fresh/server.ts";

export const handler: Handler = async (_req) => {
  const files: string[] = [];
  for await (const entry of Deno.readDir("./static/images")) {
    if (entry.isFile && entry.name.endsWith(".jpg")) {
      files.push(`/images/${entry.name}`);
    }
  }
  return new Response(JSON.stringify(files), {
    headers: { "Content-Type": "application/json" },
  });
};