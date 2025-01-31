interface Products {
  id: number;
  title: string;
  price: string | number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
}

const products: Products[] = [
  {
    id: 18,
    title: "Iphone 16",
    price: 800,
    description: "New Descriptionfd fdsf",
    images: [
      "https://i.imgur.com/ZANVnHE.jpeg",
      "https://i.imgur.com/Ro5z6Tn.jpeg",
      "https://i.imgur.com/woA93Li.jpeg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-04T05:05:09.000Z",
    category: {
      id: 2,
      name: "Electronics",
      image: "https://i.imgur.com/ZANVnHE.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 20,
    title: "Sleek Comfort-Fit Over-Ear Headphones",
    price: 28,
    description:
      "Experience superior sound quality with our Sleek Comfort-Fit Over-Ear Headphones, designed for prolonged use with cushioned ear cups and an adjustable, padded headband. Ideal for immersive listening, whether you're at home, in the office, or on the move. Their durable construction and timeless design provide both aesthetically pleasing looks and long-lasting performance.",
    images: [
      "https://i.imgur.com/SolkFEB.jpeg",
      "https://i.imgur.com/KIGW49u.jpeg",
      "https://i.imgur.com/mWwek7p.jpeg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 2,
      name: "Electronics",
      image: "https://i.imgur.com/ZANVnHE.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 23,
    title: "Sleek Modern Laptop with Ambient Lighting",
    price: 43,
    description:
      "Experience next-level computing with our ultra-slim laptop, featuring a stunning display illuminated by ambient lighting. This high-performance machine is perfect for both work and play, delivering powerful processing in a sleek, portable design. The vibrant colors add a touch of personality to your tech collection, making it as stylish as it is functional.",
    images: [
      "https://i.imgur.com/OKn1KFI.jpeg",
      "https://i.imgur.com/G4f21Ai.jpeg",
      "https://i.imgur.com/Z9oKRVJ.jpeg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 2,
      name: "Electronics",
      image: "https://i.imgur.com/ZANVnHE.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 24,
    title: "Sleek Modern Laptop for Professionals",
    price: 97,
    description:
      "Experience cutting-edge technology and elegant design with our latest laptop model. Perfect for professionals on-the-go, this high-performance laptop boasts a powerful processor, ample storage, and a long-lasting battery life, all encased in a lightweight, slim frame for ultimate portability. Shop now to elevate your work and play.",
    images: [
      "https://i.imgur.com/ItHcq7o.jpeg",
      "https://i.imgur.com/55GM3XZ.jpeg",
      "https://i.imgur.com/tcNJxoW.jpeg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 2,
      name: "Electronics",
      image: "https://i.imgur.com/ZANVnHE.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 25,
    title: "Stylish Red & Silver Over-Ear Headphones",
    price: 39,
    description:
      "Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.",
    images: [
      "https://i.imgur.com/YaSqa06.jpeg",
      "https://i.imgur.com/isQAliJ.jpeg",
      "https://i.imgur.com/5B8UQfh.jpeg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 2,
      name: "Electronics",
      image: "https://i.imgur.com/ZANVnHE.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 26,
    title: "Sleek Mirror Finish Phone Case",
    price: 27,
    description:
      "Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.",
    images: [
      "https://i.imgur.com/yb9UQKL.jpeg",
      "https://i.imgur.com/m2owtQG.jpeg",
      "https://i.imgur.com/bNiORct.jpeg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 2,
      name: "Electronics",
      image: "https://i.imgur.com/ZANVnHE.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 27,
    title: "Sleek Smartwatch with Vibrant Display",
    price: 16,
    description:
      "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",
    images: [
      "https://i.imgur.com/LGk9Jn2.jpeg",
      "https://i.imgur.com/1ttYWaI.jpeg",
      "https://i.imgur.com/sPRWnJH.jpeg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 2,
      name: "Electronics",
      image: "https://i.imgur.com/ZANVnHE.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 28,
    title: "Sleek Modern Leather Sofa",
    price: 53,
    description:
      "Enhance the elegance of your living space with our Sleek Modern Leather Sofa. Designed with a minimalist aesthetic, it features clean lines and a luxurious leather finish. The robust metal legs provide stability and support, while the plush cushions ensure comfort. Perfect for contemporary homes or office waiting areas, this sofa is a statement piece that combines style with practicality.",
    images: [
      "https://i.imgur.com/Qphac99.jpeg",
      "https://i.imgur.com/dJjpEgG.jpeg",
      "https://i.imgur.com/MxJyADq.jpeg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 3,
      name: "Furniture",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 29,
    title: "Mid-Century Modern Wooden Dining Table",
    price: 24,
    description:
      "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
    images: [
      "https://i.imgur.com/DMQHGA0.jpeg",
      "https://i.imgur.com/qrs9QBg.jpeg",
      "https://i.imgur.com/XVp8T1I.jpeg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 3,
      name: "Furniture",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 30,
    title: "Elegant Golden-Base Stone Top Dining Table",
    price: 66,
    description:
      "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern or glam decor.",
    images: [
      "https://i.imgur.com/NWIJKUj.jpeg",
      "https://i.imgur.com/Jn1YSLk.jpeg",
      "https://i.imgur.com/VNZRvx5.jpeg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 3,
      name: "Furniture",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 31,
    title: "Modern Elegance Teal Armchair",
    price: 25,
    description:
      "Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.",
    images: [
      "https://i.imgur.com/6wkyyIN.jpeg",
      "https://i.imgur.com/Ald3Rec.jpeg",
      "https://i.imgur.com/dIqo03c.jpeg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 3,
      name: "Furniture",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 32,
    title: "Elegant Solid Wood Dining Table",
    price: 67,
    description:
      "Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home looking for a touch of elegance. Accommodates up to six guests comfortably and includes a striking fruit bowl centerpiece. The overhead lighting is not included.",
    images: [
      "https://i.imgur.com/4lTaHfF.jpeg",
      "https://i.imgur.com/JktHE1C.jpeg",
      "https://i.imgur.com/cQeXQMi.jpeg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 3,
      name: "Furniture",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 33,
    title: "Modern Minimalist Workstation Setup",
    price: 49,
    description:
      "Elevate your home office with our Modern Minimalist Workstation Setup, featuring a sleek wooden desk topped with an elegant computer, stylish adjustable wooden desk lamp, and complimentary accessories for a clean, productive workspace. This setup is perfect for professionals seeking a contemporary look that combines functionality with design.",
    images: [
      "https://i.imgur.com/3oXNBst.jpeg",
      "https://i.imgur.com/ErYYZnT.jpeg",
      "https://i.imgur.com/boBPwYW.jpeg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 3,
      name: "Furniture",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 34,
    title: "Modern Ergonomic Office Chair",
    price: 71,
    description:
      "Elevate your office space with this sleek and comfortable Modern Ergonomic Office Chair. Designed to provide optimal support throughout the workday, it features an adjustable height mechanism, smooth-rolling casters for easy mobility, and a cushioned seat for extended comfort. The clean lines and minimalist white design make it a versatile addition to any contemporary workspace.",
    images: [
      "https://i.imgur.com/3dU0m72.jpeg",
      "https://i.imgur.com/zPU3EVa.jpeg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 3,
      name: "Furniture",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 35,
    title: "Futuristic Holographic Soccer Cleats",
    price: 39,
    description:
      "Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette, lightweight construction for maximum agility, and durable studs for optimal traction. The shimmering holographic finish reflects a rainbow of colors as you move, ensuring that you'll be noticed for both your skills and style. Perfect for the fashion-forward athlete who wants to make a statement.",
    images: [
      "https://i.imgur.com/qNOjJje.jpeg",
      "https://i.imgur.com/NjfCFnu.jpeg",
      "https://i.imgur.com/eYtvXS1.jpeg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 36,
    title: "Rainbow Glitter High Heels",
    price: 39,
    description:
      "Step into the spotlight with these eye-catching rainbow glitter high heels. Designed to dazzle, each shoe boasts a kaleidoscope of shimmering colors that catch and reflect light with every step. Perfect for special occasions or a night out, these stunners are sure to turn heads and elevate any ensemble.",
    images: [
      "https://i.imgur.com/62gGzeF.jpeg",
      "https://i.imgur.com/5MoPuFM.jpeg",
      "https://i.imgur.com/sUVj7pK.jpeg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 37,
    title: "Chic Summer Denim Espadrille Sandals",
    price: 33,
    description:
      "Step into summer with style in our denim espadrille sandals. Featuring a braided jute sole for a classic touch and adjustable denim straps for a snug fit, these sandals offer both comfort and a fashionable edge. The easy slip-on design ensures convenience for beach days or casual outings.",
    images: [
      "https://i.imgur.com/9qrmE1b.jpeg",
      "https://i.imgur.com/wqKxBVH.jpeg",
      "https://i.imgur.com/sWSV6DK.jpeg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 38,
    title: "Vibrant Runners: Bold Orange & Blue Sneakers",
    price: 27,
    description:
      "Step into style with these eye-catching sneakers featuring a striking combination of orange and blue hues. Designed for both comfort and fashion, these shoes come with flexible soles and cushioned insoles, perfect for active individuals who don't compromise on style. The reflective silver accents add a touch of modernity, making them a standout accessory for your workout or casual wear.",
    images: [
      "https://i.imgur.com/hKcMNJs.jpeg",
      "https://i.imgur.com/NYToymX.jpeg",
      "https://i.imgur.com/HiiapCt.jpeg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 39,
    title: "Vibrant Pink Classic Sneakers",
    price: 84,
    description:
      "Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design. Constructed with durable materials and a comfortable fit, they are perfect for those seeking a pop of color in their everyday footwear. Grab a pair today and add some vibrancy to your step!",
    images: [
      "https://i.imgur.com/mcW42Gi.jpeg",
      "https://i.imgur.com/mhn7qsF.jpeg",
      "https://i.imgur.com/F8vhnFJ.jpeg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 40,
    title: "Futuristic Silver and Gold High-Top Sneaker",
    price: 68,
    description:
      "Step into the future with this eye-catching high-top sneaker, designed for those who dare to stand out. The sneaker features a sleek silver body with striking gold accents, offering a modern twist on classic footwear. Its high-top design provides support and style, making it the perfect addition to any avant-garde fashion collection. Grab a pair today and elevate your shoe game!",
    images: [
      "https://i.imgur.com/npLfCGq.jpeg",
      "https://i.imgur.com/vYim3gj.jpeg",
      "https://i.imgur.com/HxuHwBO.jpeg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 41,
    title: "Futuristic Chic High-Heel Boots",
    price: 36,
    description:
      "Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.",
    images: [
      "https://i.imgur.com/HqYqLnW.jpeg",
      "https://i.imgur.com/RlDGnZw.jpeg",
      "https://i.imgur.com/qa0O6fg.jpeg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 42,
    title: "Elegant Patent Leather Peep-Toe Pumps with Gold-Tone Heel",
    price: 53,
    description:
      "Step into sophistication with these chic peep-toe pumps, showcasing a lustrous patent leather finish and an eye-catching gold-tone block heel. The ornate buckle detail adds a touch of glamour, perfect for elevating your evening attire or complementing a polished daytime look.",
    images: [
      "https://i.imgur.com/AzAY4Ed.jpeg",
      "https://i.imgur.com/umfnS9P.jpeg",
      "https://i.imgur.com/uFyuvLg.jpeg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 43,
    title: "Elegant Purple Leather Loafers",
    price: 17,
    description:
      "Step into sophistication with our Elegant Purple Leather Loafers, perfect for making a bold statement. Crafted from high-quality leather with a vibrant purple finish, these shoes feature a classic loafer silhouette that's been updated with a contemporary twist. The comfortable slip-on design and durable soles ensure both style and functionality for the modern man.",
    images: [
      "https://i.imgur.com/Au8J9sX.jpeg",
      "https://i.imgur.com/gdr8BW2.jpeg",
      "https://i.imgur.com/KDCZxnJ.jpeg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 44,
    title: "Classic Blue Suede Casual Shoes",
    price: 39,
    description:
      "Step into comfort with our Classic Blue Suede Casual Shoes, perfect for everyday wear. These shoes feature a stylish blue suede upper, durable rubber soles for superior traction, and classic lace-up fronts for a snug fit. The sleek design pairs well with both jeans and chinos, making them a versatile addition to any wardrobe.",
    images: [
      "https://i.imgur.com/sC0ztOB.jpeg",
      "https://i.imgur.com/Jf9DL9R.jpeg",
      "https://i.imgur.com/R1IN95T.jpeg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 45,
    title: "Sleek Futuristic Electric Bicycle",
    price: 22,
    description:
      "This modern electric bicycle combines style and efficiency with its unique design and top-notch performance features. Equipped with a durable frame, enhanced battery life, and integrated tech capabilities, it's perfect for the eco-conscious commuter looking to navigate the city with ease.",
    images: [
      "https://i.imgur.com/BG8J0Fj.jpg",
      "https://i.imgur.com/ujHBpCX.jpg",
      "https://i.imgur.com/WHeVL9H.jpg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 5,
      name: "Miscellaneous",
      image: "https://i.imgur.com/BG8J0Fj.jpg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 46,
    title: "Sleek All-Terrain Go-Kart",
    price: 37,
    description:
      "Experience the thrill of outdoor adventures with our Sleek All-Terrain Go-Kart, featuring a durable frame, comfortable racing seat, and robust, large-tread tires perfect for handling a variety of terrains. Designed for fun-seekers of all ages, this go-kart is an ideal choice for backyard racing or exploring local trails.",
    images: [
      "https://i.imgur.com/Ex5x3IU.jpg",
      "https://i.imgur.com/z7wAQwe.jpg",
      "https://i.imgur.com/kc0Dj9S.jpg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 5,
      name: "Miscellaneous",
      image: "https://i.imgur.com/BG8J0Fj.jpg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 47,
    title: "Radiant Citrus Eau de Parfum",
    price: 73,
    description:
      "Indulge in the essence of summer with this vibrant citrus-scented Eau de Parfum. Encased in a sleek glass bottle with a bold orange cap, this fragrance embodies freshness and elegance. Perfect for daily wear, it's an olfactory delight that leaves a lasting, zesty impression.",
    images: [
      "https://i.imgur.com/xPDwUb3.jpg",
      "https://i.imgur.com/3rfp691.jpg",
      "https://i.imgur.com/kG05a29.jpg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 5,
      name: "Miscellaneous",
      image: "https://i.imgur.com/BG8J0Fj.jpg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 48,
    title: "Sleek Olive Green Hardshell Carry-On Luggage",
    price: 48,
    description:
      "Travel in style with our durable hardshell carry-on, perfect for weekend getaways and business trips. This sleek olive green suitcase features smooth gliding wheels for easy airport navigation, a sturdy telescopic handle, and a secure zippered compartment to keep your belongings safe. Its compact size meets most airline overhead bin requirements, ensuring a hassle-free flying experience.",
    images: [
      "https://i.imgur.com/jVfoZnP.jpg",
      "https://i.imgur.com/Tnl15XK.jpg",
      "https://i.imgur.com/7OqTPO6.jpg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 5,
      name: "Miscellaneous",
      image: "https://i.imgur.com/BG8J0Fj.jpg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 49,
    title: "Chic Transparent Fashion Handbag",
    price: 61,
    description:
      "Elevate your style with our Chic Transparent Fashion Handbag, perfect for showcasing your essentials with a clear, modern edge. This trendy accessory features durable acrylic construction, luxe gold-tone hardware, and an elegant chain strap. Its compact size ensures you can carry your day-to-day items with ease and sophistication.",
    images: [
      "https://i.imgur.com/Lqaqz59.jpg",
      "https://i.imgur.com/uSqWK0m.jpg",
      "https://i.imgur.com/atWACf1.jpg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 5,
      name: "Miscellaneous",
      image: "https://i.imgur.com/BG8J0Fj.jpg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 50,
    title: "Trendy Pink-Tinted Sunglasses",
    price: 38,
    description:
      "Step up your style game with these fashionable black-framed, pink-tinted sunglasses. Perfect for making a statement while protecting your eyes from the glare. Their bold color and contemporary design make these shades a must-have accessory for any trendsetter looking to add a pop of color to their ensemble.",
    images: [
      "https://i.imgur.com/0qQBkxX.jpg",
      "https://i.imgur.com/I5g1DoE.jpg",
      "https://i.imgur.com/myfFQBW.jpg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 5,
      name: "Miscellaneous",
      image: "https://i.imgur.com/BG8J0Fj.jpg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 51,
    title: "Elegant Glass Tumbler Set",
    price: 50,
    description:
      "Enhance your drinkware collection with our sophisticated set of glass tumblers, perfect for serving your favorite beverages. This versatile set includes both clear and subtly tinted glasses, lending a modern touch to any table setting. Crafted with quality materials, these durable tumblers are designed to withstand daily use while maintaining their elegant appeal.",
    images: [
      "https://i.imgur.com/TF0pXdL.jpg",
      "https://i.imgur.com/BLDByXP.jpg",
      "https://i.imgur.com/b7trwCv.jpg",
    ],
    creationAt: "2024-04-03T15:54:50.000Z",
    updatedAt: "2024-04-03T15:54:50.000Z",
    category: {
      id: 5,
      name: "Miscellaneous",
      image: "https://i.imgur.com/BG8J0Fj.jpg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-03T15:54:50.000Z",
    },
  },
  {
    id: 52,
    title: "Naruto figure",
    price: 100,
    description:
      "It is a custome figure made by me and my buddy for the cheap pric and it is pure hand made. Naruto is a show in Japan which has gained pouplar bas in 90's and is also conside one of Big Three.",
    images: [
      '["https://api.escuelajs.co/api/v1/files/7c68.webp"',
      '"https://api.escuelajs.co/api/v1/files/9c54.jpg"',
      '"https://api.escuelajs.co/api/v1/files/fe7f.jpg"]',
    ],
    creationAt: "2024-04-03T16:07:26.000Z",
    updatedAt: "2024-04-03T16:07:26.000Z",
    category: {
      id: 6,
      name: "Anime",
      image: "https://api.escuelajs.co/api/v1/files/10dd4.jpg",
      creationAt: "2024-04-03T16:02:40.000Z",
      updatedAt: "2024-04-03T16:02:40.000Z",
    },
  },
  {
    id: 53,
    title: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    creationAt: "2024-04-03T16:41:42.000Z",
    updatedAt: "2024-04-03T16:41:42.000Z",
    category: {
      id: 1,
      name: "nuevo",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-04T00:20:10.000Z",
    },
  },
  {
    id: 54,
    title: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    creationAt: "2024-04-03T16:42:20.000Z",
    updatedAt: "2024-04-03T16:42:20.000Z",
    category: {
      id: 1,
      name: "nuevo",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-04T00:20:10.000Z",
    },
  },
  {
    id: 55,
    title: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    creationAt: "2024-04-03T16:43:52.000Z",
    updatedAt: "2024-04-03T16:43:52.000Z",
    category: {
      id: 1,
      name: "nuevo",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-04T00:20:10.000Z",
    },
  },
  {
    id: 57,
    title: "Game card",
    price: 50,
    description: "dhdbc",
    images: [
      '["https://api.escuelajs.co/api/v1/files/8e07.jpg"',
      '"https://api.escuelajs.co/api/v1/files/b118.jpg"',
      '"https://api.escuelajs.co/api/v1/files/fc107.jpg"]',
    ],
    creationAt: "2024-04-03T16:47:27.000Z",
    updatedAt: "2024-04-03T16:47:27.000Z",
    category: {
      id: 1,
      name: "nuevo",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-04T00:20:10.000Z",
    },
  },
  {
    id: 58,
    title: "fjjff",
    price: 500,
    description: "ncck",
    images: [
      '["https://api.escuelajs.co/api/v1/files/d65e.jpg"',
      '"https://api.escuelajs.co/api/v1/files/6dd6.jpg"',
      '"https://api.escuelajs.co/api/v1/files/104d7.jpg"]',
    ],
    creationAt: "2024-04-03T16:47:53.000Z",
    updatedAt: "2024-04-03T16:47:53.000Z",
    category: {
      id: 7,
      name: "Games",
      image: "https://api.escuelajs.co/api/v1/files/9e24.jpg",
      creationAt: "2024-04-03T16:26:00.000Z",
      updatedAt: "2024-04-03T16:26:00.000Z",
    },
  },
  {
    id: 61,
    title: "Coc Top up card",
    price: 20,
    description: "Clash Of Clans exclusive top up card",
    images: [
      '["https://api.escuelajs.co/api/v1/files/b28b.jpg"',
      '"https://api.escuelajs.co/api/v1/files/31f1.jpg"',
      '"https://api.escuelajs.co/api/v1/files/8df8.jpg"]',
    ],
    creationAt: "2024-04-03T17:01:50.000Z",
    updatedAt: "2024-04-03T17:01:50.000Z",
    category: {
      id: 7,
      name: "Games",
      image: "https://api.escuelajs.co/api/v1/files/9e24.jpg",
      creationAt: "2024-04-03T16:26:00.000Z",
      updatedAt: "2024-04-03T16:26:00.000Z",
    },
  },
  {
    id: 62,
    title: "Coc card",
    price: 20,
    description: "Top of card of game CLash Of clans",
    images: [
      '["https://api.escuelajs.co/api/v1/files/545a.jpg"',
      '"https://api.escuelajs.co/api/v1/files/e814.jpg"',
      '"https://api.escuelajs.co/api/v1/files/18c6.jpg"]',
    ],
    creationAt: "2024-04-03T17:02:50.000Z",
    updatedAt: "2024-04-03T17:02:50.000Z",
    category: {
      id: 7,
      name: "Games",
      image: "https://api.escuelajs.co/api/v1/files/9e24.jpg",
      creationAt: "2024-04-03T16:26:00.000Z",
      updatedAt: "2024-04-03T16:26:00.000Z",
    },
  },
  {
    id: 63,
    title: "Figure",
    price: 20,
    description: "mememem",
    images: ['["https://api.escuelajs.co/api/v1/files/ecaa.webp"]'],
    creationAt: "2024-04-03T17:04:48.000Z",
    updatedAt: "2024-04-03T17:04:48.000Z",
    category: {
      id: 9,
      name: "Figure",
      image: "https://api.escuelajs.co/api/v1/files/53cb.webp",
      creationAt: "2024-04-03T16:54:01.000Z",
      updatedAt: "2024-04-03T16:54:01.000Z",
    },
  },
  {
    id: 64,
    title: "iphone15",
    price: 1222,
    description: "tra gop",
    images: ['["https://i.imgur.com/QkIa5tT.jpeg"]'],
    creationAt: "2024-04-03T17:08:33.000Z",
    updatedAt: "2024-04-03T17:08:33.000Z",
    category: {
      id: 1,
      name: "nuevo",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-04T00:20:10.000Z",
    },
  },
  {
    id: 65,
    title: "iphone15",
    price: 1222,
    description: "tra gop",
    images: ['["https://i.imgur.com/QkIa5tT.jpeg"]'],
    creationAt: "2024-04-03T17:08:49.000Z",
    updatedAt: "2024-04-03T17:08:49.000Z",
    category: {
      id: 1,
      name: "nuevo",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-04T00:20:10.000Z",
    },
  },
  {
    id: 66,
    title: "iphone15",
    price: 1222,
    description: "tra gop",
    images: ['["https://i.imgur.com/QkIa5tT.jpeg"]'],
    creationAt: "2024-04-03T17:09:34.000Z",
    updatedAt: "2024-04-03T17:09:34.000Z",
    category: {
      id: 1,
      name: "nuevo",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-04T00:20:10.000Z",
    },
  },
  {
    id: 67,
    title: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    creationAt: "2024-04-03T17:10:14.000Z",
    updatedAt: "2024-04-03T17:10:14.000Z",
    category: {
      id: 1,
      name: "nuevo",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-04T00:20:10.000Z",
    },
  },
  {
    id: 69,
    title: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    creationAt: "2024-04-03T17:19:39.000Z",
    updatedAt: "2024-04-03T17:19:39.000Z",
    category: {
      id: 1,
      name: "nuevo",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-04T00:20:10.000Z",
    },
  },
  {
    id: 78,
    title: "Ejemplo",
    price: 22,
    description: "Ejemplo",
    images: ['["https://i.imgur.com/wXuQ7bm.jpeg"]'],
    creationAt: "2024-04-03T21:50:02.000Z",
    updatedAt: "2024-04-03T21:50:02.000Z",
    category: {
      id: 6,
      name: "Anime",
      image: "https://api.escuelajs.co/api/v1/files/10dd4.jpg",
      creationAt: "2024-04-03T16:02:40.000Z",
      updatedAt: "2024-04-03T16:02:40.000Z",
    },
  },
  {
    id: 80,
    title: "Change title",
    price: 100,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    creationAt: "2024-04-04T00:05:43.000Z",
    updatedAt: "2024-04-04T00:09:37.000Z",
    category: {
      id: 1,
      name: "nuevo",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-04T00:20:10.000Z",
    },
  },
  {
    id: 81,
    title: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    creationAt: "2024-04-04T00:07:58.000Z",
    updatedAt: "2024-04-04T00:07:58.000Z",
    category: {
      id: 1,
      name: "nuevo",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-04T00:20:10.000Z",
    },
  },
  {
    id: 83,
    title: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    creationAt: "2024-04-04T00:10:58.000Z",
    updatedAt: "2024-04-04T00:10:58.000Z",
    category: {
      id: 1,
      name: "nuevo",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-04T00:20:10.000Z",
    },
  },
  {
    id: 84,
    title: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    creationAt: "2024-04-04T00:11:22.000Z",
    updatedAt: "2024-04-04T00:11:22.000Z",
    category: {
      id: 1,
      name: "nuevo",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-04T00:20:10.000Z",
    },
  },
  {
    id: 86,
    title: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    creationAt: "2024-04-04T00:21:43.000Z",
    updatedAt: "2024-04-04T00:21:43.000Z",
    category: {
      id: 1,
      name: "nuevo",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-04T00:20:10.000Z",
    },
  },
  {
    id: 87,
    title: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    creationAt: "2024-04-04T00:49:12.000Z",
    updatedAt: "2024-04-04T00:49:12.000Z",
    category: {
      id: 1,
      name: "nuevo",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-04T00:20:10.000Z",
    },
  },
  {
    id: 88,
    title: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    creationAt: "2024-04-04T00:49:21.000Z",
    updatedAt: "2024-04-04T00:49:21.000Z",
    category: {
      id: 1,
      name: "nuevo",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-04T00:20:10.000Z",
    },
  },
  {
    id: 90,
    title: "my newbranded shirt",
    price: 35500,
    description: "new brand",
    images: [
      '["https://www.shutterstock.com/image-photo/children-clothes-hanging-on-hangers-260nw-455876137.jpg"]',
    ],
    creationAt: "2024-04-04T01:35:53.000Z",
    updatedAt: "2024-04-04T01:35:53.000Z",
    category: {
      id: 1,
      name: "nuevo",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-04T00:20:10.000Z",
    },
  },
  {
    id: 91,
    title: "Product David 2",
    price: 8887,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    creationAt: "2024-04-04T02:03:18.000Z",
    updatedAt: "2024-04-04T02:03:18.000Z",
    category: {
      id: 1,
      name: "nuevo",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-04-03T15:54:50.000Z",
      updatedAt: "2024-04-04T00:20:10.000Z",
    },
  },
];

export default products;
