
export const author = (siteName: string) => {
  return `{
  "@type": "Person",
  "name": "${siteName}"
}`;
};

export const publisher = (siteName: string) => {
  return `{
  "@type": "LocalBusiness",
  "@id": "#org",
  "name": "${siteName}",
  "image": "https://www.datocms-assets.com/8298/1542709217-sample-5.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Country",
    "addressRegion": "Region",
    "postalCode": "1010101",
    "streetAddress": "Address",
    "email": "mail@example.com",
    "telephone": "00123457869"
  }
}`;
};
