import { clear } from './../node_modules/sisteransi/src/sisteransi.d';
import { Item, Product, ShoppingCart } from "./dtos";

export class ShoppingCartService {
    static basket: ShoppingCart = { items: [] };
    public shoppingCart() {
    }

    static AddItem(item: Item) {
        const currentTotalAmount = this.basket.totalAmount ?? 0;
        const currentTotalItems = this.basket.totalItems ?? 0;

        this.basket.totalAmount = currentTotalAmount + item.price * item.qty;
        this.basket.totalItems = currentTotalItems + item.qty;
        this.basket.items?.push(item);
    }

    static Clean() {
        this.basket = { items: [] };
    }

    // static GetBasket(): ShoppingCart {
    //     return this.basket;
    // }
}
