export default function handler(req) {
    const products  = [ 
{
    id: 1,
    name: "Shoes Name 1",
    price: "414",
    image: "/images/e1.png",
  },
  {
    id: 2,
    name: "Shoes Name 2",
    price: "416",

    image: "/images/e2.png",
  },
  {
    id: 3,
    name: "Shoes Name 3",
    price: "518",
    image: "/images/e3.png",
},
{
    id: 4,
    name: "Shoes Name 4",
    price: "414",
    image: "/images/e4.png",
  },
  {
    id: 5,
    name: "Shoes Name 5",
    price: "414",
    image: "/images/e5.png",
  },
  {
    id: 6,
    name: "Shoes Name 6",
    price: "414",
    image: "/images/r3.png",
  },
    ]
    req.status(200).json(products);
}