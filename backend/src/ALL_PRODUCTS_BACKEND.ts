
export interface IBackendProduct {
  id: string;
  name: string;
  price: number;
  fulllName: string;
  category: string;
  dimensions?: { h: number, w: number, d?: number }
}

export const ALL_PRODUCTS_BACKEND: IBackendProduct[] = [
  {
    name: "Bifold wallet",
    price: 140,
    fulllName: 'Bifold wallet from plastic bags',
    category: "wallets",
    id: "bifold-wallet",
    dimensions: { h: 9, w: 11 }
  },
  {
    name: "Zippered wallet",
    price: 100,
    fulllName: 'For cards, coins and bills',
    category: "wallets",
    id: "zippered-wallet",
    dimensions: { h: 16, w: 12 }
  },
  {
    name: "Cardholder",
    price: 80,
    fulllName: 'Cardholder from plastic bags',
    category: "wallets",
    id: "cardholder",
    dimensions: { h: 8, w: 10 }
  },

  {
    name: "Docholder",
    price: 140,
    fulllName: 'for 2 passports and cards',
    category: "passport-covers",
    id: "docholder",
    dimensions: { h: 15, w: 11 }
  },

  {
    name: "Passport cover",
    price: 100,
    fulllName: 'for 1 passport',
    category: "passport-covers",
    id: "passport-cover",
    dimensions: { h: 14, w: 10 }
  },

  {
    name: "🔥Сrazy cover - surprise🔥",
    price: 60,
    fulllName: 'for 1 passport',
    category: "passport-covers",
    id: "passport-cover-surprise",
    dimensions: { h: 14, w: 10 }
  },
  {
    name: "Big cosmetic bag",
    price: 120,
    fulllName: 'Cosmetic bag of melted bags and packing pets feed.',
    category: "makeup-bags",
    id: "big-cosmetic-bag",
    dimensions: { h: 22, w: 28, d: 6 }
  },

  {
    name: "Slim cosmetic bag",
    price: 100,
    fulllName: 'With silver.',
    category: "makeup-bags",
    id: "slim-cosmetic-bag",
    dimensions: { h: 17, w: 23 }

  },

  {
    name: "Сarbine bag",
    price: 120,
    fulllName: 'Made of recycled packing pets feed or coffee beans',
    category: "bags",
    id: "carbine-bag",
    dimensions: { h: 12, w: 15, d: 3 },
  },

  {
    name: "Bag",
    price: 280,
    fulllName: 'Bag of animal feed package and old jeans',
    category: "bags",
    id: "silver-bag",
    dimensions: { h: 30, w: 40, d: 10 },
  },

  {
    name: "Rope bag",
    price: 280,
    fulllName: 'With silver',
    category: "bags",
    id: "rope-bag",
    dimensions: { h: 24, w: 27, d: 6 },
  },
];
