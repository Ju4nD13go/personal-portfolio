/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuraciones para Cloudflare Pages
  // No necesario output: "export" ya que usamos App Router
  // Si usas imágenes externas, agrega remotePatterns aquí
  // images: {
  //   remotePatterns: [
  //     { protocol: "https", hostname: "**" },
  //   ],
  // },
  // Comprime HTML de respuesta
  compressHtml: true,
  // Eliminar logs de desarrollo en producción
  reactStrictMode: true,
};

export default nextConfig;