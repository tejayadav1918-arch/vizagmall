import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Resto.css';
const categories = ['All', 'T-Shirts', 'Shirts', 'Jeans', 'Kurtas', 'Shorts', 'Trousers', 'Jackets'];
// Example products (20 items)
export const menproducts = [
  {
    id: 1,
    name: 'Casual Shirt',
    price: '₹1,299',
    images: [
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQQNLdVkvsCWTcC0WsjSIOHtZhBGXQGYiwR9_ZJfgmygaC-llyGOjTyO_USYN9pcpA3bnj7bXC0nNGcW2uVaTdWaYSHdvTniYllILRnL75hzChjOXXal_f_',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSIGDGSAumn4OqUTC6hpSaXBXT6KVhcd5A3Xj37wyXn-ui35UTn_HdmdDD8PcOvkk8zIpfqK98xNebIzwy7odX5Ml8G99SCu5_GwPd2RzSGk_D6g61sqMXsLw',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:A   Nd9GcTrTD6pQS1FQ_7_UT-xC5yvmJp4ytfJ3hfkb60LzpqGbaMmf5uEk5CyZggKkZwdwFO4AlZ_50wIkZf5uV0vdXYfNctsZS7gRVPTbCVvTHuN81ukzRZBVBTK'
    ],
    category: 'Shirts',
    description: 'This casual shirt is crafted from 100% premium cotton for comfort and durability. It features a modern slim fit, perfect for both office and weekend wear. The breathable fabric ensures you stay cool while maintaining a stylish look. Ideal for pairing with jeans or chinos.',
    faqs: [
      'Is it machine washable? Yes, use a gentle cycle.',
      'Does it shrink after wash? Minimal shrinkage expected.',
      'Is the fabric soft? Yes, very comfortable.',
      'Can it be ironed easily? Yes, standard ironing.'
    ],
    reviews: [
      { user: 'Rahul', rating: 5, comment: 'Super comfortable and stylish!' },
      { user: 'Amit', rating: 4, comment: 'Good quality fabric, fits well.' },
      { user: 'Rohan', rating: 5, comment: 'Perfect for casual outings.' }
    ]
  },
  {
    id: 2,
    name: 'Cotton T-Shirt',
    price: '₹799',
    images: [
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ad2d6fce-8a0b-4a9a-b45e-bd805d843c2f/M+J+BRK+CLGTE+HOCKEY+JSY.png',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b63f3192-359e-4119-8e97-8a9086046de5/M+J+BRK+CLGTE+HOCKEY+JSY.png',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2e8db660-3370-492d-844e-cff58313c6fc/M+J+BRK+CLGTE+HOCKEY+JSY.png'
    ],
    category: 'T-Shirts',
    description: 'Soft cotton T-shirt made with breathable fabric for all-day comfort. Features a classic round neck design with a relaxed fit. Perfect for summer wear or casual outings. Durable and easy to maintain.',
    faqs: [
      'Is it slim fit? Yes, fits true to size.',
      'Can I tumble dry it? Not recommended.',
      'Is it stretchable? Slight stretch for comfort.',
      'Does the color fade? No, retains color after multiple washes.'
    ],
    reviews: [
      { user: 'Suresh', rating: 5, comment: 'Very soft and comfortable!' },
      { user: 'Vikram', rating: 4, comment: 'Nice fit and fabric.' },
      { user: 'Amit', rating: 5, comment: 'Perfect for casual wear.' }
    ]
  },
  {
    id: 3,
    name: 'Flamingo Print Shirt',
    price: '₹1,299',
    images: [
      'https://sevendc.in/cdn/shop/products/SevenDesign_0375.jpg?v=1679565302&width=10001',
      'https://sevendc.in/cdn/shop/products/SevenDesign_0367_f6af4e58-1cf5-4d46-aa30-f4ae25609e31.jpg?v=1719476618&width=1000',
      'https://sevendc.in/cdn/shop/products/SevenDesign_0380.jpg?v=1719476618&width=1000'
    ],
    category: 'Shirts',
    description: 'Fun flamingo print shirt made with soft cotton fabric. Perfect for casual Fridays, brunches, or weekend outings. Breathable and lightweight, ideal for warm weather. Designed to keep you stylish and comfortable.',
    faqs: [
      'Is the print durable? Yes, lasts through multiple washes.',
      'Does it shrink after wash? Minimal shrinkage.',
      'Is it machine washable? Yes, gentle cycle recommended.',
      'Can it be ironed? Yes, standard ironing works.'
    ],
    reviews: [
      { user: 'Vikram', rating: 5, comment: 'Love the print and feel!' },
      { user: 'Rohan', rating: 4, comment: 'Good quality, nice design.' },
      { user: 'Arjun', rating: 5, comment: 'Stylish and comfortable!' }
    ]
  },
  {
    id: 4,
    name: 'Slim Fit Polo',
    price: '₹1,499',
    images: [
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f9329798-6621-4f2a-931d-aedef5768249/AS+M+NKCT+DF+POLO+SOLID.png',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ed1af2c3-2090-441e-b116-961f1c0b30d2/AS+M+NKCT+DF+POLO+SOLID.png',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1fca3aae-b333-46c4-aa2d-01db1a27dc0c/AS+M+NKCT+DF+POLO+SOLID.png'
    ],
    category: 'T-Shirts',
    description: 'Elegant slim-fit polo T-shirt crafted from soft cotton blend. Features a buttoned placket and ribbed collar. Ideal for casual and semi-formal wear. Breathable fabric keeps you comfortable all day.',
    faqs: [
      'Does it shrink? Minimal shrinkage.',
      'Is it stretchy? Slight stretch for comfort.',
      'Can it be machine washed? Yes, gentle cycle.',
      'Is it suitable for summer? Yes, breathable fabric.'
    ],
    reviews: [
      { user: 'Ankit', rating: 4, comment: 'Nice fit and soft fabric.' },
      { user: 'Sahil', rating: 5, comment: 'Looks very classy!' },
      { user: 'Ramesh', rating: 4, comment: 'Good quality material.' }
    ]
  },
  {
    id: 5,
    name: 'Denim Jeans',
    price: '₹1,799',
    images: [
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQn4ASTDd_6Mmdc8wW4ACgfUgFd4x7-01LoG6pXn0wLDmMCXl7rcU-4w7NCD3-3vX1-K98BiwlmNLck8ZRs0456Q_KiIxwcjFCChqt-kULQ',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQxw7P4SYdtmpK22oYwqc44t5kH7G2g3GjPFQgzawVS52MY2ToOaNG68ZuSSqKQZwCRnYry2x1QlceuyDKB5ZUEKA1nYAdm2trlS-4ZfM1N',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQju2GhrA0d6rjCND0YXsDcJECt2tz2NxSvKAzy-TrbM0sew1ZgmN3mILNUKe_Te1ct58qdPj1cJiL3ybubFtHUFEQyVSdZZHk8na3IF_w'
    ],
    category: 'Jeans',
    description: 'Classic slim denim jeans made from premium quality fabric. Comfortable for daily wear with a modern tapered fit. Ideal for pairing with shirts, T-shirts, or polos. Durable and stylish for any casual occasion.',
    faqs: [
      'Are they stretchable? Slight stretch for comfort.',
      'Machine washable? Yes, recommended inside out.',
      'Do they fade? Minimal fading with care.',
      'Can they be ironed? Yes, low heat recommended.'
    ],
    reviews: [
      { user: 'Ramesh', rating: 5, comment: 'Excellent fit and durable!' },
      { user: 'Vikram', rating: 4, comment: 'Very comfortable denim.' },
      { user: 'Sahil', rating: 5, comment: 'Stylish and good quality!' }
    ]
  },
  {
    id: 6,
    name: 'Formal Shirt',
    price: '₹1,399',
    images: [
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRQhuonqb4uCthczJ2XvvdQmmc6-tyVLg-aCEaMIxjFsaPFDHWhFQquX_BqGyYPzBfO4H-D68J26F3zOtq0S4C0AAMZohTbN2TdvNONZDgB',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR8ZW_HU5rSJvXL7DW1vD5Fu8Kf2IFy_BPJA99QD9MjSh-o6KdKS-2pQ2RhruN-Qd2yH7ldBZj8zWqKm0CxXAPe1HlzZkMdt05tPhAi38li',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRMzFQLvpNyCJdjQfrZo6MuZVKNPsUxsPPNSiFwtoo-2g50H8xhJLhEXFcfI_HdkPGH79bBSOX20Y-glDRrLIKl7t6e3pZTewIquV1Swxg'
    ],
    category: 'Shirts',
    description: 'Perfect formal shirt for office and professional wear. Crafted from soft, high-quality cotton. Modern fit ensures comfort while maintaining a sharp appearance. Breathable and easy to maintain.',
    faqs: [
      'Is it easy to iron? Yes, minimal wrinkles.',
      'Does it shrink? No significant shrinkage.',
      'Machine washable? Yes.',
      'Can it be worn for formal meetings? Absolutely.'
    ],
    reviews: [
      { user: 'Deepak', rating: 5, comment: 'Great for office wear.' },
      { user: 'Ankit', rating: 4, comment: 'Comfortable and stylish.' },
      { user: 'Rohit', rating: 5, comment: 'Excellent quality!' }
    ]
  },
  {
    id: 7,
    name: 'Graphic T-Shirt',
    price: '₹899',
    images: [
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRttEQyKuUZs3U61olzjPps8lk4WeHXAx6gU2iI6hkjMq89Mo94KbkVkihFftlrBpspngZvcCM67vJ7qNCXlzAmAACWIFJbW90jPq5CBhb0',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSAxvfNA4mX7QyRQES7aR5yyWm6Ko7mlP6VL83sCsW45ha9QFmW9m8rFvlfR56djV_wJsALDjMFbHoDG0W1iTNZEsZtMqLyOGSot_GI4Hc',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR4D4Gri9BIKPRFzLopq8X2_KfyitF8LgN0TOb-Wfgl7Y_SSDOuguP2xmxJVRbJPpIIfqPYmFbNSDQxDGFJKqtcnhEm12oWP8OYgixkm-MW'
    ],
    category: 'T-Shirts',
    description: 'Trendy graphic T-shirt made from soft cotton. Perfect for casual outings and summer wear. Features a round neck and modern fit. Durable and stylish for everyday wear.',
    faqs: [
      'Is print durable? Yes, high-quality print.',
      'Material? 100% cotton.',
      'Does it shrink? Minimal shrinkage.',
      'Machine washable? Yes.'
    ],
    reviews: [
      { user: 'Manish', rating: 4, comment: 'Looks cool and comfortable.' },
      { user: 'Vikram', rating: 5, comment: 'Perfect for summer.' },
      { user: 'Sahil', rating: 4, comment: 'Good quality T-shirt.' }
    ]
  },
  {
    id: 8,
    name: 'Linen Kurta',
    price: '₹1,599',
    images: [
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQF9P66AoV7iZRGHOC7oe24elHCYn-fcHsfie4_YxmF8g3B7kYMZPOnnhGPREkNaS83l0Yj6o-WWQPHcs1T8Dd0P-Eys2Om9iqdwHeiziiX0lDwkygJW0WVcQ',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT6q2Pu4eg53rBPz0KH_jMtiI9D5zqY2ViCkjFctq_WteUrPQs_I7s2AmE7tiDi6Rwu2o6w62SECSBnx2lVWW2imRrSXie-teNdwlbsvMfSOt7yh69wG5jg',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSJw9dSsNBuHBgAA4pUS7oc5at48h_Jwf6D8Us-yVsF4p-6lR9sVt25rLWQGEri4LWJdzBoxwMkQa-QCp6Zf7SvygawGx9ja0gQCLqupkxs'
    ],
    category: 'Kurtas',
    description: 'Lightweight linen kurta ideal for summer and festive wear. Comfortable, breathable, and stylish. Features a modern cut for a perfect fit. Can be paired with churidar or jeans for a casual or semi-formal look.',
    faqs: [
      'Hand wash recommended? Yes.',
      'Does it shrink? Minimal shrinkage.',
      'Can it be ironed? Yes.',
      'Is it suitable for festive occasions? Yes.'
    ],
    reviews: [
      { user: 'Arjun', rating: 5, comment: 'Very comfortable and stylish!' },
      { user: 'Rohit', rating: 4, comment: 'Nice fit and quality.' },
      { user: 'Suresh', rating: 5, comment: 'Perfect for festivals.' }
    ]
  },
  {
    id: 9,
    name: 'Chino Pants',
    price: '₹1,499',
    images: [
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSHHVvJBebv-lw9cIs-SRJLsORp8hyoQefR9uWtp1NS4_RDYMPzTNzVk0pvjHuu1SKA9CyEb725fVAfyl56WKWZRU-Vi7b5JfYmcXgbg4kG',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQdFunbgOLp-nRj8HZw8RHt233Mgh5FyvKig0HU48_M233w2THydhHR-UrxI3HsGVIVGEJ0YMKaBIVF24pdWBIduxymyQxqaO2IJ6ghMnD8pQ9kAkpQq9kRdA',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSsUHNTE_IzyMcUWUCOLmOPC-z6OHI7xdGb0YXF-oszRVTeWSI2xTunHHLWsvs9QCEjxlj-7aHOI2tF_0BZckZBynKsBeeJquejAPL4mQL9'
    ],
    category: 'Trousers',
    description: 'Classic slim-fit chino pants for semi-formal and casual occasions. Made from high-quality cotton blend for comfort. Easy to pair with shirts, polos, or T-shirts.',
    faqs: [
      'Stretchable? Slight stretch.',
      'Machine washable? Yes.',
      'Suitable for office wear? Yes.',
      'Does it fade? Minimal fading with care.'
    ],
    reviews: [
      { user: 'Sahil', rating: 5, comment: 'Perfect fit and comfortable.' },
      { user: 'Ramesh', rating: 4, comment: 'Good quality material.' },
      { user: 'Vikram', rating: 5, comment: 'Stylish and versatile.' }
    ]
  },
  {
    id: 10,
    name: 'Polo T-Shirt',
    price: '₹999',
    images: [
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS9HI1hApKyCtLlCrY-oqSjTn8nDoSzOIO-HooFTvIKje6p1O9ySRHVyDCsK93iL-tS0YzXbFUZAvCU7WDT0wUfduu9IvNPsiv8ggRmA14hwdFiBS1mQ4BB',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTzsVvZ0bFwTVGHdudpF6T-M0ZoXUFPELBpgi9k2ahvkmJzCEUAIqo_UggnpZnCy9BLuNtikBXTRIQpPbpILiFLtWtU7aIj-P9Ue-AxGpc',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ3uXaHkOHiaybCxNUeEjekxO8Zt2y9QNAZnIE8mJuAt4WlVEQUkAQ9lTo5wodmbPsoJYWM1MEywfES_oTvyYg45yFdq7b2'
    ],
    category: 'T-Shirts',
    description: 'Classic polo T-shirt made from breathable cotton. Features a comfortable slim fit, button placket, and ribbed collar. Perfect for casual outings or semi-formal occasions.',
    faqs: [
      'Is it slim fit? Yes.',
      'Machine washable? Yes.',
      'Can it be ironed? Yes.',
      'Does it shrink? Minimal shrinkage.'
    ],
    reviews: [
      { user: 'Ankit', rating: 4, comment: 'Nice for casual wear.' },
      { user: 'Rohan', rating: 5, comment: 'Comfortable and stylish.' },
      { user: 'Sahil', rating: 4, comment: 'Good quality material.' }
    ],
  },
  {
    id: 11,
    name: 'Checked Shirt',
    price: '₹1,299',
    images: [
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSZ4QwJgijUGpXvCfRfmL8RxUjoJ39LJ9QVUKmOW3A2IKTAlV6W2B0KupJZYb9MKyUnIJOu1taEF-guRIYMoLR7-5HZXKtFVcCcqHZoan0g978Zdo_IHlUQbg',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSuDSwyQbeAU83Z8TvZlOXTk1Xre3qm0gNafzEM4fbKsZ034dwCsy9TTM4HiKLfilHd3c74fIPLsNfkL0r9Pmt-qAfNytHHRGwXs5PY8LJcUmzfQETVnGKH',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRhPaKPzlGYbFinyxNVyXD7JlJD_adMKGxo3eBYEeiKWUZvVOt56GVLBL1T_AlSz_B0Pv__AuQXzzO-YGGBTJ8fIEuOCSafvATbDgWqayM'
    ],
    category: 'Shirts',
    description: 'Stylish checked shirt made of soft cotton. Perfect for casual and semi-formal wear. Modern fit ensures comfort while maintaining a polished look. Breathable fabric keeps you cool all day.',
    faqs: [
      'Is it machine washable? Yes, gentle cycle recommended.',
      'Does it shrink? Minimal shrinkage expected.',
      'Can it be ironed? Yes, easy to iron.',
      'Is it suitable for office? Yes, semi-formal approved.'
    ],
    reviews: [
      { user: 'Vikram', rating: 5, comment: 'Great fit and fabric!' },
      { user: 'Rohit', rating: 4, comment: 'Stylish and comfortable.' },
      { user: 'Amit', rating: 5, comment: 'Perfect for casual Fridays.' }
    ]
  },
  {
    id: 12,
    name: 'Cotton Shorts',
    price: '₹699',
    images: [
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSGuwoJDUZB2BsvddEPeAn4C2py0lfUUKeu2qbq6wdfCTacd0YaE9o2Y6jKNjO4cM4YlLzNB7Z7LJwH-DKU32EwnQjCfO2Dh3-PGST-noScYunDxd68IxZ5pA',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQMIjW0JMPf7x8fDSmMTzmNRA61xHrWcyQU1bK8NeuvDR0NOSwrmgC5sBtoywgQQdqkxSDzV2WoQjhVkZEKXRG9UZCHUhDvJgZBK0TJ7knpvgCd-Ccsuee4A',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQVvaInypmqwsdlgJOJHJv1rjpkk5cEhaaiDZ4EZBvgS5rCA2kyAF1fgKP6G37ZTmbI2ibKCbVUPd3vXTTdANyPxVbe7I93jZlnzJf4rNVD'
    ],
    category: 'Shorts',
    description: 'Comfortable cotton shorts perfect for summer wear or lounging at home. Lightweight and breathable fabric keeps you cool. Modern fit allows free movement while maintaining a neat look.',
    faqs: [
      'Machine washable? Yes.',
      'Does it fade? Minimal fading.',
      'Suitable for casual wear? Absolutely.',
      'Is the fabric soft? Yes, very soft.'
    ],
    reviews: [
      { user: 'Sahil', rating: 5, comment: 'Perfect for hot weather!' },
      { user: 'Ramesh', rating: 4, comment: 'Comfortable and durable.' },
      { user: 'Vikram', rating: 5, comment: 'Exactly what I needed.' }
    ]
  },
  {
    id: 13,
    name: 'Printed Kurta',
    price: '₹1,699',
    images: [
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQlstAlcOFSZh_3e-IYa_MBgtXCB4MjN1052UpUTck6PKodeHF1ALdUXs63kQwL-8h7oBKs_Ja2OP7M7oeQcaCNGqoqB5IqkSiZvrvF9kM',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTPP5k_sa4dOInGKHoz4PjN2U62f2Rkz1YqP6WAJuT90wwr0SqYKzIM_v6q6_Yw_CLY6ZBDw-6zqpoZ1KfKWDPI-Vpk7btf-hw4O1kkx6-5',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSOSDDuQ4AhacWJolNn3aIsPS-dm2S9bO8o3ao3Z_FW7LFESSBzybi297uY0vlSiSyIXiA1mkPKYGAAJf4fpNwoWfN6cOMrsW1qGkOAhNMz'
    ],
    category: 'Kurtas',
    description: 'Elegant printed kurta made from soft cotton. Ideal for festive occasions or casual outings. Modern design with breathable fabric ensures comfort and style.',
    faqs: [
      'Hand wash recommended? Yes.',
      'Does it shrink? Minimal shrinkage.',
      'Can it be ironed? Yes.',
      'Suitable for festivals? Absolutely.'
    ],
    reviews: [
      { user: 'Arjun', rating: 5, comment: 'Beautiful kurta, very comfortable.' },
      { user: 'Suresh', rating: 4, comment: 'Perfect for festivals.' },
      { user: 'Rohit', rating: 5, comment: 'Great quality and design.' }
    ]
  },
  {
    id: 14,
    name: 'Slim Jeans',
    price: '₹1,899',
    images: [
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSj_fmC3AEV3LZXk8bMcgNtA9tJ7-m40Nean4xntVtdez3djWnvaKjmZNJojrm3MnL_MZrPsuP92ncw5nO2AxhIhWbUkU7uyr_u_WmBrfXN8wIicgjv21FjTlI',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTCdUKmtglCpXjATi84Qw42-jAJFpYl8J9aMchw9BowMAivQQLp67zAUVgJ048Mvi5WFHajBFh6qxLCoD6U1l3jqMdnG9QCvEOFMzkkw32MgAyT9LBM6eEZ8Sk',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTI7K3FDdPnqdsuSUTLVgvcF0AWnCEbjGFjjQgLRaQeH9WpYIW-HS8qePdTxY06A2bPcm6hXfvvyk1PWfHZbNfErBGo81zT51H_FspAbMiMGLM_lwFm2UOS'
    ],
    category: 'Jeans',
    description: 'Modern slim-fit jeans made from high-quality denim. Comfortable and stylish, ideal for casual outings or semi-formal events. Durable fabric ensures long-lasting wear.',
    faqs: [
      'Are they stretchable? Slight stretch for comfort.',
      'Machine washable? Yes.',
      'Do they fade? Minimal fading.',
      'Can they be ironed? Yes, low heat recommended.'
    ],
    reviews: [
      { user: 'Ramesh', rating: 5, comment: 'Great fit and look!' },
      { user: 'Sahil', rating: 4, comment: 'Comfortable and durable.' },
      { user: 'Vikram', rating: 5, comment: 'Stylish jeans for everyday wear.' }
    ]
  },
  {
    id: 15,
    name: 'Hooded T-Shirt',
    price: '₹999',
    images: [
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTKlkMekTYla-G2BCo8wHFoDU7NC01Qde0w2N86lw5qqD0LrtrPPabeYIWSKZ3pkzJT7HwWyHZVA2Lci-5EQYU0D2mQvEdCx-snyEyLmcdEW5xQRMGbUlYG',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQpQ10-pJ7iZVGHRk7nETW7S34yXNy3dZgpJahDH5sx_BOuk-Mmet-4ABBjnyQWWUFYQFbK3cs7xW69_iuGuGkW8Y9dSPfJ0I-kLQzH8KxdmL50Py2EMBuZ',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcREkPSSMX7IK-QxeLRWictJhc2ywPYAiiJ2YwPn_iISy-o_J9tgBjj0pDaHYtyZHMAj2HcfH6MxruPdGeWYMibuy-15bFqHt_8im7QB_KSsCCsOjAG7vQSx'
    ],
    category: 'T-Shirts',
    description: 'Casual hooded T-shirt with soft cotton fabric. Ideal for layering and casual outings. Modern design with hood ensures style and comfort.',
    faqs: [
      'Is it machine washable? Yes.',
      'Does it shrink? Minimal shrinkage.',
      'Can it be ironed? Yes.',
      'Is the hood comfortable? Yes, soft fabric.'
    ],
    reviews: [
      { user: 'Ankit', rating: 4, comment: 'Nice hood and fit.' },
      { user: 'Rohan', rating: 5, comment: 'Comfortable and stylish.' },
      { user: 'Suresh', rating: 4, comment: 'Good quality material.' }
    ]
  },
  {
    id: 16,
    name: 'Formal Trousers',
    price: '₹1,499',
    images: [
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSWytFriA-WkaTBsAO8kVdzvDQAZep6Eot9TeAB_C_2mIAwRu4BnpIUQqx6n6NU6yXqH8C-55-F-gWcwiGoxkYuu8RimWyOwdHhw-DkexBalo1AsD6D59jP',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRLOXrqXEiwEXr8mJ3zkjeEegFeDr2udBouPk6NSD2ejtaatjp5Uzs7g9-MC4lx7iEpDYDDLVES32pLGiFd04Q1N_dxKGSa-yUtSsIm7CpMVsuaeQRxYEcJ',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQcGyMFfZ78OgR8zxdHu7HK3XjHmj43F7lgY8eWe8Ns4XDwNkSRb0V4I4S5r7V6WguXBRssm7cQatAPsOVCssjWOegg9uh6xOsBbfdwWoIu'
    ],
    category: 'Trousers',
    description: 'Classic formal trousers for office and semi-formal occasions. Made from high-quality fabric for durability and comfort. Sleek design ensures a professional look.',
    faqs: [
      'Is it machine washable? Yes.',
      'Does it shrink? Minimal shrinkage.',
      'Suitable for office? Yes.',
      'Can it be ironed? Yes, low heat.'
    ],
    reviews: [
      { user: 'Ramesh', rating: 5, comment: 'Perfect for office wear.' },
      { user: 'Vikram', rating: 4, comment: 'Fits well and comfortable.' },
      { user: 'Sahil', rating: 5, comment: 'Professional look and quality.' }
    ]
  },
  {
    id: 17,
    name: 'Casual Shorts',
    price: '₹799',
    images: [
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTzIxByKRSZVg6fNy0nH_CHGMdO-sBr5xgeMpp8zvTzSBbzVyjQmY-IQoUR1fdJjIf5lsEmocXjCe9MkUam4SiXKB70GzuHWvyCb72AXd0',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSgYx1SGct8ZNbqbHFVV8SjGGxo1G-TU5Wa7XxA0IZX3ggq9htfwSmzFmkot58tR134mzqk2P5V-2HlUapEkNowk5eQqq_54yTgaeEvp5Zr',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS-CzgOvDL9Qtj2xx08d_5HgHmD8Upc96LD_VyGQ-WIy5IQIUP-_5MIWUp_oaXofDtji9nsUimPI5sveudakI7etFRqMdF2wYH4_ejYBdGK8_9VGFuRob1m'
    ],
    category: 'Shorts',
    description: 'Lightweight casual shorts made from soft cotton fabric. Perfect for summer and daily wear. Comfortable fit allows easy movement and relaxed style.',
    faqs: [
      'Machine washable? Yes.',
      'Does it fade? Minimal fading.',
      'Is it breathable? Yes.',
      'Suitable for casual outings? Absolutely.'
    ],
    reviews: [
      { user: 'Sahil', rating: 5, comment: 'Very comfortable!' },
      { user: 'Ramesh', rating: 4, comment: 'Good for summer wear.' },
      { user: 'Vikram', rating: 5, comment: 'Perfect casual shorts.' }
    ]
  },
  {
    id: 18,
    name: 'Striped T-Shirt',
    price: '₹899',
    images: [
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTkGsjcSLBNXIc8BE1lQBJ7AsGH7Kg2EqCpbiwjExcrr7m8ULdlZK79ap45cJ_EmBLbNBRlUNF6gGboXcV0MRTzbTkwsO5Mrf_sS9ceRCoh',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT5XJRql1819943B1WnhE_Hl0cnC5xvRI98LfHfDM2y3swYexl7xcRN1u5EwfC3i3XGMt-ZD5AT5cBp0h9IqsnTqUTPqZwe66THw-v4DIeEcUh-j15EVgnhGg',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTjEcDdO8nTY8YHFPM1hGU35Cl67yhL5kr6pVMlVGNrQp7_15X6nYmSHDeGDxSz-AV7AOew1T3qqOMKnNi9a8KsFRxE0JtTibUH0F2WpCPb5xbB8kDPZSAZRQ'
    ],
    category: 'T-Shirts',
    description: 'Modern striped T-shirt made from soft cotton. Comfortable fit with breathable fabric. Ideal for casual wear and layering with jackets or hoodies.',
    faqs: [
      'Is it machine washable? Yes.',
      'Does it shrink? Minimal shrinkage.',
      'Material? 100% cotton.',
      'Can it be ironed? Yes.'
    ],
    reviews: [
      { user: 'Ankit', rating: 4, comment: 'Nice design and fabric.' },
      { user: 'Rohan', rating: 5, comment: 'Comfortable and stylish.' },
      { user: 'Suresh', rating: 4, comment: 'Good quality T-shirt.' }
    ]
  },
  {
    id: 19,
    name: 'Cotton Pants',
    price: '₹1,299',
    images: [
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTCmH87mT7r3eWhHuvkV2YjODRE7eE7mzApvKC1tRcUQ2NTi4unM-HtXd0aRvuHnjhRIf1xRhfrY3vn45XJQKXB70yARTTBt-UW5yAkl3fL',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT9JzN7cfw55fgvz3pJCbqFDlO4l_wVUnc0te99OD-eQmm7VCcyvwm4HtzU5LE7PzfcTwStNq3tqtNU2ByVmTBvThAiC9owO5dxUkTkrWyr',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqRw57QkidNtZvFGSZ0Y_nEwGBxQXK8itsfFCK3YAd0kCZMnGzWpjXEuqGhoJGcpfvoacdIeKfm-dXAd2KUmQ9mfDzQLRO4uyxcgBSN-tv'
    ],
    category: 'Trousers',
    description: 'Comfortable cotton pants suitable for casual and semi-formal wear. Breathable and durable fabric ensures all-day comfort. Easy to pair with shirts and T-shirts.',
    faqs: [
      'Is it machine washable? Yes.',
      'Does it shrink? Minimal shrinkage.',
      'Suitable for office? Yes.',
      'Can it be ironed? Yes.'
    ],
    reviews: [
      { user: 'Ramesh', rating: 5, comment: 'Comfortable and versatile.' },
      { user: 'Vikram', rating: 4, comment: 'Good quality pants.' },
      { user: 'Sahil', rating: 5, comment: 'Perfect casual trousers.' }
    ]
  },
  {
    id: 20,
    name: 'Denim Jacket',
    price: '₹2,099',
    images: [
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQSOJaJ7khWUWGb5lAJ_7RXRx_4D1BuCVWeO_maWiiFM4d9Nf1hhnvpioyDcfylfcTFwZFeJ8fZkM95zIGWv5vVfY2-vFGDf8wKdVW6U8U',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQpSsKt9oVZ8UVkqT78_WUrtt5llIILISyrqwaHpiGG5LzyVWeQ7zgUdbU4gVBWMU1mppq61I6GVnfrkENHMiQcz0DlJnFy5EubngRRQQy2',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcScFABvAe6m7plAHUfx8sIy6sipj3pPK7gB-gLsVVYJQMeRFvNksfO1JgD69B310gqhxfW-7pE3GiPVXou8qDZXs_orc_jEbdVBaKbhLpEg0CCqEhX6djBV'
    ],
    category: 'Jackets',
    description: 'Classic denim jacket made from high-quality durable denim. Stylish and versatile for layering over T-shirts or shirts. Ideal for casual outings and semi-formal looks.',
    faqs: [
      'Is it machine washable?  Yes, gentle cycle recommended.',
      'Does it shrink? Minimal shrinkage.',
      'Is it suitable for layering? Yes.',
      'Can it be ironed? Yes, low heat.'
    ],
    reviews: [
      { user: 'Ankit', rating: 5, comment: 'Excellent denim jacket!' },
      { user: 'Rohan', rating: 4, comment: 'Comfortable and stylish.' },
      { user: 'Sahil', rating: 5, comment: 'Great quality and fit.' }
    ]
  }
];
const Offermen = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('All');
  
    // Filter products based on selected category
    const filteredProducts =
      selectedCategory === 'All'
        ? menproducts
        : menproducts.filter((p) => p.category === selectedCategory);
  
    return (
      <Container className="my-5">
         
        <h1 className="mb-3" style={{textAlign:"center"}}>MENS OFFERS PAGE</h1>
        {/* Categories */}
        <Nav variant="pills" className="mb-4 flex-nowrap overflow-auto">
          {categories.map((cat, idx) => (
            <Nav.Item key={idx} className="me-2">
              <Nav.Link
                active={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
  
        {/* Products Grid */}
        <Row>
         {filteredProducts.map((product , idx) => (
                               <Col
                           key={product.id}
                           xs={idx === 0 ? 12 : 6}   // ✅ first card full-width, rest half-width in mobile
                           md={4}             
                           sm={6}
                           lg={3}      // ✅ normal 3 per row in desktop
                           className="mb-4"
                         >
              <Card className="h-100">
                <Card.Img
    variant="top"
    src={product.images[0]}   // 👈 pick first image
    style={{ height: '350px', objectFit: 'cover' }}
  />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="text-danger fw-bold">{product.price}</Card.Text>
                  <Button
                    variant="danger"
                    className="mt-auto"
                    onClick={() => navigate(`/offermen/product/${product.id}`)}
                  >
                    View Product
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

export default Offermen