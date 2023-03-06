import React from "react";
import { NavLink } from 'react-router-dom';

const CategoryNavigation = ({categories}) => {
    if(categories){
        const activeClass = 'active';
        return (
            <div className="outer-container">
                <ul> 
                    {categories.map(cat => <li
                        key={cat.slugs[0]}>
                            <NavLink activeClassName={activeClass} to={`${cat.url}/${cat.slugs[0]}/1`}>
                                {cat.uid}
                            </NavLink>
                        </li>)}
                </ul>
    
            </div>
        )
    }
}

export default CategoryNavigation