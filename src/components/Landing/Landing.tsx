import { Clock, Coffee, Package, ShoppingCart } from "phosphor-react";
import { FourItensContainer, LeftContainer, RightContainer } from "./stylesLanding";
import cup from '../../asset/cup.png'

export function Landing() {
  return (
    <>
      <div className="full-container">
        <LeftContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>

          <p className="subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <FourItensContainer>
            <span>
              <div className="box-1">
                <ShoppingCart color="#fff" weight="fill" />
              </div>
              <p>Compra simples e segura</p>
            </span>
            <span>
              <div className="box-2">
                <Package color="#fff" weight="fill" />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </span>
            <span>
              <div className="box-3">
                <Clock color="#fff" weight="fill" />
              </div>
              <p>Entrega rápida e rastreada</p>
            </span>
            <span>
              <div className="box-4">
                <Coffee color="#fff" weight="fill" />
              </div>
              <p>O café chega fresquinho até você</p>
            </span>
          </FourItensContainer>
        </LeftContainer>
        <RightContainer>
          <img src={cup} alt="" />
        </RightContainer>
      </div>
    </>
  );
}
