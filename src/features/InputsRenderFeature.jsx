 

// Components
import { InputCheck } from '../components/inputs/InputCheck/InputCheck';
import { InputRadio } from '../components/inputs/InputRadio/InputRadio';
import { InputSelector } from '../components/inputs/InputSelector/InputSelector';
import { InputText } from '../components/inputs/InputText/InputText';
import { InputTextSearch } from '../components/inputs/InputTextSearch/InputTextSearch';

export const InputsRenderFeature = (
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
