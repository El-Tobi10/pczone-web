import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'pcsupptnitvozhbhfxiu.supabase.co', // tu proyecto en Supabase
      'i.imgur.com', // si usás Imgur
      // agregá más si hace falta
    ],
  },
};

export default nextConfig;
