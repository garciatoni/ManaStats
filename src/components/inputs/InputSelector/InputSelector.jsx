"use client"
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Provisional Component

/* InputText props:
        - type: string, optional, default = 'text' ;
            input type: email, number, tel, text, password ;
            Render a element with the specified input type
            
*/
export const InputSelector = ({styles, options, type = 'text', register, name, validationRules, errors, ...rest}) => {
    const [inputType, setInputType] = useState(type);
    
    const { t } = useTranslation(); 
    
  return (
    <div className={styles.inputExternalContainer} >
        <label htmlFor={name}>{t(name)}</label>
        <select className={styles.selectContainer} {...register(name, validationRules)} {...rest}>
            {options.map((option, index) => (
                <option className={styles.selectOptionContainer} key={index} value={option.value}>
                    {t(option.label)}
                </option>
            ))}
        </select>
    </div>
  )
}
