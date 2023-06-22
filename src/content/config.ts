import { z, defineCollection, reference } from "astro:content";

const siteIdentity = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    logo: z.string(),
  }),
});

const carsCollection = defineCollection({
  type: "content",
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
        serviceIcon: z.string(),
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
    publishingDate: z.date(),
    featuredImage: z.string(),
    intro: z.string(),
  }),
});

const whyChooseUs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    card: z.array(
      z.object({
        cardTitle: z.string(),
        cardIcon: z.string(),
        cardSubtitle: z.string(),
      })
    ),
  }),
});

const faq = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    faqCard: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),
  }),
});

const carBrand = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    logo: z.string(),
  }),
});

export const collections = {
  "site-identity": siteIdentity,
  cars: carsCollection,
  about: about,
  hero: hero,
  "services-and-features": servicesAndFeatures,
  "featured-cars": featuredCars,
  blog: blogCollection,
  "why-choose-us": whyChooseUs,
  faq: faq,
  "car-brand": carBrand,
};
