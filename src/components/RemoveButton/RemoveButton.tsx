import { RemoveButtonContainer } from "./stylesRemoveButton";
import { Trash } from "phosphor-react"
export function RemoveButton(){
    return(
        <RemoveButtonContainer><Trash size={16} color="#8047F8"/>REMOVER</RemoveButtonContainer>
    )
}