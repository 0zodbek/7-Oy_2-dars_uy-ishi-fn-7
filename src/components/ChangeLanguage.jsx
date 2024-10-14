import React from 'react';
import { useTranslation } from 'react-i18next';

function ChangeLanguage() {
    const { i18n } = useTranslation();

    const handleChange = (event) => {
        i18n.changeLanguage(event.target.value); 
    };

    return (
        <div>
            <label htmlFor="language-select">Tilni tanlang:</label>
            <select id="language-select" onChange={handleChange}>
                <option value="en">Inglizcha</option>
                <option value="uz">O'zbekcha</option>
                <option value="ru">Ruscha</option>
            </select>
        </div>
    );
}

export default ChangeLanguage;