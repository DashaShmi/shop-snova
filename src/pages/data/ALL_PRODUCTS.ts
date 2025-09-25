import type { Category } from "./ALL_CATEGORIES";

import bifoldWallet from '../../img/bifold-wallet.jpg';
import docholder from '../../img/docholder.jpg';
import silverBag from '../../img/silver-bag.jpg';
import carabiner from '../../img/carabiner.jpg';
import slimCosmeticBag from '../../img/slim-cosmetic-bag.jpg';
import bigCosmeticBag from '../../img/big-cosmetic-bag.jpg';
import passportCover from '../../img/passport-cover.jpg';
import zipperedWallet from '../../img/zippered-wallet.jpg';
import cardholder from '../../img/cardholder.jpg';


interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  fullDescripton: string;
  img: string;
  category: Category;
  dimensions?: { h: number, w: number, d?: number }
}

export const ALL_PRODUCTS: IProduct[] = [
  {
    name: "Bifold Wallet",
    price: 140,
    description: 'Bifold wallet from plastic bags',
    fullDescripton: `
    <ol>
      <li>Upcycled out of 3-6 plastic bags</li>
      <li>Sustainable</li>
      <li>Waterproof and durable</li>
      <li>4 card pockets</li>
      <li>1 bill pocket</li>
    </ol>`,
    img: bifoldWallet,
    category: "wallets",
    id: "bifold-wallet",
    dimensions: { h: 9, w: 11 }
  },
  {
    name: "Zippered wallet",
    price: 100,
    description: 'For cards, coins and bills',
    fullDescripton: `
    <ol>
      <li>Upcycled out of 3-5 plastic bags</li>
      <li>Sustainable</li>
      <li>Waterproof and durable</li>
      <li>Handcrafted</li>
    </ol>`,
    img: zipperedWallet,
    category: "wallets",
    id: "zippered-wallet",
    dimensions: { h: 16, w: 12 }
  },
  {
    name: "Cardholder",
    price: 80,
    description: 'Cardholder from plastic bags',
    fullDescripton: `
    <ol>
      <li>Upcycled out of 2-4 plastic bags</li>
      <li>3 card pockets</li>
      <li>1 bill pocket</li>
      <li>Sustainable</li>
      <li>Waterproof and durable</li>
    </ol>`,
    img: cardholder,
    category: "wallets",
    id: "cardholder",
    dimensions: { h: 8, w: 10 }
  },

  {
    name: "Docholder",
    price: 140,
    description: 'for 2 passports and cards',
    fullDescripton: `
    <ol>
      <li>Upcycled out of 2-4 plastic bags</li>
      <li>2 card pockets</li>
      <li>2 passports</li>
      <li>Sustainable</li>
      <li>Waterproof and durable</li>
    </ol>`,
    img: docholder,
    category: "passport-covers",
    id: "docholder",
    dimensions: { h: 15, w: 11 }
  },

  {
    name: "Passport cover",
    price: 100,
    description: 'for 1 passport',
    fullDescripton: `
    <ol>
      <li>Upcycled out of 3-5 plastic bags</li>
      <li>1 passport</li>
      <li>Sustainable</li>
      <li>Waterproof and durable</li>
    </ol>`,
    img: passportCover,
    category: "passport-covers",
    id: "passport-cover",
    dimensions: { h: 14, w: 10 }
  },
  {
    name: "Big cosmetic bag",
    price: 120,
    description: 'Cosmetic bag of melted bags and packing pets feed.',
    fullDescripton: `
    <ol>
      <li>Upcycled out of 3-6 plastic bags</li>
      <li>Sustainable</li>
      <li>Waterproof and durable</li>
      <li>Pleasure of your contribution to waste reduction</li>
    </ol>`,
    img: bigCosmeticBag,
    category: "makeup-bags",
    id: "big-cosmetic-bag",
    dimensions: { h: 22, w: 28, d: 6 }
  },

  {
    name: "Slim cosmetic bag",
    price: 100,
    description: 'Cosmetic bag of melted bags and packing pets feed.',
    fullDescripton: `
    <ol>
      <li>Upcycled out of 2-4 plastic bags</li>
      <li>Sustainable</li>
      <li>Waterproof and durable</li>
      <li>Handcrafted</li>
    </ol>`,
    img: slimCosmeticBag,
    category: "makeup-bags",
    id: "slim-cosmetic-bag",
    dimensions: { h: 17, w: 23 }

  },

  {
    name: "Сarbine bag",
    price: 120,
    description: 'made of recycled packing pets feed or coffee beans',
    fullDescripton: `
    <ol>
      <li>Upcycled materials</li>
      <li>Sustainable</li>
      <li>Waterproof and durable</li>
      <li>Handcrafted</li>
    </ol>`,
    img: carabiner,
    category: "bags",
    id: "carbine-bag",
    dimensions: { h: 12, w: 15, d: 3 },
  },

  {
    name: "Bag",
    price: 280,
    description: 'Bag of animal feed package and old jeans',
    fullDescripton: `
    <ol>
      <li>Upcycled materials</li>
      <li>Sustainable</li>
      <li>Waterproof and durable</li>
      <li>Handcrafted</li>
    </ol>`,
    img: silverBag,
    category: "bags",
    id: "silver-bag",
    dimensions: { h: 30, w: 40, d: 10 },
  },
];
