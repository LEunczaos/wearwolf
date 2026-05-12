const products = [
  {
    id: 1,
    name: "Wolf Hoodie",
    price: 45000,
    category: "hoodies",

    image: "/images/clothes/hoodies/green-hoodie.png",

    variants: [
      {
        color: "#3f704d",
        image: "/images/clothes/hoodies/green-hoodie.png"
      },

      {
        color: "#808080",
        image: "/images/clothes/hoodies/gray-hoodie.png"
      }
    ]
  },

  {
    id: 2,
    name: "Night Tee",
    price: 25000,
    category: "tshirts",

    image: "/images/clothes/tshirts/navy-tshirt.png",

    variants: [
      {
        color: "#1e3a5f",
        image: "/images/clothes/tshirts/navy-tshirt.png"
      },

      {
        color: "#808080",
        image: "/images/clothes/tshirts/gray-tshirt.png"
      }
    ]
  },

  {
    id: 3,
    name: "Shadow Jacket",
    price: 80000,
    category: "jackets",

    image: "/images/clothes/jackets/olive-jacket.png",

    variants: [
      {
        color: "#808080",
        image: "/images/clothes/jackets/olive-jacket.png"
      },

      {
        color: "#c8a2c8",
        image: "/images/clothes/jackets/lilac-jacket.png"
      }
    ]
  }
];

export default products;