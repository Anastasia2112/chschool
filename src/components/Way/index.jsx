import React, { Fragment } from 'react';

const Way = () => {
    return(pug`
        section#your_way.wrapper.your_way
            h2.heading2 Ваш путь от начала обучения до трудоустройства
            p.subtitle.mb110 Пять шагов развития карьеры
            div.your_way__line
            div.your_way__card
                span.your_way__number.mr40 1
                div.your_way__card_wrapper
                    img(src="src/img/обучение.png", alt="Обучение").your_way__img
                    div
                        p.your_way__card_heading Обучение
                        p Процесс, который должен быть регулярным в жизни специалиста. В школе можно найти программы по самым востребованным направлениям.
            div.your_way__line
            div.your_way__card.your_way__even
                span.your_way__number 2
                div.your_way__card_wrapper
                    img(src="src/img/практика.png", alt="Практика").your_way__img
                    div
                        p.your_way__card_heading Практика
                        p Специалист без опыта мало востребован. Любой курс школы &mdash; это 70% практики. Наша команда сфокусирована на получаемых навыках выпускников.
            div.your_way__line
            div.your_way__card
                span.your_way__number.mr40 3
                div.your_way__card_wrapper
                    img(src="src/img/кейсы.png", alt="Кейсы").your_way__img
                    div
                        p.your_way__card_heading Кейсы
                        p Портфолио и опыт &mdash; ключевое, что нужно работодателю для принятия решений. Все выпускники школы выходят с кейсами от крупных, международных брендов.
            div.your_way__line
            div.your_way__card.your_way__even
                span.your_way__number 4
                div.your_way__card_wrapper
                    img(src="src/img/собеседование.png", alt="Собеседование").your_way__img.your_way__interview
                    div
                        p.your_way__card_heading Собеседование
                        p Поиск лучших предложений и упаковка себя, как специалиста  &mdash; важный этап, в котором наши специалисты помогут каждому выпускнику.
            div.your_way__line
            div.your_way__card
                span.your_way__number 5
                div.your_way__card_wrapper
                    img(src="src/img/работа.png", alt="Работа").your_way__img
                    div
                        p.your_way__card_heading Работа
                        p Поздравляем, вы действующий специалист. Ваше трудоустройство &mdash; это только начало пути. Мы подскажем, как развивать свою карьеру.
            div.your_way__line.your_way__last_line

        section.wrapper.companies
            div.center_heading
                h3.heading3 Наши выпускники работают в ведущих компаниях
            table.companies__table
                tbody
                    tr.companies__tr
                        td.companies__td
                            img(src="src/img/мтс.png", alt="МТС").companies__img
                        td.companies__td
                            img(src="src/img/мегафон.png", alt="Мегафон").companies__img
                        td.companies__td
                            img(src="src/img/yota.png", alt="YOTA").companies__img
                        td.companies__td
                            img(src="src/img/теле2.png", alt="TELE2").companies__img
                    tr.companies__tr
                        td.companies__td 
                            img(src="src/img/росбанк.png", alt="Росбанк").companies__img
                        td.companies__td
                            img(src="src/img/яндекс.png", alt="Яндекс").companies__img
                        td.companies__td
                            img(src="src/img/открытие.png", alt="Банк Открытие").companies__img
                        td.companies__td
                            img(src="src/img/альфа.png", alt="Альфа Банк").companies__img
                    tr.companies__tr
                        td.companies__td 
                            img(src="src/img/homecredit.png", alt="Home Credit Bank").companies__img
                        td.companies__td
                            img(src="src/img/бкс.png", alt="БКС").companies__img
                        td.companies__td
                            img(src="src/img/тинькофф.png", alt="Тинькофф Банк").companies__img
                        td.companies__td
                            img(src="src/img/raiffeisen.png", alt="Raiffeisen Bank").companies__img
                    tr.companies__tr
                        td.companies__td 
                            img(src="src/img/avito.png", alt="Avito").companies__img
                        td.companies__td
                            img(src="src/img/пападжонс.png", alt="Папа Джонс").companies__img
                        td.companies__td
                            img(src="src/img/ikea.png", alt="IKEA").companies__img
                        td.companies__td
                            img(src="src/img/leroymerlin.png", alt="Leroy Merlin").companies__img
    `
    );
}

export default Way;