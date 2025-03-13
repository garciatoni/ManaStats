'use client'

import { AnimatePresence, motion } from "framer-motion";
// Hooks
import { useEffect, useMemo, useState } from 'react';

// Features
import { FormTemplateFeature } from "../../features/FormTemplateFeature.jsx"
// Styles 
import styles from './AuthSection.module.scss'
import { useTranslations } from 'next-intl';

export const AuthSection = () => {
    const t = useTranslations('auth');


    // Muestra y controla las animaciones de SignIn o Register. 
    const [signMode, setSignMode] = useState(true);

    // Controla la primera vez que se monta el componente para evitar animaciones iniciales.
    const [firstTimeMounted, setFirstTimeMounted] = useState(true);

    const duration = useMemo(() => (
        .6
    ))

    const handleClick = () => (setSignMode(!signMode), setFirstTimeMounted(false));

    return (

        <div className={styles.AuthSectionContainer}>
            <div className={styles.authFormsContainer}>

                {/* REGISTER CONTAINER */}
                <AnimatePresence>
                    {
                        signMode &&
                        <motion.div
                            // TODO: CONTROLAR INITIAL, ANIMATE, EXIT , TRANSITION SEGUN EL SIGNSTATUS de router
                            messages className={styles.formContainer}
                            key="form"
                            initial={firstTimeMounted ? false : { opacity: 0, x: '-100%' }}
                            animate={{ opacity: 1, x: '0%' }}
                            exit={{ opacity: 0, x: '-100%' }}
                            transition={{
                                opacity: { duration: 0.5, ease: 'easeInOut' }, // Opacidad más rápida
                                x: { duration, ease: 'easeInOut' } // Movimiento más lento
                            }}
                        >
                            <div className={styles.formWrapper}>
                                <FormTemplateFeature formId='createUser' />
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>

                {/* INFORMATION CONTAINER AND BUTTON */}
                <motion.div className={styles.informationContainer}
                    initial={false}
                    animate={{ x: signMode ? '81.85%' : 0 }}
                    transition={{
                        x: { duration, ease: 'easeInOut' } // Movimiento más lento
                    }}
                >
                    <div className={styles.triangle} />
                    <div className={styles.triangle5} />
                    <div className={styles.triangle2} />
                    <div className={styles.triangle3} />
                    <div className={styles.triangle4} />

                    <div className={styles.informationWrapper}>
                        <button onClick={handleClick}>{t(`${signMode ? 'signIn' : 'register'}`)}</button>
                    </div>

                </motion.div>

                {/* SIGN IN CONTAINER */}
                <AnimatePresence>
                    {
                        !signMode &&
                        <motion.div
                            // TODO: CONTROLAR INITIAL, ANIMATE, EXIT , TRANSITION SEGUN EL SIGNSTATUS de router
                            className={`${styles.formContainer} ${!signMode && styles.formContainerInvert}`}
                            key="foarm"
                            initial={{ opacity: 0, x: '100%' }} // Empieza fuera de la pantalla (a la derecha)
                            animate={{ opacity: 1, x: '0%' }} // Se mueve desde la derecha al centro
                            exit={{ opacity: 0, x: '100%' }} // Se mueve a la derecha al salir
                            transition={{
                                opacity: { duration: 0.6, ease: 'easeInOut' }, // Opacidad más rápida
                                x: { duration, ease: 'easeInOut' } // Movimiento más lento
                            }}
                        >
                            <div className={styles.formWrapper}>
                                <FormTemplateFeature formId='signIn' />
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>

                {/* LOGO CONTAINER */}
                <motion.div className={styles.logoWrapper}
                    initial={false}
                    animate={{ x: signMode ? 0 : '122.3%' }}
                    transition={{
                        x: { duration: .9, ease: 'easeInOut' } // Movimiento más lento
                    }}
                >
                    LOGO
                </motion.div>

                <AnimatePresence>
                    {
                        signMode &&
                        <motion.div
                            className={styles.informationWebContainer}
                            key="foarm"
                            initial={firstTimeMounted ? false : { opacity: 0, x: '200%' }}
                            animate={{ opacity: 1, x: '82%' }} // Se mueve desde la derecha al centro
                            exit={{ opacity: 0, x: '200%' }} // Se mueve a la derecha al salir
                            transition={{
                                opacity: { duration, ease: 'easeInOut' }, // Opacidad más rápida
                                x: { duration, ease: 'easeInOut' } // Movimiento más lento
                            }}
                        >
                            <h2>
                                {t('welcome')}
                            </h2>
                            <span>
                                {t('info2')}
                            </span>
                        </motion.div>
                    }
                </AnimatePresence>
                {/* INFORMATION AND IMAGE CONTAINERS TOP */}
                <AnimatePresence>
                    {
                        !signMode &&
                        <motion.div
                            className={styles.informationWebContainer}
                            key="foarm"
                            initial={{ opacity: 0, x: '-100%' }}
                            animate={{ opacity: 1, x: 0 }} // Se mueve desde la derecha al centro
                            exit={{ opacity: 0, x: '-100%' }} // Se mueve a la derecha al salir
                            transition={{
                                opacity: { duration, ease: 'easeInOut' }, // Opacidad más rápida
                                x: { duration, ease: 'easeInOut' } // Movimiento más lento
                            }}
                        >
                            <h2>
                                {t('welcome')}
                            </h2>
                            <span>
                                {t('info2')}
                            </span>
                        </motion.div>
                    }
                </AnimatePresence>

                <AnimatePresence>
                    {
                        signMode &&
                        <motion.div
                            className={styles.informationWebBottomContainer}
                            key="foarm"
                            initial={firstTimeMounted ? false : { opacity: 0, x: '200%' }}
                            animate={{ opacity: 1, x: '82%' }} // Se mueve desde la derecha al centro
                            exit={{ opacity: 0, x: '200%' }} // Se mueve a la derecha al salir
                            transition={{
                                opacity: { duration, ease: 'easeInOut' }, // Opacidad más rápida
                                x: { duration, ease: 'easeInOut' } // Movimiento más lento
                            }}
                        >

                        </motion.div>
                    }
                </AnimatePresence>
                {/* INFORMATION AND IMAGE CONTAINERS BOTTOM */}
                <AnimatePresence>
                    {
                        !signMode &&
                        <motion.div
                            className={styles.informationWebBottomContainer}
                            key="foarm"
                            initial={{ opacity: 0, x: '-100%' }}
                            animate={{ opacity: 1, x: 0 }} // Se mueve desde la derecha al centro
                            exit={{ opacity: 0, x: '-100%' }} // Se mueve a la derecha al salir
                            transition={{
                                opacity: { duration, ease: 'easeInOut' }, // Opacidad más rápida
                                x: { duration, ease: 'easeInOut' } // Movimiento más lento
                            }}
                        >

                            Dolor consequat in aute labore dolor cillum officia est laborum nostrud esse. Aliqua ut voluptate commodo sint Lorem aute Lorem labore nostrud et velit reprehenderit. Exercitation ullamco nulla nostrud velit ad fugiat exercitation proident cillum. In dolor dolore velit nisi nisi laboris ut do.

                        </motion.div>
                    }
                </AnimatePresence>


                {/* LEFT DECORATIONS */}
                <AnimatePresence>
                    {
                        signMode &&
                        <>
                            {/* TOP LEFT DECORATIONS */}
                            <motion.div
                                className={`${styles.topDecorations} ${styles.triangle}`}
                                initial={{ opacity: 0, y: '-100%', x: '-40%' }}
                                animate={{ opacity: 1, y: 0, x: '-10%' }} // Se mueve desde la derecha al centro
                                exit={{ opacity: 0, y: '-100%', x: '-40%' }} // Se mueve a la derecha al salir
                                transition={{ duration, ease: 'easeInOut' }}
                            />
                            <motion.div
                                className={`${styles.topDecorations} ${styles.triangle2}`}
                                initial={{ opacity: 0, y: '-100%', x: '-20%' }}
                                animate={{ opacity: 1, y: 0, x: '-10%' }} // Se mueve desde la derecha al centro
                                exit={{ opacity: 0, y: '-100%', x: '-20%' }} // Se mueve a la derecha al salir
                                transition={{ duration, ease: 'easeInOut' }}
                            />
                            <motion.div
                                className={`${styles.topDecorations} ${styles.triangle3}`}
                                initial={{ opacity: 0, y: '-100%', x: '-10%' }}
                                animate={{ opacity: 1, y: 0, x: '-10%' }} // Se mueve desde la derecha al centro
                                exit={{ opacity: 0, y: '-100%', x: '-10%' }} // Se mueve a la derecha al salir
                                transition={{ duration, ease: 'easeInOut' }}
                            />
                            {/* BOTTOM RIGHT DECORATIONS */}
                            <motion.div
                                className={`${styles.bottomDecorations} ${styles.triangle}`}
                                initial={{ opacity: 0, y: '100%', x: '20%' }}
                                animate={{ opacity: 1, y: 0, x: '-10%' }} // Se mueve desde la derecha al centro
                                exit={{ opacity: 0, y: '100%', x: '20%' }} // Se mueve a la derecha al salir
                                transition={{ duration, ease: 'easeInOut' }}
                            />
                            <motion.div
                                className={`${styles.bottomDecorations} ${styles.triangle2}`}
                                initial={{ opacity: 0, y: '100%', x: '30%' }}
                                animate={{ opacity: 1, y: 0, x: '-10%' }} // Se mueve desde la derecha al centro
                                exit={{ opacity: 0, y: '100%', x: '30%' }} // Se mueve a la derecha al salir
                                transition={{ duration, ease: 'easeInOut' }}
                            />
                            <motion.div
                                className={`${styles.bottomDecorations} ${styles.triangle3}`}
                                initial={{ opacity: 0, y: '100%', x: '10%' }}
                                animate={{ opacity: 1, y: 0, x: '-10%' }} // Se mueve desde la derecha al centro
                                exit={{ opacity: 0, y: '100%', x: '10%' }} // Se mueve a la derecha al salir
                                transition={{ duration, ease: 'easeInOut' }}
                            />
                        </>
                    }
                </AnimatePresence>

                {/* RIGHT DECORATIONS */}
                <AnimatePresence>
                    {
                        !signMode &&
                        <>
                            {/* TOP RIGHT DECORATIONS */}
                            <motion.div
                                className={`${styles.topDecorations} ${styles.triangle}`}
                                initial={{ opacity: 0, y: '-100%', x: '70%' }}
                                animate={{ opacity: 1, y: 0, x: '100%' }} // Se mueve desde la derecha al centro
                                exit={{ opacity: 0, y: '-100%', x: '70%' }} // Se mueve a la derecha al salir
                                transition={{ duration, ease: 'easeInOut' }}
                            />
                            <motion.div
                                className={`${styles.topDecorations} ${styles.triangle2}`}
                                initial={{ opacity: 0, y: '-100%', x: '90%' }}
                                animate={{ opacity: 1, y: 0, x: '100%' }} // Se mueve desde la derecha al centro
                                exit={{ opacity: 0, y: '-100%', x: '90%' }} // Se mueve a la derecha al salir
                                transition={{ duration, ease: 'easeInOut' }}
                            />
                            <motion.div
                                className={`${styles.topDecorations} ${styles.triangle3}`}
                                initial={{ opacity: 0, y: '-100%', x: '110%' }}
                                animate={{ opacity: 1, y: 0, x: '100%' }} // Se mueve desde la derecha al centro
                                exit={{ opacity: 0, y: '-100%', x: '110%' }} // Se mueve a la derecha al salir
                                transition={{ duration, ease: 'easeInOut' }}
                            />
                            {/* BOTTOM RIGHT DECORATIONS */}
                            <motion.div
                                className={`${styles.bottomDecorations} ${styles.triangle}`}
                                initial={{ opacity: 0, y: '100%', x: '180%' }}
                                animate={{ opacity: 1, y: 0, x: '100%' }} // Se mueve desde la derecha al centro
                                exit={{ opacity: 0, y: '100%', x: '180%' }} // Se mueve a la derecha al salir
                                transition={{ duration, ease: 'easeInOut' }}
                            />
                            <motion.div
                                className={`${styles.bottomDecorations} ${styles.triangle2}`}
                                initial={{ opacity: 0, y: '100%', x: '170%' }}
                                animate={{ opacity: 1, y: 0, x: '100%' }} // Se mueve desde la derecha al centro
                                exit={{ opacity: 0, y: '100%', x: '170%' }} // Se mueve a la derecha al salir
                                transition={{ duration, ease: 'easeInOut' }}
                            />
                            <motion.div
                                className={`${styles.bottomDecorations} ${styles.triangle3}`}
                                initial={{ opacity: 0, y: '100%', x: '160%' }}
                                animate={{ opacity: 1, y: 0, x: '100%' }} // Se mueve desde la derecha al centro
                                exit={{ opacity: 0, y: '100%', x: '160%' }} // Se mueve a la derecha al salir
                                transition={{ duration, ease: 'easeInOut' }}
                            />
                        </>
                    }
                </AnimatePresence>

            </div>
        </div>

    )
}





