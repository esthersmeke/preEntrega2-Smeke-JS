// Array de restaurantes con sus platillos mas populares
const popularRestaurants = [
  {
    name: "McDonald's",
    menu: [
      {
        name: "Big Mac",
        description: "Iconic double-decker hamburger",
        price: 3.99,
        calories: 563,
        fat: 33,
        carbs: 45,
        protein: 24,
        image:
          "https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off",
      },
      {
        name: "McChicken",
        description: "Chicken sandwich with lettuce and mayo",
        price: 4.49,
        calories: 400,
        fat: 19,
        carbs: 43,
        protein: 15,
        image:
          "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-McChicken-Sandwich-2:1-3-product-tile-desktop?wid=829&hei=515&dpr=off",
      },
      {
        name: "McFlurry",
        description: "Soft-serve ice cream with mix-ins",
        price: 2.99,
        calories: 510,
        fat: 17,
        carbs: 80,
        protein: 11,
        image:
          "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-oreo-mcflurry-allergen:1-3-product-tile-desktop?wid=829&hei=515&dpr=off",
      },
      {
        name: "French Fries",
        description: "Crispy golden fries",
        price: 1.99,
        calories: 365,
        fat: 17,
        carbs: 49,
        protein: 4,
        image:
          "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_8932_MediumFries_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off",
      },
      {
        name: "Apple Pie",
        description: "Warm apple pie dessert",
        price: 1.29,
        calories: 250,
        fat: 13,
        carbs: 32,
        protein: 2,
        image:
          "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-ApplePie:1-3-product-tile-desktop?wid=829&hei=515&dpr=off",
      },
    ],
  },
  {
    name: "Starbucks",
    menu: [
      {
        name: "Caramel Frappuccino",
        description: "Blended coffee with caramel and whipped cream",
        price: 4.99,
        calories: 420,
        fat: 14,
        carbs: 66,
        protein: 5,
        image:
          "https://www.starbucks.com.au/imagecache/bestfit/620x634/_files/product-images/frapps/coffee/sbx20181113-21425-caramelfrapp-onwhite-corelib-srgb.png",
      },
      {
        name: "Iced Caramel Macchiato",
        description: "Iced espresso with caramel syrup and milk",
        price: 3.99,
        calories: 250,
        fat: 6,
        carbs: 45,
        protein: 4,
        image:
          "https://www.starbucksathome.com/es/sites/default/files/styles/rdp_banner_image/public/2021-06/10032021_IcedCaramel_Work_CS-min.png?itok=cSJzBXY2",
      },
      {
        name: "Java Chip Frappuccino",
        description: "Blended coffee with chocolate chips and whipped cream",
        price: 5.49,
        calories: 460,
        fat: 18,
        carbs: 73,
        protein: 5,
        image:
          "https://www.starbucks.com.au/imagecache/bestfit/620x634/_files/product-images/frapps/coffee/sbx20190528-30340-javachipfrapp-onwhite-corelib-srgb.png",
      },
      {
        name: "Chicken & Quinoa Protein Bowl",
        description: "Grilled chicken, quinoa, and vegetables",
        price: 7.99,
        calories: 390,
        fat: 16,
        carbs: 43,
        protein: 24,
        image:
          "https://globalassets.starbucks.com/assets/4037795cf3b34c839cf444017aad2579.jpg?impolicy=1by1_medium_630",
      },
      {
        name: "Spinach & Feta Wrap",
        description: "Spinach, feta, and egg breakfast wrap",
        price: 4.29,
        calories: 290,
        fat: 10,
        carbs: 35,
        protein: 19,
        image:
          "https://globalassets.starbucks.com/digitalassets/products/food/SBX20181219_SpinachFetaWrap.jpg?impolicy=1by1_medium_630",
      },
    ],
  },
  {
    name: "Pizza Hut",
    menu: [
      {
        name: "Supreme Pizza",
        description: "Loaded with pepperoni, sausage, mushrooms, and more",
        price: 14.99,
        calories: 320,
        fat: 17,
        carbs: 35,
        protein: 12,
        image:
          "https://cr.pizzahutnassau.com/wp-content/uploads/2021/11/sp-supreme.jpeg",
      },
      {
        name: "Veggie Lovers Pizza",
        description: "Pizza topped with assorted vegetables",
        price: 13.99,
        calories: 280,
        fat: 12,
        carbs: 36,
        protein: 9,
        image:
          "https://api.pizzahut.io/v1/content/en-ca/ca-1/images/pizza/pizza.veggie-lovers.48ba54d49ff2257671521b477967633a.1.jpg",
      },
      {
        name: "Hawaiian Pizza",
        description: "Pizza with ham and pineapple",
        price: 12.99,
        calories: 310,
        fat: 10,
        carbs: 40,
        protein: 15,
        image:
          "https://api.pizzahut.io/v1/content/en-ca/ca-1/images/pizza/pizza.hawaiian.6c049fb1897c6f45f597dd1671fbd016.1.jpg",
      },
      {
        name: "Pepperoni Lover's Pizza",
        description: "Pizza loaded with pepperoni",
        price: 13.99,
        calories: 320,
        fat: 15,
        carbs: 36,
        protein: 13,
        image:
          "https://api.pizzahut.io/v1/content/en-ca/ca-1/images/pizza/pizza.pepperoni-lovers.69f7bdf7b6f50a87eb2886934fe0be9f.1.jpg",
      },
      {
        name: "Cheese Stuffed Crust Pizza",
        description: "Pizza with a cheese-stuffed crust",
        price: 15.99,
        calories: 340,
        fat: 16,
        carbs: 39,
        protein: 14,
        image:
          "https://4.bp.blogspot.com/-YJ70BU8I8WA/VL62OxauXgI/AAAAAAAAj0U/6XkZ2IU4nm4/s1600/Pizza-Hut-Triple-Cheese-Covered-Stuffed-Crust.jpg",
      },
    ],
  },
];
