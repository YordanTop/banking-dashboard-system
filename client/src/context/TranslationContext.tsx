import React, { type Dispatch, type SetStateAction } from "react";



export const TranslationContext = React.createContext<Dispatch<SetStateAction<string>>>(()=>{});