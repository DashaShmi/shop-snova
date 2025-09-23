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
    img: 'https://optim.tildacdn.pub/tild3333-3035-4331-b638-323663313935/-/format/webp/MIT04573.jpg.webp'
  },
  {
    name: "Bags",
    id: "bags",
    description: 'Bags from plastic bags',
    img: 'https://optim.tildacdn.pub/tild3166-6466-4433-b836-663566613866/-/format/webp/MIT05333.JPG.webp'
  },
  {
    name: "Passport covers",
    id: "passport-covers",
    description: 'Passport covers from plastic bags',
    img: 'https://optim.tildacdn.pub/tild3465-6332-4535-a363-623762303938/-/format/webp/MIT04981.JPG.webp'
  },

  {
    name: "Makeup bags",
    id: "makeup-bags",
    description: 'Passport covers from plastic bags',
    img: 'https://optim.tildacdn.pub/tild6636-3439-4665-a461-336461636361/-/format/webp/MIT05132.JPG.webp'
  },
];