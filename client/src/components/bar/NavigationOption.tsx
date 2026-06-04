export default interface NavigationOption{

    logo?: NavigationLogo;

    links?: NavigationLink[],

    buttons?:NavigationButton[]
    
}

export interface NavigationLogo{
    iconSource:string,
    rediraction?: string
}

export interface NavigationButton{
    iconSource?:string,
    text: string,
    rediraction?: string,
    onClick?: () => Promise<void>
}

export interface NavigationLink{
    iconSource?:string,
    text: string,
    rediraction?: string
}

