export interface IArticle {
  header: [
    {
      id: 1;
      title: "HOME";
      url: "/";
    }
  ];
}

export interface Ibanner {
  banner: [
    {
      id: "1";
      heading: "Message from the President";
      title: "As a leading name in the market, it has always been our constant endeavor to create outstanding residential and commercial developments in the United Arab Emirates. We always aspire to turn the dream of a luxury home into reality with our intricately designed living spaces. We thrive on excellence and many of our well-acclaimed projects like Le Solarium, The Prism, Le Presidium, Mon Reve, and Majestique Residence speak for themselves. A signature living starts under the name of Credo. Your search for the best real estate property developer in Dubai ends at Credo Investments FZE.";
      read: "READ MORE";
    }
  ];
}

export interface Ifeatres {
  featers: [
    {
      id: 1;
      heading: "FEATURED PROJECTS";
      heading2: "MAJESTIQUE RESIDENCE";
      paragraph: "Lies in the prestigious Madinat Al Mataar, Dubai South Community. Spacious, fully furnished 1BR, 2BR and Studio Apartments complement your distinguished lifestyle.";
      GET: "GET MORE INFO";
      KHOW: "KNOW MORE";
      ROOF: "ROOF TOP";
      swimm: "Swimming Pool";
      gym: "GYMANSIUM";
      hel: "Healthy Lifestyle";
      play: "PLAY AREA";
      for: "For Childeren";
      img1: "https://www.credouae.com/wp-content/uploads/2022/07/best-real-estate-property-developer-in-dubai-majestique-residence-br.jpg";
      img2: "https://www.credouae.com/wp-content/uploads/2022/07/The-Prism.jpg";
      img3: "https://www.credouae.com/wp-content/uploads/2022/07/Le-Presidium-credo.jpg";
      img4: "https://www.credouae.com/wp-content/uploads/2022/07/LE-SOLARIUM.gif";
      img5: "https://www.credouae.com/wp-content/uploads/2022/07/best-property-in-dubai-Mon-Reve-Ext.jpg";
    }
  ];
}

export interface ConnectItem {
  id: number;
  title: string;
  text: string;
  paragraph: string;
  number: string;
  email: string;
}

export interface LatestNewsItem {
  id: number;
  date: string;
  paragraph1: string;
  date1: string;
  paragraph2: string;
  date2: string;
  paragraph3: string;
  comment: string;
  main: string;
}

export interface SignupItem {
  heading: string;
  title: string;
  sign: string;
}

export interface FooterItem {
  connect: ConnectItem[];
  LATESTNEWS: LatestNewsItem[];
  SIGNUP: SignupItem[];
}

export interface FooterData {
  _id: string;
  footer: FooterItem[];
}

export interface Isearch {
  products: [
    {
      id: 1;
      title: "Essence Mascara Lash Princess";
      description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.";
      category: "beauty";
      price: 9.99;
      discountPercentage: 7.17;
      rating: 4.94;
      stock: 5;
      tags: ["beauty", "mascara"];
      brand: "Essence";
      sku: "RCH45Q1A";
      weight: 2;
      dimensions: {
        width: 23.17;
        height: 14.43;
        depth: 28.01;
      };
      warrantyInformation: "1 month warranty";
      shippingInformation: "Ships in 1 month";
      availabilityStatus: "Low Stock";
      reviews: [
        {
          rating: 2;
          comment: "Very unhappy with my purchase!";
          date: "2024-05-23T08:56:21.618Z";
          reviewerName: "John Doe";
          reviewerEmail: "john.doe@x.dummyjson.com";
        },
        {
          rating: 2;
          comment: "Not as described!";
          date: "2024-05-23T08:56:21.618Z";
          reviewerName: "Nolan Gonzalez";
          reviewerEmail: "nolan.gonzalez@x.dummyjson.com";
        },
        {
          rating: 5;
          comment: "Very satisfied!";
          date: "2024-05-23T08:56:21.618Z";
          reviewerName: "Scarlett Wright";
          reviewerEmail: "scarlett.wright@x.dummyjson.com";
        }
      ];
      returnPolicy: "30 days return policy";
      minimumOrderQuantity: 24;
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z";
        updatedAt: "2024-05-23T08:56:21.618Z";
        barcode: "9164035109868";
        qrCode: "https://assets.dummyjson.com/public/qr-code.png";
      };
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
      ];
      thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png";
    }
  ];
}

export interface Credo {
  id: number;
  heading: string;
  title: string;
  title1: string;
  title2: string;
  title3: string;
  img: string;
  img1: string;
}

export interface AboutOurProjects {
  id: number;
  heading: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  img: string;
  img1: string;
  img2: string;
  title: string;
  paragraph: string;
  title1: string;
  paragraph1: string;
  title2: string;
  paragraph2: string;
}

export interface Client {
  id: number;
  heading: string;
  img: string;
  img1: string;
  paragraph: string;
  name: string;
  img2: string;
}

export interface About {
  id: number;
  title: string;
  img: string;
  Credo: Credo[];
  AboutOurProjects: AboutOurProjects[];
  client: Client[];
}

export interface Data {
  _id: string;
  about: About[];
}
