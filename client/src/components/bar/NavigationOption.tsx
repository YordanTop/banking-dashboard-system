export default interface NavigationOption{

    links?: NavigationLink[],

    buttons?:NavigationButton[]



}

export interface NavigationButton{
    iconSource:string,
    text: string,
    rediraction?: string
}

export interface NavigationLink{
    text: string,
    rediraction?: string
}