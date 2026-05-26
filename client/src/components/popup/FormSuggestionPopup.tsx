
export function FormSuggestionPopup({message}: {message: string}){
    return(<>
            <div className="absolute w-60 right-2 bg-white border-gray border-2 rounded-md shadow-md p-1 rounded-lg whitespace-pre-line">
                 <p className="text-sm">{message}</p>
            </div>    

    </>);

}