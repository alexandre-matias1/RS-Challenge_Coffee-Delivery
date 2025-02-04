import { BackgroundEffect, FourItensContainer } from "./stylesHome";
import { ShoppingCart, Coffee, Clock, Package } from "phosphor-react";
export function Home() {
  return (
    <BackgroundEffect>
      <h1>Encontre o café perfeito para qualquer hora do dia</h1>
      <p>
        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
      </p>
      <FourItensContainer>
        <span>
            <div><ShoppingCart/></div>
            <p>Compra simples e segura</p>
        </span>
        <span>
            <div><Package/></div>
            <p>Compra simples e segura</p>
        </span>
        <span>
            <div><Clock/></div>
            <p>Compra simples e segura</p>
        </span>
        <span>
            <div><Coffee/></div>
            <p>Compra simples e segura</p>
        </span>
      </FourItensContainer>
    </BackgroundEffect>
  );
}
