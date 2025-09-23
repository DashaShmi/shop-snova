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
  name: string;
  price: number;
  description: string;
  img: string;
  category: Category;
  id: string;
}

export const ALL_PRODUCTS: IProduct[] = [
  {
    name: "Bifold Wallet",
    price: 140,
    description: 'Bifold wallet from plastic bags',
    img: bifoldWallet,
    category: "wallets",
    id: "bifold-wallet"
  },
  {
    name: "Zippered wallet",
    price: 100,
    description: 'For cards, coins and bills',
    img: zipperedWallet,
    category: "wallets",
    id: "zippered-wallet"
  },
  {
    name: "Cardholder",
    price: 80,
    description: 'Cardholder from plastic bags',
    img: cardholder,
    category: "wallets",
    id: "cardholder"
  },

  {
    name: "Docholder",
    price: 140,
    description: 'for 2 passports and cards',
    img: docholder,
    category: "passport-covers",
    id: "docholder"
  },

  {
    name: "Passport cover",
    price: 100,
    description: 'for 1 passport',
    img: passportCover,
    category: "passport-covers",
    id: "passport-cover"
  },
  {
    name: "Big cosmetic bag",
    price: 120,
    description: 'made of recycled plastic bags',
    img: bigCosmeticBag,
    category: "makeup-bags",
    id: "big-cosmetic-bag"
  },

  {
    name: "Slim cosmetic bag",
    price: 100,
    description: 'made of recycled plastic bags',
    img: slimCosmeticBag,
    category: "makeup-bags",
    id: "slim-cosmetic-bag"
  },

  {
    name: "Сarbine bag",
    price: 120,
    description: 'made of recycled plastic bags',
    img: carabiner,
    category: "bags",
    id: "carbine-bag"
  },

  {
    name: "Bag",
    price: 120,
    description: 'Bag of animal feed package and old jeans',
    img: silverBag,
    category: "bags",
    id: "silver-bag"
  },


];
