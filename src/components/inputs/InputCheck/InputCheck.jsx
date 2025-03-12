"use client"
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const InputCheck = ({styles, register, name, label, validationRules, errors, ...rest}) => {    
    const [selectedValue, setSelectedValue] = useState('');
    const { t } = useTranslation(); 

    const handleChange = (event) => { 
        setSelectedValue(event.target.value);
    };
    
  return (
    <div className={styles.inputCheckExternalContainer} >
        <div className={styles.checkContainer} >
            <label className={styles.label} htmlFor={name}>{t(name)}</label>
            <input 
                className={styles.inputPass}
                type="checkbox" 
                {...register(name, validationRules)} 
                {...rest} 
            />
        </div> 
    </div>
  )
}
