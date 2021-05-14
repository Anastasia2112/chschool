import React, { Fragment } from 'react';

const Consult = () => {
    return(pug`
        section#consult.wrapper.consult
            div.consult__form 
                h3.heading3.consult_heading Бесплатная консультация
                form(action="#") 
                    p.consult__form_p  Специалист центра развития карьеры с радостью ответит на вопросы и составит вашу личную траекторию развития.
                    div.consult__form_wrapper
                        label.consult__form_label Имя
                        input(type="text").consult__form_input
                    div.consult__form_wrapper
                        label.consult__form_label Телефон
                        input(type="text").consult__form_input
                    div.consult__form_wrapper
                        label.consult__form_label E-mail
                        input(type="email").consult__form_input
                    div.consult__form_footer
                        input(type="submit" value="Записаться").sign_up
                        p.consult__form_footer_p.orange_link
                            | Нажимая на кнопку, вы даете 
                            a.consent согласие 
                            | на обработку персональных данных и соглашаетесь с политикой конфиденциальности.
    `
    );
}

export default Consult;