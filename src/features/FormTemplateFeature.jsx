"use client"

// Actions
import { registerUser, signIn } from "../actions/authActions.js";
import { registerUserSchema, signInSchema } from "../validations/validations"; // Ajusta la ruta según tu estructura
// Hooks
import { useForm, useWatch } from "react-hook-form";

// Components
import { InputsRenderFeature } from './InputsRenderFeature.jsx';
// Form Styles
import authStyles from '../styles/formStyles/authStyles.module.scss'
// Constants
import { formsSchema } from '../../public/constants/formsSchema.js';
import { useRouter } from 'next/navigation'
// Hooks
import { useTranslations } from 'next-intl';
import { useUserStore } from "../store/userStore.js";
import { zodResolver } from "@hookform/resolvers/zod";

export const FormTemplateFeature = ({ formId }) => {
    const t = useTranslations();
    const router = useRouter();
    const setUser = useUserStore((state) => state.setUser)

    const { title, inputFields, submitText } = formsSchema[formId];

    const formConfig = {
        createUser: {
            action: registerUser, // Función para registrar un usuario
            styles: authStyles, // Estilos del formulario
            schema: registerUserSchema, // Esquema de validación
            redirection: "/es", // Redirecion
            dispatcher: setUser
        },
        signIn: {
            action: signIn,
            styles: authStyles,
            schema: signInSchema,
            redirection: "/es",
            dispatcher: setUser,
        },
        // Puedes agregar más formularios aquí
        // createDeck: {
        //   action: createDeck,
        //   styles: createDeckStyles,
        //   schema: createDeckSchema,
        // },
    };

    const { action, styles, schema, redirection, dispatcher } = formConfig[formId];

    const methods = useForm({
        resolver: zodResolver(schema),
    });

    const { handleSubmit, register, formState: { errors }, control } = methods;

    const format = useWatch({ control, name: 'format' });

    // alert(formId)
    const onSubmit = async (newData) => {
        console.log(newData)
        const data = await action(newData);

        if (data?.status === "error") {
            console.log(data)
            data.details?.fieldErrors &&
                Object.entries(data.details?.fieldErrors).forEach(([field, messages]) => {
                    methods.setError(field, {
                        type: "manual",
                        message: messages[0],
                    });
                });
        } else if (data?.status === "success") {
 
            dispatcher(data.user)

            redirection && (
                router.refresh(),
                router.push(redirection)
            )

        }

    }

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
                            errors={errors} // Pasa los errores al componente InputsRenderFeature
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
