import React from 'react';
import Cocktail from '../components/Cocktail'
import Loading from '../components/Loading' 
import { useGlobalContext } from '../context'

export default function CocktailList () {
    const {cocktails, loading} = useGlobalContext();

    if(loading){
        return<Loading/> // if we cannot fetch a cocktail - true by default in the context
    }
    if(cocktails.length < 1){ // if it is less than one, show the error
        return (
        <h2 className="section-title">
            no cocktails matched your search criteria! :-(
        </h2>
        )
    }
    return (
        <section className="section">
            <h2 className="section-title">
                cocktails
            </h2>
            <div className="cocktails-center">
              {cocktails.map((item)=>{
                return <Cocktail key={item.id} {...item}/>
              })}
        </div>
        </section>
    )
}
