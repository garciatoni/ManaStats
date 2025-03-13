"use client"

// Hooks 
import { useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';

//  import { EyeIcon } from '@assets/ui/eyeIcon'
//  import { EyeIconOpen } from '@assets/ui/eyeIconOpen'


export const InputText = ({ styles, type = 'text', register, name, placeholder, validationRules, errors, conditional, ...rest }) => {
    const t = useTranslations();

    const [inputType, setInputType] = useState(type);
    const [hasText, setHasText] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        errors[name] &&
            handleFocus();
    }, [errors[name]])


    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => {setIsFocused(false),errors[name] = false};
    const handleInput = (e) => setHasText(e.target.value.length > 0);

    const handleClick = () => setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));

    const showError = errors[name] ? (
        <span className={styles.errors}>{t(`errors.${errors[name].message}`)}</span>
    ) : null;


    return (
        <div className={styles.inputExternalContainer} >
            <label
                htmlFor="text"
                className={`${isFocused || hasText ? styles.labelOn : styles.labelOff}`}
            >
                {t(placeholder)}
            </label>

            {
                type === 'password' ?
                    <div className={styles.inputPassContainer}>
                        <input
                            className={styles.inputPass}
                            type={inputType}
                            {...register(name, validationRules)}
                            {...rest}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onInput={handleInput}
                            placeholder=''
                        />
                        {showError}
                        <button className={styles.hidePasswordButton} onClick={(e) => {
                            e.preventDefault()
                            handleClick()
                        }}>
                            {/* TODO: Mostrar imagen de ojo */}

                            {/* {inputType === 'password' ? <EyeIconOpen /> : <EyeIcon />} */}
                        </button>
                    </div>
                    :
                    <input
                        className={styles.inputContainer}
                        type={inputType}
                        {...register(name, validationRules)}
                        {...rest}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onInput={handleInput}
                        placeholder=''
                    />
            }

            {errors[name] && type !== 'password' && showError}

        </div>
    )
}


/* InputText props:
        - type: string, optional, default = 'text' ;
            input type: email, number, tel, text, password ;
            Render a element with the specified input type
            
*/