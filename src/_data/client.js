module.exports = {
  // ─── Basic Info ───────────────────────────────────────────────────────────
  name: "Haunted ATX",
  tagline: "The Only Austin Ghost Tour on Wheels!",
  description:
    "Haunted ATX is the only Austin Ghost Tours on wheels! We offer a public van tour that accommodates groups up to 11 and public and private hearse limo tours that come with a variety of perks like custom pick up and more intimate group sizes!",
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
  bookingUrl: "https://reservationgenie.com/haunted-atx/reservations/calendar",
  // Google Maps URL for meeting point
  mapUrl: "https://maps.app.goo.gl/tcG2xYY4LWsMW4dR9",
  // Google Business Profile — used for review attribution links
  googleBusinessUrl: "https://www.google.com/maps/place/Haunted+ATX+Austin+Ghost+Tours/@30.2392065,-97.7561925,17z/data=!3m1!4b1!4m6!3m5!1s0x8644ca5ece50f5c1:0xc92edaa049335ebb!8m2!3d30.2392065!4d-97.7536176!16s%2Fg%2F1tcz_xrh?entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D",

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
    { label: "TikTok", url: "https://www.tiktok.com/@haunted.atx" },
  ],

  // ─── Analytics ───────────────────────────────────────────────────────────
  // Google Analytics 4 Measurement ID — leave empty string to disable
  gtag: "G-KSF9QHEQBW",
};
