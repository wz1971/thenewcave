const products = [
  {
    stock: 10,
    category: "whisky",
    description: "Speyside Single Malt Whiskey with 12 years of aging in ancient wooden casks.",
    id: 101,
    image: "/images/whisky1.png",
    title: "Single Malt 12 yr",
    origin: "Scotland",
    price: 8499,
    provider: "541",
  },
  {
    stock: 12,
    category: "whisky",
    description: "Islay Single Malt Whiskey, aged for 14 years by our well known distilleries ",
    id: 102,
    image: "/images/whisky2.png",
    title: "Single Malt 14 yr",
    origin: "Scotland",
    price: 10899,
    providerId: "317",
  },
  {
    stock: 5,
    category: "whisky",
    description: "Highland Single Malt Whiskey crafted with the tradition of our master distillers, aged for 18 years.",
    id: 103,
    image: "/images/whisky3.png",
    title: "Single Malt 18 yr",
    origin: "Scotland",
    price: 24999,
    providerId: "223",
  },
  {
    stock: 20,
    category: "pipes",
    description: "Real briar smoking pipe, elegant shape and beautiful texture",
    id: 201,
    image: "/images/pipe1.png",
    title: "Irish Smoking Pipe",
    origin: "Ireland",
    price: 7299,
    providerId: "541",
  },
  {
    stock: 15,
    category: "pipes",
    description: "Quality briar smoking pipe, can be used with filter, Italian style and tradition.",
    id: 202,
    image: "/images/pipe2.png",
    title: "Italian Smoking Pipe",
    origin: "Italy",
    price: 8399,
    providerId: "317",
  },
  {
    stock: 10,
    category: "pipes",
    description: "Premium quality briar pipe, unfiltered, with an amazing finish",
    id: 203,
    image: "/images/pipe3.png",
    title: "English Smoking Pipe",
    origin: "England",
    price: 10399,
    providerId: "156",
  },
  {
    stock: 30,
    category: "tobacco",
    description: "5 year aged virginia tobacco, creamy smoke and pleasant room note.",
    id: 301,
    image: "/images/tobacco1.png",
    title: "Virginia Tobacco",
    origin: "USA",
    price: 15099,
    providerId: "223",
  },
  {
    stock: 20,
    category: "tobacco",
    description: "Strong burley tobacco with chocolate hints and generous smoke. The room note is of strong character.",
    id: 302,
    image: "/images/tobacco2.png",
    title: "Burley Tobacco",
    origin: "Belgium",
    price: 5299,
    providerId: "541",
  },
  {
    stock: 15,
    category: "tobacco",
    description: "Traditional cavendish tobacco with fruity notes and thick smoke. Nice and warm room note.",
    id: 303,
    image: "/images/tobacco3.png",
    title: "Cavendish Tobacco",
    origin: "Holland",
    price: 16199,
    providerId: "541",
  },
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 100)
  })
}

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId))
    }, 100)
  })
}
