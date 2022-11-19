import tech from '../../assets/images/tech.jpg';
import clothes from '../../assets/images/clothing.jpg';
import food from '../../assets/images/food.jpg';

export let data = [
    {
      id: 0,
      name: "Gaming Monitor",
      description: "UHD",
      category: "electronics",
      price: 600,
      inventory: 100,
      image: tech,
    },
    {
      id: 1,
      name: "T-shirt",
      description: "XL",
      category: "clothing",
      price: 10,
      inventory: 1000,
      image: clothes,
    },
    {
      id: 2,
      name: "El Camion",
      description: "The best food truck in Seattle",
      category: "food",
      price: 20,
      inventory: 1,
      image: food,
    },
];

export const categoryTabs = [
  {
      id: 0,
      title: 'All',
      value: 'all',        
  },
  {
      id: 1,
      title: 'Electronics',
      value: 'electronics',        
  },
  {
      id: 2,
      title: 'Apperal',
      value: 'apperal',        
  },
  {
      id: 3,
      title: 'Games',
      value: 'games',        
  },
  {
      id: 4,
      title: 'Weapons',
      value: 'weapons',        
  },
]

module.export = {
  data,
  categoryTabs,
}