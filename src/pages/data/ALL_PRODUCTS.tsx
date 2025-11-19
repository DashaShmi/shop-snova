import type { Category } from "./ALL_CATEGORIES";

import bifoldWallet from '../../img/bifold-wallet.jpg';
import docholder from '../../img/docholder.jpg';
import silverBag from '../../img/silver-bag.jpg';
import carabiner from '../../img/carabiner.jpg';
import slimCosmeticBag from '../../img/slim-cosmetic-bag.jpg';
import bigCosmeticBag from '../../img/big-cosmetic-bag.jpg';
import passportCover from '../../img/passport-cover.jpg';
import passportCover2 from '../../img/passport-cover_2.jpg';
import passportCover3 from '../../img/passport-cover_3.jpg';
import passportCover4 from '../../img/passport-cover_4.jpg';
import zipperedWallet from '../../img/zippered-wallet.jpg';
import cardholder from '../../img/cardholder.jpg';


export interface IProduct {
  id: string;
  name: string;
  price: number;
  fulllName: string;
  description: React.ReactNode;
  images: string[];
  category: Category;
  dimensions?: { h: number, w: number, d?: number }
}

export const ALL_PRODUCTS: IProduct[] = [
  {
    name: "Bifold Wallet",
    price: 140,
    fulllName: 'Bifold wallet from plastic bags',
    description:
      <ul>
        <li>Upcycled out of 3-6 plastic bags</li>
        <li>Sustainable</li>
        <li>Waterproof and durable</li>
        <li>4 card pockets</li>
        <li>1 bill pocket</li>
      </ul>,
    images: [bifoldWallet],
    category: "wallets",
    id: "bifold-wallet",
    dimensions: { h: 9, w: 11 }
  },
  {
    name: "Zippered wallet",
    price: 100,
    fulllName: 'For cards, coins and bills',
    description:
      <ul>
        <li>Upcycled out of 3-5 plastic bags</li>
        <li>Sustainable</li>
        <li>Waterproof and durable</li>
        <li>Handcrafted</li>
      </ul>,
    images: [zipperedWallet],
    category: "wallets",
    id: "zippered-wallet",
    dimensions: { h: 16, w: 12 }
  },
  {
    name: "Cardholder",
    price: 80,
    fulllName: 'Cardholder from plastic bags',
    description:
      <ul>
        <li>Upcycled out of 2-4 plastic bags</li>
        <li>3 card pockets</li>
        <li>1 bill pocket</li>
        <li>Sustainable</li>
        <li>Waterproof and durable</li>
      </ul>,
    images: [cardholder],
    category: "wallets",
    id: "cardholder",
    dimensions: { h: 8, w: 10 }
  },

  {
    name: "Docholder",
    price: 140,
    fulllName: 'for 2 passports and cards',
    description:
      <ul>
        <li>Upcycled out of 2-4 plastic bags</li>
        <li>2 card pockets</li>
        <li>2 passports</li>
        <li>Sustainable</li>
        <li>Waterproof and durable</li>
      </ul>,
    images: [docholder],
    category: "passport-covers",
    id: "docholder",
    dimensions: { h: 15, w: 11 }
  },

  {
    name: "Passport cover",
    price: 100,
    fulllName: 'for 1 passport',
    description:
      <ul>
        <li>Upcycled out of 3-5 plastic bags</li>
        <li>1 passport</li>
        <li>Sustainable</li>
        <li>Waterproof and durable</li>
      </ul>,
    images: [passportCover, passportCover2, passportCover3, passportCover4],
    category: "passport-covers",
    id: "passport-cover",
    dimensions: { h: 14, w: 10 }
  },
  {
    name: "Big cosmetic bag",
    price: 120,
    fulllName: 'Cosmetic bag of melted bags and packing pets feed.',
    description:
      <ul>
        <li>Upcycled out of 3-6 plastic bags</li>
        <li>Sustainable</li>
        <li>Waterproof and durable</li>
        <li>Pleasure of your contribution to waste reduction</li>
      </ul>,
    images: [bigCosmeticBag],
    category: "makeup-bags",
    id: "big-cosmetic-bag",
    dimensions: { h: 22, w: 28, d: 6 }
  },

  {
    name: "Slim cosmetic bag",
    price: 100,
    fulllName: 'Cosmetic bag of melted bags and packing pets feed.',
    description:
      <ul>
        <li>Upcycled out of 2-4 plastic bags</li>
        <li>Sustainable</li>
        <li>Waterproof and durable</li>
        <li>Handcrafted</li>
      </ul>,
    images: [slimCosmeticBag],
    category: "makeup-bags",
    id: "slim-cosmetic-bag",
    dimensions: { h: 17, w: 23 }

  },

  {
    name: "Сarbine bag",
    price: 120,
    fulllName: 'Made of recycled packing pets feed or coffee beans',
    description:
      <ul>
        <li>Upcycled materials</li>
        <li>Sustainable</li>
        <li>Waterproof and durable</li>
        <li>Handcrafted</li>
      </ul>,
    images: [carabiner],
    category: "bags",
    id: "carbine-bag",
    dimensions: { h: 12, w: 15, d: 3 },
  },

  {
    name: "Bag",
    price: 280,
    fulllName: 'Bag of animal feed package and old jeans',
    description:
      <ul>
        <li>Upcycled materials</li>
        <li>Sustainable</li>
        <li>Waterproof and durable</li>
        <li>Handcrafted</li>
      </ul>,
    images: [silverBag],
    category: "bags",
    id: "silver-bag",
    dimensions: { h: 30, w: 40, d: 10 },
  },
];
