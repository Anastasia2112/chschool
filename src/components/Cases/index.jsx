import React, { Fragment } from 'react';

const Cases = () => {
    return(pug`
        section#cases.wrapper.cases
            div.cases_heading
                h2.heading2 Кейсы Студентов
                p.subtitle В этом разделе отображаем студентов и их выпускные работы
            div.cases__card
                div.cases__card_wrapper
                    div.cases__card_info
                        img(src="src/img/boy.png", alt="Фото").cases__photo
                        div
                            p.cases__card_heading Виталий Митрофанов
                            p Итоговая работа выпускника курса Interface Design и что то еще например о его проекте, где сейчас работает безоблачный карьерный рост.
                    div.cases__card_arrows
                        img(src="src/img/влево.png", alt="Влево").arrow.left_arrow
                        img(src="src/img/вправо.png", alt="Вправо").arrow
                div.cases__card_project
                    img(src="src/img/003.png", alt="Проект").cases__card_project_img.cases__card_project_img1
                    img(src="src/img/002.png", alt="Проект").cases__card_project_img.cases__card_project_img2
    `
    );
}

export default Cases;