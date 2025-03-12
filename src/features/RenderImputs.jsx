 
import { useEffect } from 'react';
import { InputCheck } from './InputCheck/InputCheck';
import { InputRadio } from './InputRadio/InputRadio';
import { InputSelector } from './InputSelector/InputSelector';
import { InputText } from './InputText/InputText'
import { InputTextSearch } from './InputTextSearch/InputTextSearch';

export const RenderInputs = (
    {   
        styles,    
        options, 
        inputId, 
        control,
        format,
        handleSubmit, 
        register, 
        formState:{errors}, 
        name, 
        type, 
        placeholder, 
        autoComplete, 
        validationRules,
        conditional=false,
    }) => {

    console.log(inputId)
    if (conditional && conditional.when.name === 'format' && !conditional.when.value.includes(format)) {
        console.log('format', format)
        return null;
    }
    

  return (
    <>
        {
            inputId === "inputText" ?
                <InputText 
                    styles={styles}
                    name={name} 
                    type={type} 
                    register={register}
                    errors={errors}
                    placeholder={placeholder} 
                    autoComplete={autoComplete} 
                    validationRules={validationRules}
                    conditional={conditional}
                />
            : inputId === "inputSelect" ?
                <InputSelector 
                    styles={styles}
                    name={name} 
                    options={options} 
                    register={register}
                    errors={errors}
                    placeholder={placeholder} 
                    autoComplete={autoComplete} 
                    validationRules={validationRules}
                />
            : inputId === "inputTextSearch" ?
                <InputTextSearch
                    styles={styles}
                    name={name} 
                    type={type} 
                    register={register}
                    errors={errors}
                    placeholder={placeholder} 
                    autoComplete={autoComplete} 
                    validationRules={validationRules}
                    conditional={conditional}
                />
            : inputId === "inputRadio" ?
                <InputRadio 
                    styles={styles}
                    name={name} 
                    options={options} 
                    register={register}
                    errors={errors}
                    placeholder={placeholder} 
                    autoComplete={autoComplete} 
                    validationRules={validationRules}
                /> 
            : inputId === "InputCheck" &&
                <InputCheck 
                    styles={styles}
                    name={name} 
                    options={options} 
                    register={register}
                    errors={errors}
                    placeholder={placeholder} 
                    autoComplete={autoComplete} 
                    validationRules={validationRules}
                /> 
        }
    </>
  )
}
