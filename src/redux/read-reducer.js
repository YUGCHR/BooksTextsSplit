const SCROLL_LINE_UP = 'SCROLL-LINE-UP';
const SCROLL_LINE_DOWN = 'SCROLL-LINE-DOWN';

let initialState = {
    engSentences: [
        { id: 1, sentenceText: '01 How to explain?' },
        { id: 2, sentenceText: '02 How to describe?' },
        { id: 3, sentenceText: '03 Even the omniscient viewpoint quails.' },
        { id: 4, sentenceText: '04 * ' },
        { id: 5, sentenceText: '05 A singleton star, reddish and dim.' },
        { id: 6, sentenceText: '06 A ragtag of asteroids, and a single planet, more like a moon.' },
        { id: 7, sentenceText: '07 In this era the star hung near the galactic plane, just beyond the Beyond.' },
        { id: 8, sentenceText: '08 The structures on the surface were gone from normal view, pulverized into regolith across a span of aeons.' },
        { id: 9, sentenceText: '09 The treasure was far underground, beneath a network of passages, in a single room filled with black.' },
        { id: 10, sentenceText: '10 Information at the quantum density, undamaged.' },
        { id: 11, sentenceText: '11 Maybe five billion years had passed since the archive was lost to the nets.' },
        { id: 12, sentenceText: '12The curse of the mummy’s tomb, a comic image from mankind’s own prehistory, lost before time.' },
        { id: 13, sentenceText: '13 * ' },
        { id: 14, sentenceText: '14 They had laughed when they said it, laughed with joy at the treasure… and determined to be cautious just the same.' },
        { id: 15, sentenceText: '15 They would live here a year or five, the little company from Straum, the archaeologist programmers, their families and schools.' },
        { id: 16, sentenceText: '16 A year or five would be enough to handmake the protocols, to skim the top and identify the treasure’s origin in time and space, to learn a secret or two that would make Straumli Realm rich.' },
        { id: 17, sentenceText: '17 And when they were done, they would sell the location; perhaps build a network link (but chancier that  —  this was beyond the Beyond; who knew what Power might grab what they’d found).' },
        { id: 18, sentenceText: '18  * ' },
        { id: 19, sentenceText: '19 So now there was a tiny settlement on the surface, and they called it the High Lab.' },
        { id: 20, sentenceText: '20 It was really just humans playing with an old library.' },
        { id: 21, sentenceText: '21 It should be safe, using their own automation, clean and benign.' },
        { id: 22, sentenceText: '22 This library wasn’t a living creature, or even possessed of automation (which here might mean something more, far more, than human).' },
        { id: 23, sentenceText: '23 They would look and pick and choose, and be careful not to be burned…' },
        { id: 24, sentenceText: '24  * ' },
        { id: 25, sentenceText: '25 Humans starting fires and playing with the flames.' },
        { id: 26, sentenceText: '26 * ' },
        { id: 27, sentenceText: '27 The archive informed the automation.' },
        { id: 28, sentenceText: '28 Data structures were built, recipes followed.' },
        { id: 29, sentenceText: '29 A local network was built, faster than anything on Straum, but surely safe.' },
        { id: 30, sentenceText: '30 Nodes were added, modified by other recipes.' },
        { id: 31, sentenceText: '31 The archive was a friendly place, with hierarchies of translation keys that led them along.' },
        { id: 32, sentenceText: '32 Straum itself would be famous for this.' }
    ],
    rusSentences: [
        { id: 1, sentenceText: '01 Как объяснить?' },
        { id: 2, sentenceText: '02 Как описать?' },
        { id: 3, sentenceText: '03 Даже всезнание отказывает.' },
        { id: 4, sentenceText: '04  * ' },
        { id: 5, sentenceText: '05 Одиночная звезда, красноватая и тусклая.' },
        { id: 6, sentenceText: '06 Россыпь астероидов и единственная планета, больше похожая на луну.' },
        { id: 7, sentenceText: '07 В эту эпоху звезда повисла возле плоскости галактики, у самого Края.' },
        { id: 8, sentenceText: '08 Структуры поверхности давно потеряли нормальный вид, распылились в реголиты за несчитанные эры.' },
        { id: 9, sentenceText: '09 Клад был глубоко под землей, под сетью переходов, в залитой темнотой комнате.' },
        { id: 10, sentenceText: '10 Информация на квантовом уровне, повреждений нет.' },
        { id: 11, sentenceText: '11 Прошло, быть может, миллиардов пять лет, как этот архив ушел со всех сетей.' },
        { id: 12, sentenceText: '12 Проклятие фараона – комический образ из собственной истории человечества, давно забытый.' },
        { id: 13, sentenceText: '13 * ' },
        { id: 14, sentenceText: '14 Они смеялись при этих словах, смеялись от радости, найдя сокровище… и все же твердо решили действовать осторожно.' },
        { id: 15, sentenceText: '15 Им предстояло прожить тут от года до пяти, маленькой группе со Страума – археопрограммисты, их семьи и школа для детей.' },
        { id: 16, sentenceText: '16 От года до пяти, чтобы подобрать протоколы, снять сливки и выяснить источник клада в пространстве и времени, узнать один-другой секрет, который обогатит царство Страума.' },
        { id: 17, sentenceText: '17 А когда закончится работа, место можно будет продать, быть может, построить сетевую связь (но это вряд ли – место это за Краем, и кто знает, какая Сила может наложить лапу на эту находку).' },
        { id: 18, sentenceText: '18 * ' },
        { id: 19, sentenceText: '19 Так что сейчас тут был крошечный поселок, прозванный жителями Верхняя Лаборатория.' },
        { id: 20, sentenceText: '20 Ничего особенного – люди возились со старой библиотекой.' },
        { id: 21, sentenceText: '21 При имеющейся автоматике дело безопасное, чистое и простенькое.' },
        { id: 22, sentenceText: '22 Библиотека не была живым существом и даже не была автоматизирована (что в этих местах могло значить много больше, куда больше, чем быть человеком).' },
        { id: 23, sentenceText: '23 Люди собирались смотреть и выбирать и быть осторожными, чтобы не обжечься.' },
        { id: 24, sentenceText: '24  * ' },
        { id: 25, sentenceText: '25 Люди устраивают пожары и играют с пламенем.' },
        { id: 26, sentenceText: '26 * ' },
        { id: 27, sentenceText: '27 Архив проинформировал автоматику.' },
        { id: 28, sentenceText: '28 Построились структуры данных, стали выполняться рецепты.' },
        { id: 29, sentenceText: '29 Возникла локальная сеть, быстрее, чем в любом месте на Страуме, но с гарантией безопасности.' },
        { id: 30, sentenceText: '30 Добавлялись узлы, модифицируемые другими рецептами.' },
        { id: 31, sentenceText: '31 Архив был дружественным, иерархия ключей выстраивалась и вела исследователей.' },
        { id: 32, sentenceText: '32 Это открытие прославит сам Страум.' }
    ],
    readingSentenceNumber: 15,    
    sentencesOnPage: 20,
    sentencesOnPageTop: 10,
    sentencesOnPageBottom: 10
}

let lastSentenceNumber = initialState.engSentences.length;

const readAndTranslateReducer = (state = initialState, action) => {
    let newSentenceNumber = action.newSentenceNumber;
    switch (action.type) {
        case SCROLL_LINE_UP: {
            /* let newSentenceNumberMinus = readingSentenceNumber > 11 ? readingSentenceNumber - 1 : readingSentenceNumber; */
            let stateCopy = { ...state, readingSentenceNumber: newSentenceNumber - 1 };
            return stateCopy;
        }
        case SCROLL_LINE_DOWN: {
            /* let newSentenceNumberPlus = readingSentenceNumber < (lastSentenceNumber - 21) ? readingSentenceNumber + 1 : readingSentenceNumber; */
            let stateCopy = { ...state, readingSentenceNumber: newSentenceNumber + 1 };
            return stateCopy;
        }

        default:
            return state;
    }
}

export const scrollLineUp = (newSentenceNumber) => ({ type: SCROLL_LINE_UP, newSentenceNumber });
export const scrollLineDown = (newSentenceNumber) => ({ type: SCROLL_LINE_DOWN, newSentenceNumber });

export default readAndTranslateReducer;
