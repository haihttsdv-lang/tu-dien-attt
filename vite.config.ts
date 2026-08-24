import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// Base path is the GitHub Pages project path (repo name). Overridable for local dev.
const base = process.env.VITE_BASE_PATH ?? "/";

export default defineConfig({
  base,
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "Bách khoa toàn thư An toàn thông tin ngành Ngân hàng",
        short_name: "BK-ATTT Ngân hàng",
        description:
          "Công cụ tra cứu tham khảo về pháp lý, chuẩn mực và kiểm soát an toàn thông tin ngành ngân hàng. Không phải nguồn chân lý pháp lý.",
        theme_color: "#0f172a",
        background_color: "#0f172a",
        display: "standalone",
        start_url: base,
        scope: base,
        icons: [
          { src: "icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "icon-512.png", sizes: "512x512", type: "image/png" },
          {
            src: "icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,json,svg,png,ico}"],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024
      }
    })
  ],
  build: {
    // Canh bao mac dinh (500kB) khong phu hop voi ung dung du lieu tham
    // chieu offline-first: toan bo noi dung phai co san ngay lan dau de
    // tim kiem toan van hoat dong day du khi mat mang (FR-Q01, FR-Q07).
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          // Tach du lieu noi dung rieng: it thay doi hon ma giao dien,
          // giup trinh duyet giu cache chunk nay qua cac lan cap nhat UI.
          if (id.includes("/src/content/")) return "content-data";
          if (id.includes("node_modules/react") || id.includes("node_modules/scheduler")) {
            return "vendor-react";
          }
        }
      }
    }
  },
  test: {
    environment: "jsdom",
    globals: true,
    include: ["tests/**/*.test.ts", "tests/**/*.test.tsx"]
  }
});
