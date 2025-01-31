import { MapPin, ShoppingCart } from "phosphor-react";
import coffee from "../../asset/coffee.svg";
import { CartContainer } from "./stylesHeader";

export function Header() {
  return (
    <div>
      <CartContainer>
          <img src={coffee} alt="Copo de café" />
        <div>
          <MapPin size={32} weight="fill" />
          <span>Osasco,SP</span>
          <ShoppingCart size={32} weight="fill" />
        </div>
      </CartContainer>
    </div>
  );
}
