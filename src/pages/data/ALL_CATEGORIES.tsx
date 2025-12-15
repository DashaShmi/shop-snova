import carabiner5 from '../../img/carabiner_5.jpg';
import silverBag from '../../img/silver-bag.jpg';
import passportCover from '../../img/passport-cover.jpg';
import banerWallet from '../../img/banerWallet.jpg';


export type Category = "laptop-case" | "makeup-bags" | "passport-covers" | "wallets" | "bags";

interface ICategories {
  id: Category;
  name: string;
  description: string;
  img: string;
}

export const ALL_CATEGORIES: ICategories[] = [
  {
    name: "Wallets",
    id: "wallets",
    description: 'Wallets from plastic bags',
    img: banerWallet
  },
  {
    name: "Bags",
    id: "bags",
    description: 'Bags from plastic bags',
    img: silverBag
  },
  {
    name: "Passport covers",
    id: "passport-covers",
    description: 'Passport covers from plastic bags',
    img: passportCover
  },

  {
    name: "Makeup bags",
    id: "makeup-bags",
    description: 'Passport covers from plastic bags',
    img: carabiner5
  },
];