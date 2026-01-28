const FRAMES_BASE_URL =
  process.env.NEXT_PUBLIC_FRAMES_BASE_URL ??
  "https://cbnwbuuoafjnxhlfbhtd.supabase.co/storage/v1/object/public/sai";

export const aircraftConfig = {
  name: "VYOMA",
  subtitle: "Hypersonic Reconnaissance Aircraft",
  description: "A marvel of aerospace engineering, designed for high-speed reconnaissance at the edge of space.",
  accentColor: "#D8B4FE", // Light Violet for highlights
  // FRAME_INDEX will be replaced with a zero-padded frame number (e.g. 000, 001, ...)
  frameUrlTemplate: `${FRAMES_BASE_URL}/frame_FRAME_INDEX_delay-0.04s.png`,
  frameCount: 192,
  navLinks: [
    { name: "Overview", href: "#overview" },
    { name: "Specifications", href: "#specifications" },
    { name: "Aerodynamics", href: "#aerodynamics" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { name: "Twitter", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "LinkedIn", href: "#" },
  ]
};
