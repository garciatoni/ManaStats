import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const InputTextSearch = ({styles, type = 'text', register, name, placeholder, validationRules, errors, conditional, ...rest}) => {
    const { t } = useTranslation();


    const getCards = async () => { 
        const {data:{cards}} = await get(`/card/find_commander/${queryValue}`) 
    }


  return (
    <div className={styles.inputExternalContainer} >
        
        <input
            className={styles.inputContainer}
            type={type} 
            placeholder={t(placeholder)}
            {...register(name, validationRules)} 
            {...rest} 
        />
    
        {errors[name] && <span className={styles.errors}>{errors[name].message}</span>}

    </div>
  )
}
