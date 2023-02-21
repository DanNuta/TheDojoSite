import { PropsWithChildren } from "react";
import * as Style from "./VFormBox.style";
import {VBoxType} from "./type"

export const VFormBox: React.FC<PropsWithChildren<VBoxType>> = (props) => {
    return (
        <Style.Form onSubmit={props.onHandle}>
             <Style.h1>{props.title}</Style.h1>
            {props.children}
        </Style.Form>
    )
}