"use client"
 import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Provisional Component

/* InputText props:
        - type: string, optional, default = 'text' ;
            input type: email, number, tel, text, password ;
            Render a element with the specified input type
            
*/
export const InputRadio = ({styles, options, type = 'text', register, name, validationRules, errors, ...rest}) => {    
    const [selectedValue, setSelectedValue] = useState('');
    const { t } = useTranslation(); 

    const handleChange = (event) => {
        console.log(event)
        setSelectedValue(event.target.value);
    };
    
  return (
    <div className={styles.inputExternalContainer} >
        <label className={styles.label} htmlFor={name}>{t(name)}</label>
        <div className={styles.radioContainer} >
            {options.map((option) => (
                <div className={styles.radioOptionContainer}>
                    <label className={styles.optionContainer} key={option.value}>
                        <input
                            type="radio"
                            value={option.value}
                            checked
                            onChange={handleChange}
                            {...register(name, validationRules)}
                            {...rest}
                            name={name} // Asegura que todos los radio buttons compartan el mismo name
                        />
                        {t(option.label)}
                    </label>
                </div>
            ))}
            
        </div> 
    </div>
  )
}
