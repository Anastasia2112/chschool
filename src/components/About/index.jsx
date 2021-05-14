import React, { Fragment } from 'react';
import {
    Link,
} from 'react-router-dom';

const About = () => {
    return(pug`
        section.wrapper.poster 
            h1.heading1 Career Center
            img(src="src/img/Group3473.png", alt="Poster").poster__img
            div.orange_link.poster__sign_up_wrapper
                Link(to='/consult').display_block.sign_up.poster__sign_up Записаться
        
        section#how_work.wrapper.how_work
            div.heading2 Как работает центр карьеры выпускников?
            p.subtitle Наша цель &mdash; профит студента
            div.how_work__cards
                div.how_work__card
                    div.how_work__card__circle A
                    div.how_work__card__content
                        p.how_work__card__heading HR-лекции
                        p.how_work__card__text Специалисты центра научат правильно оформлять резюме, проходить собеседование, упаковывать свои кейсы и развивать карьеру.
                div.how_work__card
                    div.how_work__card__circle B
                    div.how_work__card__content
                        p.how_work__card__heading Акселератор
                        p.how_work__card__text Интегрированный центр обучения в офисе Студии Олега Чулакова &mdash; это два месяца бесплатного обучения по трем направлениям.
            div.how_work__cards
                div.how_work__card
                    div.how_work__card__circle C
                    div.how_work__card__content
                        p.how_work__card__heading HR-отделы
                        p.how_work__card__text Мы сотрудничаем с топовыми продуктовыми компаниями и агенствами, которым регулярно рекомендуем наших выпускников.
                div.how_work__card
                    div.how_work__card__circle D
                    div.how_work__card__content
                        p.how_work__card__heading Фриланс
                        p.how_work__card__text Обучаем правильно организовать удаленную работу и поиска партнеров для регулярного сотрудничества.
            
    `
    );
}

export default About;