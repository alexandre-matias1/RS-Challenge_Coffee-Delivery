import { MapPin, ShoppingCart } from "phosphor-react";
import coffee from "../../asset/coffee.svg";
import {
  CartContainer,
  RightContainer,
  LocaleContainer,
  CartCounterContainer,
} from "./stylesHeader";

import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div>
      <CartContainer>
        <NavLink to="/" title="Home">
          <img src={coffee} alt="Copo de café" />
        </NavLink>
        <RightContainer>
          <LocaleContainer>
            <MapPin size={32} weight="fill" color="#8047F8" />
            <span>Osasco,SP</span>
          </LocaleContainer>
          <NavLink to="/cart">
            <CartCounterContainer>
              <ShoppingCart size={32} weight="fill" />
              <a href="/cart">3</a>
            </CartCounterContainer>
          </NavLink>
        </RightContainer>
      </CartContainer>
    </div>
  );
}
