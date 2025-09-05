


  import React, { useState,useEffect } from "react";
  import { Link } from "react-router-dom";
  import { Container, Row, Col, Card, Button } from "react-bootstrap";
  import "./Puma.css"
  
  const categories = [
  { 
    name: "T-Shirts", 
    image: "https://lp2.hm.com/hmgoepprod?set=source[/52/71/5271b1df7b6a1f3c1f6ed60a923b6dbd40f7b24d.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]" 
  },
  { 
    name: "Shirts", 
    image: "https://lp2.hm.com/hmgoepprod?set=source[/a4/23/a42346ef03443c2ac5f15d52c35a20a3e7a39fa7.jpg],origin[dam],category[men_shirts_longsleeved],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]" 
  },
  { 
    name: "Sweatshirts & Hoodies", 
    image: "https://lp2.hm.com/hmgoepprod?set=source[/41/9f/419f5c58fa6b01a08dc6dbf9c5ef0c0a4d8dd3f6.jpg],origin[dam],category[men_hoodiessweatshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]" 
  },
  { 
    name: "Jackets & Coats", 
    image: "https://lp2.hm.com/hmgoepprod?set=source[/6d/9c/6d9c5c03f787ffedc69a2e17cf9d98a55b07c16a.jpg],origin[dam],category[men_jacketscoats],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]" 
  },
  { 
    name: "Jeans", 
    image: "https://lp2.hm.com/hmgoepprod?set=source[/4c/16/4c16b653c947fd05a2d4a0fca8cfcf90aa86ed61.jpg],origin[dam],category[men_jeans_slim],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]" 
  },
  { 
    name: "Trousers & Chinos", 
    image: "https://lp2.hm.com/hmgoepprod?set=source[/1a/86/1a86fcd5cb4d95e4e0a2f878c7bb3edbbd5b3c0e.jpg],origin[dam],category[men_trousers_dressed],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]" 
  },
  { 
    name: "Sneakers", 
    image: "https://lp2.hm.com/hmgoepprod?set=source[/ef/c0/efc0dbd4c3a5b214c9e5f5dff9b46f879d5c1c7d.jpg],origin[dam],category[men_shoes_sneakers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]" 
  },
  { 
    name: "Sandals & Flats", 
    image: "https://lp2.hm.com/hmgoepprod?set=source[/31/59/3159a2285f5b6a29a20f73d885dc85a2a8f5ef74.jpg],origin[dam],category[ladies_shoes_sandals],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]" 
  },
  { 
    name: "Boots", 
    image: "https://lp2.hm.com/hmgoepprod?set=source[/6b/6a/6b6afdfbc3d16b9a9c2c9304a440f74f305d02ce.jpg],origin[dam],category[ladies_shoes_boots],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]" 
  },
  { 
    name: "Dresses", 
    image: "https://lp2.hm.com/hmgoepprod?set=source[/69/20/692061e65a5b0ff6326b29c86c4ff6c14318bd6f.jpg],origin[dam],category[ladies_dresses_mididresses],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]" 
  },
  { 
    name: "Skirts", 
    image: "https://lp2.hm.com/hmgoepprod?set=source[/35/0f/350f770b7b1a548b0b074dc8f5405477fc1da8c0.jpg],origin[dam],category[ladies_skirts_midi],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]" 
  },
  { 
    name: "Accessories", 
    image: "https://lp2.hm.com/hmgoepprod?set=source[/86/da/86da268aab7a16eac8441a537454bf02d1f6f34f.jpg],origin[dam],category[ladies_accessories_jewellery],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]" 
  }
];
  
  // --- PRODUCTS (your existing list stays as-is) ---
  export const hmproducts = [
    
  {
    id: 1,
    name: "H&M Slim Fit Jeans",
    price: "₹2,299",
    discountPrice: "₹1,899",
    category: "Jeans",
    images: [
           "https://image.hm.com/assets/hm/13/3b/133ba2cccc688e43dbbc47905aef2fc9954758a8.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/43/11/431111ad89ea418142c04d0575b4fa39da3e2567.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/8e/8d/8e8d484c38e0bd0eb57e73cddf0f92d2d8e5f150.jpg?imwidth=1260"
    ],
    description: "Slim fit jeans made from soft stretch denim for everyday comfort.",
    faqs: [
      { q: "Are they stretchable?", a: "Yes, they contain elastane for flexibility." },
      { q: "Do they shrink?", a: "Minimal shrinkage if washed cold." },
      { q: "Are they unisex?", a: "Mostly men’s, but women can style oversized." }
    ],
    reviews: [
      { user: "Amit R.", rating: 5, comment: "Fits perfectly and looks stylish." },
      { user: "Nisha M.", rating: 4, comment: "Good quality denim at this price." },
      { user: "Ravi T.", rating: 5, comment: "Great for casual wear." }
    ]
  },
  {
    id: 2,
    name: "H&M Cotton Oversized T-Shirt",
    price: "₹799",
    category: "T-Shirts & Tops",
    images: [
            "https://image.hm.com/assets/hm/b7/b4/b7b459044f618138e108f50596daea0d39419750.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/26/88/2688b3fbc32b10efb9b82a70dba85c10ec2ac737.jpg?imwidth=1260https://i.ibb.co/CB2fk0y/shirt5-side.jpg",
      "https://image.hm.com/assets/hm/6c/7d/6c7dba471a52b973c2d5883dbd8986ac589993cb.jpg?imwidth=1260"
    ],
    description: "Oversized cotton T-shirt with a relaxed fit. Unisex style.",
    faqs: [
      { q: "Is it oversized?", a: "Yes, designed with a loose fit." },
      { q: "Machine washable?", a: "Yes, cold wash recommended." },
      { q: "Does it fade?", a: "Color holds well with proper care." }
    ],
    reviews: [
      { user: "Neha P.", rating: 5, comment: "Very comfortable and trendy." },
      { user: "Arjun K.", rating: 4, comment: "Good everyday tee." },
      { user: "Sana L.", rating: 5, comment: "Love the oversized look!" }
    ]
  },
  {
    id: 3,
    name: "H&M Linen Shirt",
    price: "₹1,799",
    discountPrice: "₹1,499",
    category: "Shirts",
    images: [
            "https://image.hm.com/assets/hm/b6/fe/b6fe62a6728e16637af33a18c512b18e4d010666.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/6a/fe/6afed1a1cf147e854ab0ff85a551882c0d5ae496.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/01/b1/01b18096a613cf08d2382c0f59ac2737f0ffc6e4.jpg?imwidth=1260"
    ],
    description: "Breathable linen shirt with button-down design, perfect for summer.",
    faqs: [
      { q: "Does it wrinkle?", a: "Yes, linen naturally wrinkles." },
      { q: "Can it be ironed?", a: "Yes, use medium heat steam." },
      { q: "Is it unisex?", a: "Yes, fits both men and women depending on size." }
    ],
    reviews: [
      { user: "Kiran S.", rating: 5, comment: "Super light and comfy for hot days." },
      { user: "Aarav M.", rating: 4, comment: "Good fit and breathable." },
      { user: "Leena J.", rating: 5, comment: "Looks classy and chic." }
    ]
  },
  {
    id: 4,
    name: "H&M Floral Dress",
    price: "₹2,299",
    category: "Dresses",
    images: [
            "https://image.hm.com/assets/hm/ec/9e/ec9ecce91eb0d44c346be33794b479719dca76c1.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/ed/08/ed08d1f14ac7d17bd0b91893acb9534b950f8337.jpg?imwidth=1260",
      
    ],
    description: "Lightweight floral midi dress with a flowy silhouette, perfect for women.",
    faqs: [
      { q: "Does it come with lining?", a: "Yes, partially lined." },
      { q: "Is it stretchable?", a: "No, fabric is non-stretch." },
      { q: "Suitable for casual wear?", a: "Yes, can be styled up or down." }
    ],
    reviews: [
      { user: "Pooja R.", rating: 5, comment: "So elegant and pretty!" },
      { user: "Sneha M.", rating: 4, comment: "Good summer dress." },
      { user: "Kavya T.", rating: 5, comment: "Fabric feels very light." }
    ]
  },
  {
    id: 5,
    name: "H&M Sneakers",
    price: "₹2,499",
    discountPrice: "₹1,999",
    category: "Sneakers",
    images: [
     "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Samba_OG_Shoes_White_B75806_01_00_standard.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/ec595635a2994adea094a8bf0117ef1a_9366/Samba_OG_Shoes_White_B75806_02_standard.jpg",
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/b19389122c51434eb5bea8bf0117da35_9366/Samba_OG_Shoes_White_B75806_07_standard.jpg"
    ],
    description: "Casual sneakers suitable for men and women with versatile design.",
    faqs: [
      { q: "Are they unisex?", a: "Yes, available in all sizes." },
      { q: "Good for running?", a: "Casual wear only, not for heavy running." },
      { q: "Are they washable?", a: "Wipe with damp cloth only." }
    ],
    reviews: [
      { user: "Nikhil A.", rating: 5, comment: "Stylish and comfortable." },
      { user: "Megha S.", rating: 4, comment: "Good for daily wear." },
      { user: "Raj K.", rating: 5, comment: "Affordable and trendy." }
    ]
  } , {
    id: 6,
    name: "H&M Cargo Trousers",
    price: "₹2,199",
    discountPrice: "₹1,799",
    category: "Trousers",
    images: [
     "https://image.hm.com/assets/hm/3f/e3/3fe3a1b14e5eb0e3bc524b90fe45d55a0667574f.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/f0/ba/f0baff097003e12ccfd3e1d486dce87571b34ae1.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/da/d5/dad57ec0d17e3dd8dc290f7699dde9ed31707bbc.jpg?imwidth=1260"
    ],
    description: "Relaxed-fit cargo trousers with multiple pockets, perfect for casual wear.",
    faqs: [
      { q: "Are they baggy?", a: "Yes, loose fit with adjustable waist." },
      { q: "Do they shrink?", a: "No, made with pre-shrunk cotton." },
      { q: "Unisex?", a: "Yes, fits men and women." }
    ],
    reviews: [
      { user: "Siddharth J.", rating: 5, comment: "Trendy and very comfortable." },
      { user: "Rina K.", rating: 4, comment: "Fabric feels durable." }
    ]
  },
  {
    id: 7,
    name: "H&M Hooded Sweatshirt",
    price: "₹1,499",
    category: "Hoodies & Sweatshirts",
    images: [
    "https://image.hm.com/assets/hm/e6/78/e678a1f364cba25c0c2d2fc34afe60f74c995fc6.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/7e/30/7e30f1ae93b0e330eadd05e6fe7cff3473f49c41.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/da/e2/dae2087ec54734c74ab94cae263f9522d82399fb.jpg?imwidth=1260"
    ],
    description: "Classic cotton-blend hoodie with kangaroo pocket and drawstring hood.",
    faqs: [
      { q: "Is it warm?", a: "Yes, fleece lining inside." },
      { q: "Machine washable?", a: "Yes, easy care." },
      { q: "Unisex?", a: "Yes, relaxed fit for all." }
    ],
    reviews: [
      { user: "Rohit P.", rating: 5, comment: "Super cozy and soft." },
      { user: "Mona V.", rating: 5, comment: "Love the oversized vibe." }
    ]
  },
  {
    id: 8,
    name: "H&M Denim Jacket",
    price: "₹2,999",
    discountPrice: "₹2,499",
    category: "Jackets & Coats",
    images: [
       "https://image.hm.com/assets/hm/8d/a1/8da19808eb5d2fe1379435c6375672c276fa6b5c.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/ee/41/ee417767660b6b6e54e72bbcf2692315cd2e8ce7.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/e6/30/e6302ba6a0daa3784f1ae7f8df510469f292313f.jpg?imwidth=1260"
    ],
    description: "Classic washed denim jacket for a timeless look, unisex fit.",
    faqs: [
      { q: "Heavyweight?", a: "Yes, sturdy denim fabric." },
      { q: "Can women wear?", a: "Yes, perfectly unisex." }
    ],
    reviews: [
      { user: "Armaan S.", rating: 5, comment: "Gives a cool vintage vibe." },
      { user: "Suhana G.", rating: 4, comment: "Slightly oversized but looks great." }
    ]
  },
  {
    id: 9,
    name: "H&M Ribbed Knit Sweater",
    price: "₹1,999",
    category: "Knitwear",
    images: [
       "https://image.hm.com/assets/hm/39/e0/39e099610a8f21750dc376e5fd513cdadcccb368.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/99/59/99599c7199ef02be690b97c801579a1970f18d89.jpg?imwidth=1260",
      
    ],
    description: "Soft ribbed knit sweater, designed to keep you warm in winter.",
    faqs: [
      { q: "Does it stretch?", a: "Yes, rib-knit fabric stretches." },
      { q: "Best for winter?", a: "Yes, keeps you cozy." }
    ],
    reviews: [
      { user: "Harsh V.", rating: 5, comment: "Perfect winter essential." },
      { user: "Shruti D.", rating: 5, comment: "Very soft and comfy." }
    ]
  },
  {
    id: 10,
    name: "H&M Pleated Skirt",
    price: "₹1,899",
    discountPrice: "₹1,599",
    category: "Skirts",
    images: [
       "https://image.hm.com/assets/hm/c4/2e/c42e82b0d9fd77e86520d54101037b1346b739df.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/41/a1/41a111949ac238039a6bea1c436d262ed3b1c5ff.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/58/80/5880f7bd9977203f3ea6f2276913552d2d3f22e6.jpg?imwidth=1260"
    ],
    description: "Chic pleated midi skirt designed for women, flows beautifully.",
    faqs: [
      { q: "Is it lined?", a: "Yes, with soft lining." },
      { q: "Elastic waist?", a: "Yes, comfortable waistband." }
    ],
    reviews: [
      { user: "Priya R.", rating: 5, comment: "Elegant and versatile." },
      { user: "Zara K.", rating: 4, comment: "Slightly long but looks classy." }
    ]
  },
  {
    id: 11,
    name: "H&M Leather Belt",
    price: "₹999",
    category: "Accessories",
    images: [
     "https://image.hm.com/assets/hm/be/bc/bebc34f1570c83b6e7c3dc3ee22d134d3fdbe063.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/37/43/374375eb9c0580391181859fc43e7757a9bc3768.jpg?imwidth=1260",
      
    ],
    description: "Classic leather belt with metallic buckle, suitable for men and women.",
    faqs: [
      { q: "Is it genuine leather?", a: "Yes, 100% leather." },
      { q: "Adjustable?", a: "Yes, fits waist 28-36." }
    ],
    reviews: [
      { user: "Kabir A.", rating: 5, comment: "Durable and stylish." },
      { user: "Manisha J.", rating: 5, comment: "Perfect daily belt." }
    ]
  },
  {
    id: 12,
    name: "H&M Puffer Jacket",
    price: "₹3,499",
    discountPrice: "₹2,799",
    category: "Jackets & Coats",
    images: [
       "https://image.hm.com/assets/hm/09/45/0945d9b3fca4135de6a1b3d3adba1d15c333d075.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/98/cd/98cd99f39077d10c7bf94bef81ae78dcf3d9f761.jpg?imwidth=1260",
      "hhttps://image.hm.com/assets/hm/5f/76/5f767c5ff020f87f26f9406d003e3a940e4eac79.jpg?imwidth=1260"
    ],
    description: "Warm padded puffer jacket with zip closure, ideal for winter.",
    faqs: [
      { q: "Is it waterproof?", a: "Water-resistant but not 100% waterproof." },
      { q: "Is it heavy?", a: "Lightweight but warm." }
    ],
    reviews: [
      { user: "Sonal B.", rating: 5, comment: "Perfect for cold weather." },
      { user: "Kunal T.", rating: 4, comment: "Stylish and cozy." }
    ]
  },
  {
    id: 13,
    name: "H&M Chinos",
    price: "₹2,199",
    category: "Trousers",
    images: [
      "https://image.hm.com/assets/hm/c6/99/c6999cb5a7ea2342b5cfe984bf7093b0b1966fd9.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/8f/50/8f50fcb7935e057f283d5ba2c0901c6c60a28777.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/e2/33/e233e6ce9c2798bfb315fd078534f139f661aec9.jpg?imwidth=1260"
    ],
    description: "Slim-fit chinos, perfect for office and casual wear.",
    faqs: [
      { q: "Are they stretchable?", a: "Yes, with elastane blend." }
    ],
    reviews: [
      { user: "Vikas R.", rating: 5, comment: "Perfect fit for office." },
      { user: "Neelam C.", rating: 4, comment: "Good everyday trousers." }
    ]
  },
  {
    id: 14,
    name: "H&M Cotton Polo Shirt",
    price: "₹1,299",
    category: "Shirts",
    images: [
       "https://image.hm.com/assets/hm/aa/79/aa79612510403ca5a2bc9dca43f18ac1246fccad.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/e8/49/e849eb39f3cd6669bc8356202a5227b440a9164a.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/8d/ef/8def28d0d1cddbe0cc3f437fbd2d28a2647f4e34.jpg?imwidth=1260"
    ],
    description: "Classic polo shirt made with breathable cotton.",
    faqs: [
      { q: "Does it shrink?", a: "Minimal shrinkage if washed properly." }
    ],
    reviews: [
      { user: "Rahul M.", rating: 5, comment: "Casual yet classy." },
      { user: "Snehal R.", rating: 4, comment: "Good summer shirt." }
    ]
  },
  {
    id: 15,
    name: "H&M Summer Dress",
    price: "₹2,499",
    category: "Dresses",
    images: [
 "https://image.hm.com/assets/hm/ff/55/ff552baf4ff20ec3da498f1519ff1b91697d572c.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/ef/13/ef13c52815a422218d25519691792999618f19f4.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/b7/d3/b7d3c0dbeeda188f926d4ec640823b67c485da3f.jpg?imwidth=1260"    ],
    description: "Light sleeveless dress, perfect for beach and outings.",
    faqs: [
      { q: "Is it transparent?", a: "No, comes with lining." }
    ],
    reviews: [
      { user: "Pooja S.", rating: 5, comment: "Love the summer vibes!" }
    ]
  },
  {
    id: 16,
    name: "H&M Beanie Hat",
    price: "₹799",
    category: "Accessories",
    images: [
      "https://image.hm.com/assets/hm/70/9f/709f8a322c529f06f49cb35055a7cb734ac4713d.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/a5/2e/a52eec34e52e20ba528b3e0b792eb0a667d5d27e.jpg?imwidth=2160",
    
    ],
    description: "Soft knitted beanie for winter, unisex style.",
    faqs: [
      { q: "Is it stretchable?", a: "Yes, one size fits all." }
    ],
    reviews: [
      { user: "Aditi P.", rating: 5, comment: "Cute and warm." }
    ]
  },
  {
    id: 17,
    name: "H&M Graphic T-Shirt",
    price: "₹999",
    discountPrice: "₹699",
    category: "T-Shirts & Tops",
    images: [
    "https://image.hm.com/assets/hm/18/c0/18c038ac9368399d2095ad103f945ea0f654c78f.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/bb/9c/bb9c3149edc6fb0552b0aefb0684ea273632a7d2.jpg?imwidth=1260",
     
    ],
    description: "Trendy graphic print T-shirt for everyday wear.",
    faqs: [
      { q: "Print fade?", a: "No, print stays after washes." }
    ],
    reviews: [
      { user: "Rohini V.", rating: 5, comment: "So stylish!" }
    ]
  },
  {
    id: 18,
    name: "H&M Trench Coat",
    price: "₹4,299",
    category: "Jackets & Coats",
    images: [
      "https://image.hm.com/assets/hm/73/c4/73c48adcd195c6ba84e398baf6d8bdf395b88bf1.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/9d/29/9d29183a76437a97876c809f5b7b6f48db24be7b.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/fa/71/fa71ab56cf3f5cf8860f19741d6065a86623a42a.jpg?imwidth=1260"
    ],
    description: "Classic beige trench coat, timeless fashion piece.",
    faqs: [
      { q: "Is it waterproof?", a: "Water-resistant fabric." }
    ],
    reviews: [
      { user: "Meera G.", rating: 5, comment: "Stylish and elegant." }
    ]
  },
  {
    id: 19,
    name: "H&M Joggers",
    price: "₹1,799",
    discountPrice: "₹1,499",
    category: "Trousers",
    images: [
      "https://image.hm.com/assets/hm/09/dd/09dd830160bb3501f6934ad99ab4bb9379547f00.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/31/9c/319c2f4f7102402a275de7620f83069c466794ba.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/58/f4/58f49ef77ae670523192ef8ce009c0bab3afc953.jpg?imwidth=1260"
    ],
    description: "Comfy cotton joggers with elasticated cuffs.",
    faqs: [
      { q: "Suitable for gym?", a: "Yes, good for workouts and lounging." }
    ],
    reviews: [
      { user: "Imran H.", rating: 5, comment: "Very comfortable!" }
    ]
  },
  {
    id: 20,
    name: "H&M Slip-On Sneakers",
    price: "₹2,199",
    category: "Sneakers",
    images: [
      "https://image.hm.com/assets/hm/2a/af/2aaf462fb1ee2218e41949c03d95f9a4841d1243.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/b5/cf/b5cf7499b21f62645906c86ac95add87059cde89.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/3e/bf/3ebff51cef3ca458f9247ae8df5b723c96807436.jpg?imwidth=1260"
    ],
    description: "Minimalist slip-on sneakers, unisex everyday style.",
    faqs: [
      { q: "Are they washable?", a: "Yes, machine washable." }
    ],
    reviews: [
      { user: "Nikita A.", rating: 5, comment: "Easy to wear and comfy." }
    ]
  },
    {
    id: 21,
    name: "H&M Linen Blend Shirt",
    category: "Shirts",
    price: "₹2,299",
    discountPrice: "₹1,899",
    images: [
      "https://image.hm.com/assets/hm/22/06/22062090fa9161b87268d0ae5bada2a7e70fa0d7.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/09/2f/092fbddc4acd8e511cebeec03d0a02c3db4a2c3c.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/a6/a5/a6a557b25dc05b4a8c0a46db683bbaed81b60b25.jpg?imwidth=1260"
    ],  
    description: "Lightweight linen-cotton blend shirt for a breathable, relaxed style.",
    faqs: [
      { q: "Is it slim fit?", a: "Yes, designed with a modern slim fit." },
      { q: "Can it be machine washed?", a: "Yes, gentle cycle recommended." },
      { q: "Is it see-through?", a: "No, fabric is slightly thick." }
    ],
    reviews: [
      { user: "Ravi M.", rating: 5, comment: "Perfect for summer wear." },
      { user: "Divya P.", rating: 4, comment: "Comfortable fabric, stylish." },
      { user: "Nikhil K.", rating: 5, comment: "Love the linen touch." }
    ]
  },
  {
    id: 22,
    name: "H&M Straight Fit Jeans",
    category: "Jeans & Trousers",
    price: "₹2,799",
    images: [
      
      "https://i.ibb.co/pZ9PCq4/shirt5-front.jpg",
      "https://i.ibb.co/CB2fk0y/shirt5-side.jpg",
      "https://i.ibb.co/FVrGQqg/shirt5-back.jpg"
    ],
    description: "Classic straight-fit jeans with mid-rise waist and stretch comfort.",
    faqs: [
      { q: "Do they shrink after wash?", a: "No, retains shape well." },
      { q: "Is it stretchable?", a: "Yes, with elastane blend." },
      { q: "Are pockets deep?", a: "Yes, functional and deep." }
    ],
    reviews: [
      { user: "Ananya G.", rating: 5, comment: "Perfect everyday jeans." },
      { user: "Raj S.", rating: 4, comment: "Good fit and quality." },
      { user: "Meera L.", rating: 5, comment: "Love the comfort stretch." }
    ]
  },
  {
    id: 23,
    name: "H&M Cotton Hoodie",
    category: "Hoodies & Sweatshirts",
    price: "₹1,999",
    discountPrice: "₹1,499",
    images: [
      "https://i.ibb.co/pZ9PCq4/shirt5-front.jpg",
      "https://i.ibb.co/CB2fk0y/shirt5-side.jpg",
      "https://i.ibb.co/FVrGQqg/shirt5-back.jpg"
    ],
    description: "Soft cotton hoodie with kangaroo pocket and adjustable drawstring.",
    faqs: [
      { q: "Is it warm enough for winters?", a: "Yes, medium warmth." },
      { q: "Does it shrink?", a: "Minimal shrinkage if washed cold." },
      { q: "Is it unisex?", a: "Yes, regular fit for all." }
    ],
    reviews: [
      { user: "Sneha P.", rating: 5, comment: "So cozy and soft." },
      { user: "Vikram J.", rating: 4, comment: "Great hoodie for daily use." },
      { user: "Anil K.", rating: 5, comment: "Excellent quality." }
    ]
  },
  {
    id: 24,
    name: "H&M Oversized Blazer",
    category: "Outerwear",
    price: "₹4,499",
    images: [
     "https://i.ibb.co/pZ9PCq4/shirt5-front.jpg",
      "https://i.ibb.co/CB2fk0y/shirt5-side.jpg",
      "https://i.ibb.co/FVrGQqg/shirt5-back.jpg"
    ],
    description: "Trendy oversized blazer with structured shoulders for a bold look.",
    faqs: [
      { q: "Does it have lining?", a: "Yes, fully lined." },
      { q: "Is it formal?", a: "Yes, suitable for both casual and formal occasions." },
      { q: "Is it heavy?", a: "No, lightweight tailoring." }
    ],
    reviews: [
      { user: "Kriti V.", rating: 5, comment: "Super stylish and chic!" },
      { user: "Rohit N.", rating: 4, comment: "Oversized but classy." },
      { user: "Tina P.", rating: 5, comment: "Love the modern fit." }
    ]
  },
  {
    id: 25,
    name: "H&M Pleated Midi Skirt",
    category: "Skirts & Dresses",
    price: "₹2,499",
    images: [
      "https://i.ibb.co/pZ9PCq4/shirt5-front.jpg",
      "https://i.ibb.co/CB2fk0y/shirt5-side.jpg",
      "https://i.ibb.co/FVrGQqg/shirt5-back.jpg"
    ],
    description: "Elegant pleated midi skirt in lightweight fabric for graceful flow.",
    faqs: [
      { q: "Does it have elastic waist?", a: "Yes, elastic waistband for comfort." },
      { q: "Can it be hand washed?", a: "Yes, hand wash recommended." },
      { q: "Is it lined?", a: "Yes, comes with lining." }
    ],
    reviews: [
      { user: "Anjali M.", rating: 5, comment: "Love the feminine look." },
      { user: "Neha S.", rating: 4, comment: "Beautiful pleats." },
      { user: "Rita K.", rating: 5, comment: "Flows perfectly when walking." }
    ]
  },
  {
    id: 26,
    name: "H&M Sneakers Classic",
    category: "Sneakers",
    price: "₹3,499",
    discountPrice: "₹2,999",
    images: [
      "https://i.ibb.co/pZ9PCq4/shirt5-front.jpg",
      "https://i.ibb.co/CB2fk0y/shirt5-side.jpg",
      "https://i.ibb.co/FVrGQqg/shirt5-back.jpg"
    ],
    description: "Minimalist unisex sneakers perfect for casual and semi-formal wear.",
    faqs: [
      { q: "Are they unisex?", a: "Yes, for both men and women." },
      { q: "Is it washable?", a: "Surface clean with damp cloth." },
      { q: "Do they have cushioning?", a: "Yes, padded sole for comfort." }
    ],
    reviews: [
      { user: "Rahul S.", rating: 5, comment: "Clean look, matches everything." },
      { user: "Meera J.", rating: 4, comment: "Good value for money." },
      { user: "Ajay K.", rating: 5, comment: "Stylish and comfy." }
    ]
  },
  {
    id: 27,
    name: "H&M Puff Sleeve Dress",
    category: "Skirts & Dresses",
    price: "₹2,999",
    images: [
      "https://lp2.hm.com/hmgoepprod?set=puff-sleeve-dress-front.jpg",
      "https://lp2.hm.com/hmgoepprod?set=puff-sleeve-dress-back.jpg"
    ],
    description: "Chic puff-sleeve dress with a fitted waist for elegant occasions.",
    faqs: [
      { q: "Is it machine washable?", a: "Yes, delicate cycle recommended." },
      { q: "Is fabric stretchy?", a: "Slight stretch for comfort." },
      { q: "Does it have lining?", a: "Yes, fully lined." }
    ],
    reviews: [
      { user: "Rhea D.", rating: 5, comment: "Looks amazing for parties." },
      { user: "Sneha V.", rating: 4, comment: "Stylish but slightly long." },
      { user: "Kavya S.", rating: 5, comment: "Loved the sleeves detail!" }
    ]
  },
  {
    id: 28,
    name: "H&M Denim Jacket",
    category: "Outerwear",
    price: "₹3,299",
    images: [
      "https://lp2.hm.com/hmgoepprod?set=denim-jacket-front.jpg",
      "https://lp2.hm.com/hmgoepprod?set=denim-jacket-back.jpg"
    ],
    description: "Classic denim jacket with button closure and front chest pockets.",
    faqs: [
      { q: "Is it unisex?", a: "Yes, fits both men and women." },
      { q: "Does it fade?", a: "Minimal fading after multiple washes." },
      { q: "Is it stretchable?", a: "No, pure denim fabric." }
    ],
    reviews: [
      { user: "Siddharth K.", rating: 5, comment: "Must-have wardrobe piece." },
      { user: "Anu M.", rating: 4, comment: "Great fit, a bit stiff at first." },
      { user: "Prakash J.", rating: 5, comment: "Super trendy jacket." }
    ]
  },
  {
    id: 29,
    name: "H&M Slim Fit Polo Shirt",
    category: "Shirts",
    price: "₹1,499",
    discountPrice: "₹1,199",
    images: [
       "https://i.ibb.co/pZ9PCq4/shirt5-front.jpg",
      "https://i.ibb.co/CB2fk0y/shirt5-side.jpg",
      "https://i.ibb.co/FVrGQqg/shirt5-back.jpg"
    ],
    description: "Slim-fit polo shirt made from breathable cotton piqué fabric.",
    faqs: [
      { q: "Is collar stiff?", a: "No, soft structured collar." },
      { q: "Can it be tucked?", a: "Yes, works both tucked and untucked." },
      { q: "Does it fade?", a: "Retains color for long." }
    ],
    reviews: [
      { user: "Amit R.", rating: 5, comment: "Perfect for casual Fridays." },
      { user: "Karan P.", rating: 4, comment: "Nice breathable shirt." },
      { user: "Megha N.", rating: 5, comment: "Love the polo fit." }
    ]
  },
  {
    id: 30,
    name: "H&M Wide Leg Trousers",
    category: "Jeans & Trousers",
    price: "₹2,999",
    images: [
       "https://i.ibb.co/pZ9PCq4/shirt5-front.jpg",
      "https://i.ibb.co/CB2fk0y/shirt5-side.jpg",
      "https://i.ibb.co/FVrGQqg/shirt5-back.jpg"
    ],
    description: "High-waist wide-leg trousers with tailored details for a chic look.",
    faqs: [
      { q: "Does it come with belt loops?", a: "Yes, standard belt loops included." },
      { q: "Is fabric stretchable?", a: "Slight stretch for comfort." },
      { q: "Is it formal?", a: "Yes, can be styled for office wear." }
    ],
    reviews: [
      { user: "Ritika S.", rating: 5, comment: "Super chic trousers." },
      { user: "Sameer K.", rating: 4, comment: "Good fit, slightly long." },
      { user: "Pooja M.", rating: 5, comment: "Love the flowy cut." }
    ]
  }


  
  // ➝ Continue like this until 20+ products with categories:
  // Jeans, T-Shirts & Tops, Shirts, Dresses, Skirts, Jackets & Coats,
  // Knitwear, Trousers, Hoodies & Sweatshirts, Sneakers, Accessories.
];

  
  
  const Hm = () => {
     const [selectedCategory, setSelectedCategory] = useState(null);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  
      useEffect(() => {
      const handleResize = () => setIsDesktop(window.innerWidth >= 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
  
    const filteredProducts = selectedCategory
      ? hmproducts.filter((p) => p.category === selectedCategory)
      : hmproducts;
  
   
  
    return (
      <Container className="my-4">
        {/* Categories (Desktop) */}
        <div className="category-nav d-none d-md-flex justify-content-center mb-4">
          {categories.map((cat, idx) => (
            <Button
              key={idx}
              variant={selectedCategory === cat.name ? "dark" : "outline-dark"}
              className="mx-2"
              onClick={() => setSelectedCategory(cat.name)}
            >
              {cat.name}
            </Button>
          ))}
          {selectedCategory && (
            <Button
              variant="secondary"
              className="mx-2"
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Button>
          )}
        </div>
  
        {/* Mobile Category Cards */}
        <div className="d-md-none category-cards mb-4">
          {!selectedCategory ? (
            <Row>
              {categories.map((cat, idx) => (
                <Col xs={6} key={idx} className="mb-3">
                  <Card
                    className="category-card text-center"
                    onClick={() => setSelectedCategory(cat.name)}
                  >
                    <Card.Img variant="top" src={cat.image} />
                    <Card.Body>
                      <Card.Title>{cat.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <Button
              variant="secondary"
              className="mb-3"
              onClick={() => setSelectedCategory(null)}
            >
              ← Back to Categories
            </Button>
          )}
        </div>
  
        {/* Products */}
        {(isDesktop || selectedCategory) && (
          <Row>
            {filteredProducts.map((product) => (
              <Col key={product.id} xs={12} md={6} lg={3} className="mb-4">
                <Card className="h-100 products-card">
                  <Card.Img
                    variant="top"
                    src={product.images[0]}
                    className="product-img"
                  />
                  <Card.Body>
                    <Card.Title className="card-title">{product.name}</Card.Title>
                    <Card.Text className="card-text">{product.price}</Card.Text>
                    <Link to={`/hm/product/${product.id}`}>
                      <Button variant="dark">View</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    );
  };
  
  
  
export default Hm