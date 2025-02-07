import { Landing } from "../../components/Landing/Landing";
import { BackgroundEffect } from "./stylesHome";
export function Home() {
  return (
    <BackgroundEffect>
      <Landing />
    </BackgroundEffect>
  );
}
