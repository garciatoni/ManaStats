// Hooks
// import { useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";
import { useForm, useWatch } from "react-hook-form";
// import { useDispatchByOrigin } from "../../hooks/useDispatchByOrigin";
// import { useRequest } from '../../hooks/useRequest';
 
// Constants
import { formsSchema } from '../../public/constants/formsSchema.js';

// Components
import { InputsRenderFeature } from './InputsRenderFeature.jsx';

// Form Styles
import authStyles from '../styles/formStyles/authStyles.module.scss'

// import createDeckStyles from '../styles/formStyles/createDeckStyles.module';
// import addCartToDeckStyles from '../styles/formStyles/addCartToDeckStyles.module';

export const FormTemplateFeature = ({ formId }) => {
    const { title, inputFields, submitText, urlSubmit } = formsSchema[formId]
    // const dispatch = useDispatch();
    // const { post } = useRequest();
    // const { dispatchOrigin } = useDispatchByOrigin()

    const formStyles = {
        createUser: authStyles,
        signIn: authStyles,
        // createDeck: createDeckStyles,
        // addCartToDeck: addCartToDeckStyles,
    }

    const styles = formStyles[formId]


    const onSubmit = async (newData) => {
        // console.log(newData)
        // let userAuth = true;
        // (urlSubmit === "/auth/signIn" && urlSubmit === "/auth/create_user") && (userAuth = false)
        // const { data } = await post(urlSubmit, newData, userAuth)

        // dispatchOrigin(data);
    }

    const { t } = useTranslation();


    const methods = useForm();
    const { handleSubmit, register, formState: { errors }, control } = methods;
    const format = useWatch({ control, name: 'format' });



    return (
        <div className={styles.FormRenderFeatureContainer} >
            {
                title &&
                <h1 className={styles.formTitle}  >
                    {t(title)}
                </h1>
            }

            <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer} >
                {
                    inputFields?.map((input, id) => (
                        <InputsRenderFeature
                            control={control}
                            format={format}
                            styles={styles}
                            key={id}
                            {...input}
                            {...methods}
                        />
                    ))
                }
                
                <input 
                    type="submit" 
                    value={t(submitText)} 
                    className={styles.submitInfo} 
                />

            </form>

        </div>
    )
}
