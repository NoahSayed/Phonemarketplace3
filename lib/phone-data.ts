export interface PhoneModel {
  id: string

  name: string

  brand: "Apple" | "Samsung" | "Google"

  image: string

  basePrice: number

  specs: {
    ram: string[]

    storage: string[]

    camera: string

    battery: string

    display: string
  }

  variants?: string[]
}

export const phoneData: PhoneModel[] = [
  // Apple iPhones
  {
    id: "used-iphone-18-pro-max",

    name: "iPhone 18 Pro Max",

    brand: "Apple",

    image: "https://cashsecond.s3.ap-south-1.amazonaws.com/upload/product_img/iPhone%2018.jpeg",

    basePrice: 177000,

    specs: {
      ram: ["12GB"],

      storage: ["256GB", "512GB", "1TB", "2TB"],

      camera: "48MP Triple Camera",

      battery: "All-day battery",

      display: '6.9" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-18-pro",

    name: "iPhone 18 Pro",

    brand: "Apple",

    image: "https://cashsecond.s3.ap-south-1.amazonaws.com/upload/product_img/iPhone%2018.jpeg",

    basePrice: 162000,

    specs: {
      ram: ["12GB"],

      storage: ["256GB", "512GB", "1TB", "2TB"],

      camera: "48MP Triple Camera",

      battery: "All-day battery",

      display: '6.3" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-17-pro-max",

    name: "iPhone 17 Pro Max",

    brand: "Apple",

    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-17-pro-max-1.jpg",

    basePrice: 135000,

    specs: {
      ram: ["12GB"],

      storage: ["256GB", "512GB", "1TB", "2TB"],

      camera: "48MP Triple Camera",

      battery: "4832mAh",

      display: '6.9" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-17-pro",

    name: "iPhone 17 Pro",

    brand: "Apple",

    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-17-pro-1.jpg",

    basePrice: 117000,

    specs: {
      ram: ["12GB"],

      storage: ["256GB", "512GB", "1TB"],

      camera: "48MP Triple Camera",

      battery: "3988mAh",

      display: '6.3" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-air",

    name: "iPhone Air",

    brand: "Apple",

    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-air-1.jpg",

    basePrice: 86000,

    specs: {
      ram: ["12GB"],

      storage: ["256GB", "512GB", "1TB"],

      camera: "48MP Single Camera",

      battery: "3149mAh",

      display: '6.5" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-17",

    name: "iPhone 17",

    brand: "Apple",

    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-17-1.jpg",

    basePrice: 72000,

    specs: {
      ram: ["8GB"],

      storage: ["256GB", "512GB"],

      camera: "48MP Dual Camera",

      battery: "3692mAh",

      display: '6.3" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-17e",

    name: "iPhone 17e",

    brand: "Apple",

    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-17e-1.jpg",

    basePrice: 45500,

    specs: {
      ram: ["8GB"],

      storage: ["256GB", "512GB"],

      camera: "48MP Single Camera",

      battery: "4005mAh",

      display: '6.1" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-16-pro-max",

    name: "iPhone 16 Pro Max",

    brand: "Apple",

    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQvwqkh7rZwkUOoxK684Bcp_pVmeA_PWfedPuO7ju3TSBMZNKjyNp2ZAEt9gPkpJZxP4E22W18qNK-Z8WLRUrO0z3CHyG5sG2uL2y8aqNopspAN3CK4u2UE45gU7Z6qerknTW_Glts&usqp=CAc",

    basePrice: 85000,

    specs: {
      ram: ["8GB"],

      storage: ["256GB", "512GB", "1TB"],

      camera: "48MP Triple Camera",

      battery: "4441mAh",

      display: '6.7" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-16-pro",

    name: "iPhone 16 Pro",

    brand: "Apple",

    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-pro-1.jpg",

    basePrice: 78000,

    specs: {
      ram: ["8GB"],

      storage: ["128GB", "256GB", "512GB", "1TB"],

      camera: "48MP Triple Camera",

      battery: "3274mAh",

      display: '6.1" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-16-plus",

    name: "iPhone 16 Plus",

    brand: "Apple",

    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-plus-1.jpg",

    basePrice: 68000,

    specs: {
      ram: ["6GB"],

      storage: ["128GB", "256GB", "512GB"],

      camera: "48MP Dual Camera",

      battery: "4383mAh",

      display: '6.7" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-16",

    name: "iPhone 16",

    brand: "Apple",

    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-1.jpg",

    basePrice: 45000,

    specs: {
      ram: ["6GB"],

      storage: ["128GB", "256GB", "512GB"],

      camera: "48MP Dual Camera",

      battery: "3349mAh",

      display: '6.1" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-15-pro-max",

    name: "iPhone 15 Pro Max",

    brand: "Apple",

    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQvwqkh7rZwkUOoxK684Bcp_pVmeA_PWfedPuO7ju3TSBMZNKjyNp2ZAEt9gPkpJZxP4E22W18qNK-Z8WLRUrO0z3CHyG5sG2uL2y8aqNopspAN3CK4u2UE45gU7Z6qerknTW_Glts&usqp=CAc",

    basePrice: 85000,

    specs: {
      ram: ["8GB"],

      storage: ["256GB", "512GB", "1TB"],

      camera: "48MP Triple Camera",

      battery: "4441mAh",

      display: '6.7" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-15-pro",

    name: "iPhone 15 Pro",

    brand: "Apple",

    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-1.jpg",

    basePrice: 78000,

    specs: {
      ram: ["8GB"],

      storage: ["128GB", "256GB", "512GB", "1TB"],

      camera: "48MP Triple Camera",

      battery: "3274mAh",

      display: '6.1" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-15-plus",

    name: "iPhone 15 Plus",

    brand: "Apple",

    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-plus-1.jpg",

    basePrice: 68000,

    specs: {
      ram: ["6GB"],

      storage: ["128GB", "256GB", "512GB"],

      camera: "48MP Dual Camera",

      battery: "4383mAh",

      display: '6.7" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-15",

    name: "iPhone 15",

    brand: "Apple",

    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg",

    basePrice: 58000,

    specs: {
      ram: ["6GB"],

      storage: ["128GB", "256GB", "512GB"],

      camera: "48MP Dual Camera",

      battery: "3349mAh",

      display: '6.1" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-14-pro-max",

    name: "iPhone 14 Pro Max",

    brand: "Apple",

    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",

    basePrice: 75000,

    specs: {
      ram: ["6GB"],

      storage: ["128GB", "256GB", "512GB", "1TB"],

      camera: "48MP Triple Camera",

      battery: "4323mAh",

      display: '6.7" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-14-pro",

    name: "iPhone 14 Pro",

    brand: "Apple",

    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-1.jpg",

    basePrice: 68000,

    specs: {
      ram: ["6GB"],

      storage: ["128GB", "256GB", "512GB", "1TB"],

      camera: "48MP Triple Camera",

      battery: "3200mAh",

      display: '6.1" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-14",

    name: "iPhone 14",

    brand: "Apple",

    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-1.jpg",

    basePrice: 55000,

    specs: {
      ram: ["6GB"],

      storage: ["128GB", "256GB", "512GB"],

      camera: "12MP Dual Camera",

      battery: "3279mAh",

      display: '6.1" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-14-plus",

    name: "iPhone 14 Plus",

    brand: "Apple",

    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-plus-1.jpg",

    basePrice: 60000,

    specs: {
      ram: ["6GB"],

      storage: ["128GB", "256GB", "512GB"],

      camera: "12MP Dual Camera",

      battery: "4325mAh",

      display: '6.7" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-13-pro-max",

    name: "iPhone 13 Pro Max",

    brand: "Apple",

    image: "https://images-cdn.ubuy.co.in/662a0ae77a99d531d308a1d5-pre-owned-apple-iphone-13-pro-max.jpg",

    basePrice: 58000,

    specs: {
      ram: ["6GB"],

      storage: ["128GB", "256GB", "512GB", "1TB"],

      camera: "12MP Triple Camera",

      battery: "4352mAh",

      display: '6.7" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-13-pro",

    name: "iPhone 13 Pro",

    brand: "Apple",

    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS6XqAGoYD6PKpqbLTrszdJjZ53D4IZoaY9AvwhDvwNtUiLpnAqR0X3fsZDhKWYUHligQ0ZGMi-V_A_kO3fMsbPOD7wDOv6",

    basePrice: 60000,

    specs: {
      ram: ["6GB"],

      storage: ["128GB", "256GB", "512GB", "1TB"],

      camera: "12MP Triple Camera",

      battery: "3095mAh",

      display: '6.1" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-13-mini",

    name: "iPhone 13 Mini",

    brand: "Apple",

    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg",

    basePrice: 40000,

    specs: {
      ram: ["4GB"],

      storage: ["128GB", "256GB", "512GB"],

      camera: "12MP Dual Camera",

      battery: "2438mAh",

      display: '5.4" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-13",

    name: "iPhone 13",

    brand: "Apple",

    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTyD_QroGxyjrCB5_qs3bvR1VcHXos7EChmk1Xs435J5iDoZAAXYMvm2cswl4zcH_wQwoIoO5ufkK6svJSaroXtYOnJF8UfMSTa5WUgzqzNoPsSk5QVWMFz3yjOmzI9feBorwhcz5NQJ7o&usqp=CAc",

    basePrice: 45000,

    specs: {
      ram: ["4GB"],

      storage: ["128GB", "256GB", "512GB"],

      camera: "12MP Dual Camera",

      battery: "3240mAh",

      display: '6.1" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-12-pro",

    name: "iPhone 12 Pro",

    brand: "Apple",

    image: "https://images-cdn.ubuy.co.in/65bf8df80e767d12d7555d5b-used-apple-iphone-12-pro-max-256gb.jpg",

    basePrice: 45000,

    specs: {
      ram: ["6GB"],

      storage: ["128GB", "256GB", "512GB"],

      camera: "12MP Triple Camera",

      battery: "2815mAh",

      display: '6.1" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-11-pro-max",

    name: "iPhone 11 Pro Max",

    brand: "Apple",

    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-1.jpg",

    basePrice: 48000,

    specs: {
      ram: ["4GB"],

      storage: ["64GB", "256GB", "512GB"],

      camera: "12MP Triple Camera",

      battery: "3969mAh",

      display: '6.5" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-11-pro",

    name: "iPhone 11 Pro",

    brand: "Apple",

    image: "https://images-cdn.ubuy.co.in/65253cf4badee471026e07c7-restored-apple-iphone-11-pro-64gb-space.jpg",

    basePrice: 42000,

    specs: {
      ram: ["4GB"],

      storage: ["64GB", "256GB", "512GB"],

      camera: "12MP Triple Camera",

      battery: "3046mAh",

      display: '5.8" Super Retina XDR',
    },
  },

  {
    id: "used-iphone-11",

    name: "iPhone 11",

    brand: "Apple",

    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-1.jpg",

    basePrice: 35000,

    specs: {
      ram: ["4GB"],

      storage: ["64GB", "128GB", "256GB"],

      camera: "12MP Dual Camera",

      battery: "3110mAh",

      display: '6.1" Liquid Retina HD',
    },
  },

  {
    id: "used-iphone-xs-max",

    name: "iPhone Xs Max",

    brand: "Apple",

    image: "https://i.gadgets360cdn.com/products/large/1536782676_635_iphone_xs_max.jpg?downsize=*:360",

    basePrice: 32000,

    specs: {
      ram: ["4GB"],

      storage: ["64GB", "256GB", "512GB"],

      camera: "12MP Dual Camera",

      battery: "3174mAh",

      display: '6.5" Super Retina HD',
    },
  },

  {
    id: "used-iphone-xs",

    name: "iPhone Xs",

    brand: "Apple",

    image:
      "https://buy.budli.in/cdn/shop/files/Untitled_design_1_78a74794-0bc2-4b30-bdfe-b77466782616.jpg?v=1718798149&width=1445",

    basePrice: 29000,

    specs: {
      ram: ["4GB"],

      storage: ["64GB", "256GB", "512GB"],

      camera: "12MP Dual Camera",

      battery: "2658mAh",

      display: '5.8" Super Retina HD',
    },
  },

  {
    id: "used-iphone-x",

    name: "iPhone X",

    brand: "Apple",

    image: "https://images-cdn.ubuy.co.in/65414af8fd4858736a695a7e-pre-owned-apple-iphone-x-256gb-factory.jpg",

    basePrice: 25000,

    specs: {
      ram: ["3GB"],

      storage: ["64GB", "256GB"],

      camera: "12MP Dual Camera",

      battery: "2716mAh",

      display: '5.8" Super Retina HD',
    },
  },

  {
    id: "used-iphone-8-plus",

    name: "iPhone 8 Plus",

    brand: "Apple",

    image: "https://www.neolight.in/wp-content/uploads/2022/02/8-plus-grey-.jpg ",

    basePrice: 20000,

    specs: {
      ram: ["3GB"],

      storage: ["64GB", "128GB", "256GB"],

      camera: "12MP Dual Camera",

      battery: "2691mAh",

      display: '5.5" Retina HD',
    },
  },

  {
    id: "used-iphone-8",

    name: "iPhone 8",

    brand: "Apple",

    image: "https://images-cdn.ubuy.co.in/679ef14fcca9072e4b08a399-pre-owned-apple-iphone-8-plus-64gb-gold.jpg",

    basePrice: 17000,

    specs: {
      ram: ["2GB"],

      storage: ["64GB", "128GB", "256GB"],

      camera: "12MP Single Camera",

      battery: "1821mAh",

      display: '4.7" Retina HD',
    },
  },

  {
    id: "used-iphone-7-plus",

    name: "iPhone 7 Plus",

    brand: "Apple",

    image: "https://fonezone.me/cdn/shop/files/IP7PR3.jpg?v=1725347618&width=500",

    basePrice: 15000,

    specs: {
      ram: ["3GB"],

      storage: ["32GB", "128GB", "256GB"],

      camera: "12MP Dual Camera",

      battery: "2900mAh",

      display: '5.5" Retina HD',
    },
  },

  {
    id: "used-iphone-7",

    name: "iPhone 7",

    brand: "Apple",

    image: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111943_iphone7-plus-rosegold.png",

    basePrice: 12000,

    specs: {
      ram: ["2GB"],

      storage: ["32GB", "128GB", "256GB"],

      camera: "12MP Single Camera",

      battery: "1960mAh",

      display: '4.7" Retina HD',
    },
  },

  {
    id: "used-iphone-6s-plus",

    name: "iPhone 6s Plus",

    brand: "Apple",

    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-6s-plus.jpg",

    basePrice: 9000,

    specs: {
      ram: ["2GB"],

      storage: ["16GB", "32GB", "64GB", "128GB"],

      camera: "12MP Single Camera",

      battery: "2750mAh",

      display: '5.5" Retina HD',
    },
  },

  {
    id: "used-iphone-6s",

    name: "iPhone 6s",

    brand: "Apple",

    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS_9gutTEZ5xi_BdkKGoPVmZv8K7qnMfZus9jeTADR_p6SO07aZ7zjlHtcJYrerqIvyZF6JE-aiJx240yNSxvQ8B5MiAC9BlAp8w8adJcNj_Qrhk8ssAvyNfYM",

    basePrice: 8000,

    specs: {
      ram: ["2GB"],

      storage: ["16GB", "32GB", "64GB", "128GB"],

      camera: "12MP Single Camera",

      battery: "1715mAh",

      display: '4.7" Retina HD',
    },
  },

  {
    id: "used-iphone-6-plus",

    name: "iPhone 6 Plus",

    brand: "Apple",

    image: "https://s3bg.cashify.in/gpro/uploads/2019/06/09115746/apple-iphone-6-front.jpg",

    basePrice: 7000,

    specs: {
      ram: ["1GB"],

      storage: ["16GB", "64GB", "128GB"],

      camera: "8MP Single Camera",

      battery: "2915mAh",

      display: '5.5" Retina HD',
    },
  },

  {
    id: "used-iphone-6",

    name: "iPhone 6",

    brand: "Apple",

    image: "https://s3bg.cashify.in/gpro/uploads/2019/06/09115746/apple-iphone-6-front.jpg",

    basePrice: 6000,

    specs: {
      ram: ["1GB"],

      storage: ["16GB", "64GB", "128GB"],

      camera: "8MP Single Camera",

      battery: "1810mAh",

      display: '4.7" Retina HD',
    },
  },

  // Samsung Galaxy S Series

  {
    id: "used-galaxy-s25-ultra",

    name: "Galaxy S25 Ultra",

    brand: "Samsung",

    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-ultra-sm-s938-1.jpg",

    basePrice: 80000,

    specs: {
      ram: ["12GB"],

      storage: ["256GB", "512GB", "1TB"],

      camera: "200MP Quad Camera",

      battery: "5000mAh",

      display: '6.9" Dynamic AMOLED 2X',
    },
  },

  {
    id: "used-galaxy-s25-edge",

    name: "Galaxy S25 Edge",

    brand: "Samsung",

    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-edge.jpg",

    basePrice: 63500,

    specs: {
      ram: ["12GB"],

      storage: ["256GB", "512GB"],

      camera: "200MP Dual Camera",

      battery: "3900mAh",

      display: '6.7" Dynamic AMOLED 2X',
    },
  },

  {
    id: "used-galaxy-s25-plus",

    name: "Galaxy S25+",

    brand: "Samsung",

    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-plus-sm-s936-1.jpg",

    basePrice: 60000,

    specs: {
      ram: ["12GB"],

      storage: ["256GB", "512GB"],

      camera: "50MP Triple Camera",

      battery: "4900mAh",

      display: '6.7" Dynamic AMOLED 2X',
    },
  },

  {
    id: "used-galaxy-s25",

    name: "Galaxy S25",

    brand: "Samsung",

    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-sm-s931-1.jpg",

    basePrice: 46000,

    specs: {
      ram: ["12GB"],

      storage: ["256GB", "512GB"],

      camera: "50MP Triple Camera",

      battery: "4000mAh",

      display: '6.2" Dynamic AMOLED 2X',
    },
  },

  {
    id: "used-galaxy-s24-ultra",

    name: "Galaxy S24 Ultra",

    brand: "Samsung",

    image: "https://images-eu.ssl-images-amazon.com/images/I/717Q2swzhBL._AC_UL210_SR210,210_.jpg",

    basePrice: 82000,

    specs: {
      ram: ["12GB", "16GB"],

      storage: ["256GB", "512GB", "1TB"],

      camera: "200MP Quad Camera",

      battery: "5000mAh",

      display: '6.8" Dynamic AMOLED 2X',
    },
  },

  {
    id: "used-galaxy-s24-plus",

    name: "Galaxy S24+",

    brand: "Samsung",

    image: "https://m.media-amazon.com/images/I/61+g6KrDXdL._UF1000,1000_QL80_.jpg",

    basePrice: 65000,

    specs: {
      ram: ["12GB"],

      storage: ["256GB", "512GB"],

      camera: "50MP Triple Camera",

      battery: "4900mAh",

      display: '6.7" Dynamic AMOLED 2X',
    },
  },

  {
    id: "used-galaxy-s24",

    name: "Galaxy S24",

    brand: "Samsung",

    image: "https://m.media-amazon.com/images/I/61+g6KrDXdL._UF1000,1000_QL80_.jpg",

    basePrice: 55000,

    specs: {
      ram: ["8GB"],

      storage: ["128GB", "256GB"],

      camera: "50MP Triple Camera",

      battery: "4000mAh",

      display: '6.2" Dynamic AMOLED 2X',
    },
  },

  {
    id: "used-galaxy-s23-ultra",

    name: "Galaxy S23 Ultra",

    brand: "Samsung",

    image: "https://m.media-amazon.com/images/I/71goZuIha-L._UF1000,1000_QL80_.jpg",

    basePrice: 72000,

    specs: {
      ram: ["8GB", "12GB"],

      storage: ["256GB", "512GB", "1TB"],

      camera: "200MP Quad Camera",

      battery: "5000mAh",

      display: '6.8" Dynamic AMOLED 2X',
    },
  },

  {
    id: "used-galaxy-s23-plus",

    name: "Galaxy S23+",

    brand: "Samsung",

    image: "https://m.media-amazon.com/images/I/61-E0V81kBL._UF894,1000_QL80_.jpg",

    basePrice: 65000,

    specs: {
      ram: ["8GB"],

      storage: ["256GB", "512GB"],

      camera: "50MP Triple Camera",

      battery: "4700mAh",

      display: '6.6" Dynamic AMOLED 2X',
    },
  },

  {
    id: "used-galaxy-s23",

    name: "Galaxy S23",

    brand: "Samsung",

    image:
      "https://rukminim2.flixcart.com/image/704/844/xif0q/mobile/y/8/i/-original-imah4zp7fgtezhsz.jpeg?q=90&crop=false",

    basePrice: 58000,

    specs: {
      ram: ["8GB"],

      storage: ["128GB", "256GB"],

      camera: "50MP Triple Camera",

      battery: "3900mAh",

      display: '6.1" Dynamic AMOLED 2X',
    },
  },

  {
    id: "used-galaxy-s22-ultra",

    name: "Galaxy S22 Ultra",

    brand: "Samsung",

    image: "https://m.media-amazon.com/images/I/810b1GFtl9L.jpg",

    basePrice: 58000,

    specs: {
      ram: ["8GB", "12GB"],

      storage: ["128GB", "256GB", "512GB", "1TB"],

      camera: "108MP Quad Camera",

      battery: "5000mAh",

      display: '6.8" Dynamic AMOLED 2X',
    },
  },

  // Google Pixel

  {
    id: "used-galaxy-s22",

    name: "Galaxy S22",

    brand: "Samsung",

    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s22-5g-1.jpg",

    basePrice: 23700,

    specs: {
      ram: ["8GB"],

      storage: ["128GB", "256GB"],

      camera: "50MP Triple Camera",

      battery: "3700mAh",

      display: '6.1" Dynamic AMOLED 2X',
    },
  },

  {
    id: "used-pixel-10-pro-xl",

    name: "Pixel 10 Pro XL",

    brand: "Google",

    image: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-10-pro-xl-.jpg",

    basePrice: 72000,

    specs: {
      ram: ["16GB"],

      storage: ["256GB"],

      camera: "50MP Triple Camera",

      battery: "5200mAh",

      display: '6.8" Super Actua LTPO OLED',
    },
  },

  {
    id: "used-pixel-10-pro",

    name: "Pixel 10 Pro",

    brand: "Google",

    image: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-10-pro-.jpg",

    basePrice: 66000,

    specs: {
      ram: ["16GB"],

      storage: ["256GB"],

      camera: "50MP Triple Camera",

      battery: "4870mAh",

      display: '6.3" Super Actua LTPO OLED',
    },
  },

  {
    id: "used-pixel-10",

    name: "Pixel 10",

    brand: "Google",

    image: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-10-.jpg",

    basePrice: 47100,

    specs: {
      ram: ["12GB"],

      storage: ["256GB"],

      camera: "48MP Triple Camera",

      battery: "4970mAh",

      display: '6.3" Actua OLED',
    },
  },

  {
    id: "used-pixel-10a",

    name: "Pixel 10a",

    brand: "Google",

    image: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-10a-1.jpg",

    basePrice: 34000,

    specs: {
      ram: ["8GB"],

      storage: ["256GB"],

      camera: "48MP Dual Camera",

      battery: "5100mAh",

      display: '6.3" pOLED',
    },
  },

  {
    id: "used-pixel-9-pro",

    name: "Pixel 9 Pro",

    brand: "Google",

    image: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9-pro-.jpg",

    basePrice: 68000,

    specs: {
      ram: ["16GB"],

      storage: ["128GB", "256GB", "512GB"],

      camera: "50MP Triple Camera",

      battery: "4700mAh",

      display: '6.3" LTPO OLED',
    },
  },

  {
    id: "used-pixel-9",

    name: "Pixel 9 ",

    brand: "Google",

    image: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9-.jpg",

    basePrice: 58000,

    specs: {
      ram: ["12GB"],

      storage: ["128GB", "256GB", "512GB"],

      camera: "50MP Triple Camera",

      battery: "5050mAh",

      display: '6.7" LTPO OLED',
    },
  },

  {
    id: "used-pixel-9a",

    name: "Pixel 9a",

    brand: "Google",

    image: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9a.jpg",

    basePrice: 35000,

    specs: {
      ram: ["8GB"],

      storage: ["128GB"],

      camera: "64MP Dual Camera",

      battery: "4385mAh",

      display: '6.1" OLED',
    },
  },

  {
    id: "used-pixel-9-pro-xl",

    name: "Pixel 9 Pro XL",

    brand: "Google",

    image: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9-pro-xl-.jpg",

    basePrice: 45000,

    specs: {
      ram: ["12GB"],

      storage: ["128GB", "256GB", "512GB"],

      camera: "50MP Triple Camera",

      battery: "5003mAh",

      display: '6.7" LTPO OLED',
    },
  },
  {
    id: "used-pixel-8-pro",

    name: "Pixel 8 Pro",

    brand: "Google",

    image: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-8-pro-1.jpg",

    basePrice: 37900,

    specs: {
      ram: ["12GB"],

      storage: ["128GB", "256GB", "512GB"],

      camera: "50MP Triple Camera",

      battery: "5050mAh",

      display: '6.7" Super Actua LTPO OLED',
    },
  },

  {
    id: "used-pixel-8",

    name: "Pixel 8",

    brand: "Google",

    image: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-8-1.jpg",

    basePrice: 25500,

    specs: {
      ram: ["8GB"],

      storage: ["128GB", "256GB"],

      camera: "50MP Dual Camera",

      battery: "4575mAh",

      display: '6.2" Actua OLED',
    },
  },

  {
    id: "used-pixel-8a",

    name: "Pixel 8a",

    brand: "Google",

    image: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-8a-1.jpg",

    basePrice: 24800,

    specs: {
      ram: ["8GB"],

      storage: ["128GB", "256GB"],

      camera: "64MP Dual Camera",

      battery: "4492mAh",

      display: '6.1" Actua OLED',
    },
  },

  {
    id: "used-pixel-7-pro",

    name: "Pixel 7 Pro",

    brand: "Google",

    image: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel7-pro-new.jpg",

    basePrice: 26500,

    specs: {
      ram: ["12GB"],

      storage: ["256GB"],

      camera: "50MP Triple Camera",

      battery: "5000mAh",

      display: '6.7" LTPO AMOLED',
    },
  },

  {
    id: "used-pixel-7",

    name: "Pixel 7",

    brand: "Google",

    image: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel7-new.jpg",

    basePrice: 20500,

    specs: {
      ram: ["8GB"],

      storage: ["128GB"],

      camera: "50MP Dual Camera",

      battery: "4355mAh",

      display: '6.3" AMOLED',
    },
  },
]

export const getBrandPhones = (brand: "Apple" | "Samsung" | "Google") => {
  return phoneData.filter((phone) => phone.brand === brand)
}

export const getPhoneById = (id: string) => {
  return phoneData.find((phone) => phone.id === id)
}
