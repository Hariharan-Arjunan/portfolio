import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: "x60ezpxr",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
  token:
    "skfXIeGinCOfZcTMfUL3D9OMpA74iIwAc4VQCeUaG24T6aJ5LbK1cbOZ3a6z6LmBrfcr0M52Kok4PgaUHDgk3k3BkltQPWcdWY2HjK4PI3ecTLz3rdLazDSlfudlIR3bzM4oQvn5nQ93Vz1P7MYSdD5MKNhM4ulYqYi0itzGBA1Y5XjJu8jE",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
