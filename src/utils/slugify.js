export const slugify = (text) =>
    encodeURIComponent(
      text
        .toLowerCase()
        .trim()
        .replace(/[:\s]+/g, "-") // espacios y dos‑puntos → guiones
        .replace(/[^\w-]+/g, "") // quita símbolos raros
    );
  