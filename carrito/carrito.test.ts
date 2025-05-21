import { ShoppingCartService } from "./carrito";
import { Item, Product } from "./dtos";


describe('Carrito', () => {

    // it('should have a ShoppingCart instance', () => {
    //     // servicio: ShoppingCartService;
    //     let resposnse = ShoppingCartService;
    // });

    it('should increase the totals & items when add function is called', () => {
        // Arrange
        ShoppingCartService.Clean();
        const product: Product = {
            id: 1,
            name: "lapiz",
            price: 2,
            stock: 100,
        }
        const item: Item = {
            qty: 1,
            product: product,
        };

        //Act
        ShoppingCartService.AddItem(item);
        const result = ShoppingCartService.basket;

        //Assert
        expect(result?.totalAmount).toBe(2);
        expect(result?.totalItems).toBe(1);
        expect(result?.items?.length).toBe(1);
    });


    it('should calculate properly if qty is grather than 1', () => {
        // Arrange
        ShoppingCartService.Clean();
        const product: Product = {
            id: 1,
            name: "lapiz",
            price: 2,
            stock: 100,
        }
        const item1: Item = {
            qty: 2,
            product: product,
        };

        //Act
        ShoppingCartService.AddItem(item1);
        const result = ShoppingCartService.basket;

        //Assert
        expect(result?.totalAmount).toBe(4);
        expect(result?.totalItems).toBe(2);
        expect(result?.items?.length).toBe(1);
    });

    it('should increase the same record if the product already exits', () => {
         // Arrange
         ShoppingCartService.Clean();
         const product: Product = {
            id: 1,
            name: "lapiz",
            price: 2,
            stock: 100,
        }
        const item1: Item = {
            qty: 1,
            product: product,
        };

        const item2: Item = {
            qty: 1,
            product: product,
        };

         //Act
         ShoppingCartService.AddItem(item1);
         ShoppingCartService.AddItem(item2);
         const result = ShoppingCartService.basket;

         //Assert
         expect(result?.totalAmount).toBe(4);
         expect(result?.totalItems).toBe(1);
         expect(result?.items?.length).toBe(1);
         expect(result?.items?.[0].qty).toBe(2);
     });

})