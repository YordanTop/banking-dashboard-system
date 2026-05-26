import type { RegisterOptions, UseFormRegister,FieldValues, ErrorOption } from "react-hook-form";
import type { ToggleToolTip } from "../toggle/ToggleToolTipField";

export interface Field{

    labelText: string;
    fieldName: string;
    typeOfField: string;
    icon?: string;
    register?: UseFormRegister<FieldValues>
    validation?: RegisterOptions
    
    toggle?: ToggleToolTip;
}