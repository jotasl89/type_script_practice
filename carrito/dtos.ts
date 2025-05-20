export interface Product {
    id: number;
    name: string;
    price: number;
    stock?: number;
}

export interface Item extends Product {
    qty: number
}

export interface ShoppingCart {
    items?: Item[];
    totalAmount?: number;
    totalItems?: number;
}

