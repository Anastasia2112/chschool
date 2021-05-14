import React, { Fragment } from 'react';
import {
    Link,
} from 'react-router-dom';

const Footer = () => {
    return(pug`
        footer.foot.wrapper
            div.foot__left_col
                span.foot__name Chulakov School
                span.white_link.info_text
                    a(href="#") Правовая информация
            div.foot__right_col
                div.foot__contacts
                    div.white_link
                        span
                            a(href="mailto: school@chulakov.ru") school@chulakov.ru
                        span
                            a(href="tel: +74952680661") +7 495 268 0661
                    div.foot__adress
                        span Ростов-на-Дону, 344010 
                        span Кировский пр-т, д. 122, 3-й эт.
                div.foot__links
                    span.white_link.info_text
                        a(href="#") Facebook
                    span.white_link.info_text
                        a(href="#") Вконтакте
                    span.white_link.info_text
                        a(href="#") Instagram
    `);
}

export default Footer;