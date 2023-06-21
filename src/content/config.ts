import { z, defineCollection, reference } from "astro:content";

const siteIdentity = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    logo: z.string(),
  }),
});

const carsCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    make: z.string(),
    model: z.string(),
    modelYear: z.number(),
    mileage: z.number(),
    engineSize: z.number(),
    transmission: z.string(),
    fuel: z.string(),
    seats: z.number(),
    price: z.number(),
    thumbnail: z.string(),
  }),
});

const about = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    thumbnail: z.object({
      image: z.string(),
      description: z.string(),
      position: z.string(),
    }),
    paragraphs: z.array(z.string()),
    whyChooseUsList: z.array(z.string()),
  }),
});

const hero = defineCollection({
  type: "content",
  schema: z.object({
    heading: z.string(),
    subheading: z.string(),
    background: z.string(),
  }),
});

const servicesAndFeatures = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    bgImage: z.string(),
    servicesList: z.array(
      z.object({
        serviceHeading: z.string(),
        serviceDescription: z.string(),
      })
    ),
  }),
});

const featuredCars = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    bestsellers: z.array(reference("cars")),
    newCars: z.array(reference("cars")),
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    featuredImage: z.string(),
    intro: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  "site-identity": siteIdentity,
  cars: carsCollection,
  about: about,
  hero: hero,
  "services-and-features": servicesAndFeatures,
  "featured-cars": featuredCars,
  blog: blogCollection,
};
