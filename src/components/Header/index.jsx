import React, { Fragment } from 'react';
import {
    Link,
} from 'react-router-dom';

const Header = () => {

    const displayMenu = () => {
        let display = document.getElementsByClassName('menu')[0].style.display == 'block' ? true : false;
        document.getElementsByClassName('menu')[0].style.display = display ? 'none' : 'block';
        document.getElementsByTagName('body')[0].style.overflow = display ? '' : 'hidden';
    }

    return(pug`
        section.wrapper.menu 
            div.navbar__container
                div.white_link
                    Link(to='/').navbar__label Chsch
                div.white_link
                    a(onClick=displayMenu).menu__back Назад
            ul.menu__list
                    li.menu__item
                        span.white_link.menu__item_text
                            Link(to='/') О центре
                    li.menu__item
                        span.white_link.menu__item_text
                            Link(to='/way') Ваш путь
                    li.menu__item
                        span.white_link.menu__item_text
                            Link(to='/cases') Кейсы
                    li.menu__item
                        span.white_link.menu__item_text
                            Link(to='/consult') Консультация
            div.menu__info
                div.menu__contact_wrapper
                    span.foot__name.info_text Студия Олега Чулакова
                    div.menu__contacts.white_link
                        a(href="tel: +74952680661").info_text +7 495 268 0661
                        a(href="mailto: school@chulakov.ru").info_text school@chulakov.ru
                        span.info_text Ростов-на-Дону, 344010 Кировский пр-т, д. 122, 3-й эт.
                    span.white_link.info_text
                        a(href="#") Правовая информация
                div.foot__links
                    span.white_link.info_text
                        a(href="#") Facebook
                    span.white_link.info_text
                        a(href="#") Вконтакте
                    span.white_link.info_text
                        a(href="#") Instagram

        nav.wrapper.navbar__container
            div.navbar__row.orange_link
                Link(to='/').navbar__label Chsch
            div.navbar__row.navbar__sign_up.orange_link
                Link(to='/consult').display_block.sign_up Записаться
            div.navbar__row
                div.orange_link
                    a(onClick=displayMenu).navbar__menu Меню
                ul.nav_list
                    li.black_link
                        Link(to='/').navbar__about.fs16 О центре
                    li.orange_link.active_nav_item
                        .navbar__line
                        Link(to='/way').navbar__about.fs16 Ваш путь
                    // li.orange_link.active_nav_item
                    //     Link(to='/way').navbar__your_way.fs16
                    //         div.navbar__your_way_wrapper
                    //             div.navbar__line
                    //             span Ваш путь
                    li.black_link
                        Link(to='/cases').navbar__cases.fs16 Кейсы
                    li.black_link
                        Link(to='/consult').navbar__consultation.fs16 Консультация
    `);
}

export default Header;