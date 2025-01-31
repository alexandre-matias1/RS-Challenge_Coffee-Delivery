import { CartButtonContainer } from "./stylesCartButton";
import { ShoppingCart } from 'phosphor-react'
export function CartButton(){
    return(
        <CartButtonContainer><ShoppingCart color="#fff" weight="fill" size={22}/></CartButtonContainer>
    )
}