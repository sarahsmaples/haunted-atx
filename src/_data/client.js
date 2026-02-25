module.exports = {
  // ─── Basic Info ───────────────────────────────────────────────────────────
  name: "Haunted ATX",
  tagline: "Austin's Premier Ghost Tour Experience",
  description:
    "Haunted ATX leads walking ghost tours through Austin's most haunted streets, buildings, and hidden history. Book a tour and discover the dark side of the Live Music Capital of the World.",
  phone: "(737) 210-1869",
  email: "ghosthost@hauntedatx.com",
  domain: "https://www.hauntedatx.com",

  // ─── Address ─────────────────────────────────────────────────────────────
  address: {
    street: "2336 S Congress Ave",
    city: "Austin",
    state: "TX",
    zip: "78704",
    country: "US",
  },

  // ─── Tour Details ─────────────────────────────────────────────────────────
  // Link to booking platform or your /book page
  bookingUrl: "https://v2.reservationgenie.com/haunted-atx/reservations/calendar",
  // Google Maps URL for meeting point
  mapUrl: "https://maps.app.goo.gl/tcG2xYY4LWsMW4dR9",

  // ─── Tour Hours ───────────────────────────────────────────────────────────
  // Format follows schema.org/OpeningHoursSpecification
  // Days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
  hours: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday"],
      opens: "20:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "19:00",
      closes: "23:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "20:00",
      closes: "22:30",
    },
  ],

  // ─── Social Profiles ─────────────────────────────────────────────────────
  // Used for schema.org sameAs and footer links
  // label: display text | url: full profile URL
  social: [
    { label: "Facebook", url: "https://www.facebook.com/hauntedatx" },
    { label: "Instagram", url: "https://www.instagram.com/hauntedatx" },
    { label: "TikTok", url: "https://www.tiktok.com/@hauntedatx" },
  ],

  // ─── Analytics ───────────────────────────────────────────────────────────
  // Google Analytics 4 Measurement ID — leave empty string to disable
  gtag: "",
};
