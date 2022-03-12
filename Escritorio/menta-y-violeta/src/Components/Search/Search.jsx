import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Search.css';
const Search = () => {
  return (
    <div>
        <div className="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="searchicon"/>
        </div>
    </div>
  )
}

export default Search