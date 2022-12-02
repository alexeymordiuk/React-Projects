export type CartProps = {
    add: boolean;
    setAdd: (active: boolean) => void;
    price: number;
    name: string;
    types: number[];
    sizes: number[];
    id: string;
    count: number;
    imageUrl: string;
    about: string;
  };

  export type CartPropsCosructor = {
    price: number;
    name: string;
    types: number[];
    sizes: number[];
    id: string;
    count: number;
    imageUrl: string;
    text: string;
    pizzaPrice: number;
  };