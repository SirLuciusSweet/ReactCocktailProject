import React from 'react';
import RiccardoCocktail from '../RiccardoCocktail.jpg';

const About = () => {
    return (
        <section className="section about-section">
            <h1 className="section-title">about page</h1>
            <img src={RiccardoCocktail} alt="Riccardo with cocktail">
            </img>
            <p>
                Welcome to Riccardos cocktail database, your one stop shop to find your favourite cocktail recipe. Come and have a browse, and find your new favourite drink to impress your guests at your next dinner party.
            </p>
        </section>
    )
}

export default About 