export interface Product {
    id: number;
    name: string;
    price: number;
    stock?: number;
}

export interface Item {
    qty: number;
    product: Product;
}

export interface ShoppingCart {
    items?: Item[];
    totalAmount?: number;
    totalItems?: number;
}

