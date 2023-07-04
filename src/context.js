import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';


const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext()

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {

    const [loading, setLoading] = useState(true); // loading state value
    const [searchTerm, setSearchTerm] = useState('a'); // fetching different values 
    const [cocktails, setCocktails] = useState([]) 

    const fetchDrinks = useCallback(async () => { 
        setLoading(true);
        try {
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json(); // 
            const {drinks} = data;
            if(drinks){
                const newCocktails = drinks.map((item)=>{
                    const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = // destructure the properties from object 
                    item;
                    return {id: idDrink, name:strDrink, image:strDrinkThumb, info:strAlcoholic, glass: strGlass}
                })
                setCocktails(newCocktails)
                
            } else {
                setCocktails([])
            }
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }, [searchTerm])

    useEffect(() => {
        fetchDrinks()
    }, [searchTerm, fetchDrinks])

    return (
        <AppContext.Provider
        value={{
            loading,
            searchTerm,
            cocktails,
            setSearchTerm,
        }}
        >
        {children}
        </AppContext.Provider>
    )

}


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }