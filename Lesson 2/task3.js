/* 
    Задание 3:

    Отрывок из текста А.С Пушкин, Капитанская дочка был разбит на небольшие кусочки и помещен в массив. 
    Необходимо собрать этот текст из массива и придать ему первоначальный вид.

    Текст до разбивки на части:

    "В ту же ночь приехал я в Симбирск, где должен был пробыть сутки для закупки нужных вещей,
    что и было поручено Савельичу. Я остановился в трактире. Савельич с утра отправился по лавкам"

   итоговый текст должен быть собран из массива array и результат записать в переменную result
*/
const array = [
    'я в Симбирск,', //0
    'в трактире.', //1
    'с утра', //2
    'В ту же ночь', //3
    'Я остановился', //4
    'для закупки',  //5
    'что и было поручено Савельичу.', //6
    'приехал', //7
    'где должен был', //8
    'нужных вещей,', //9
    'отправился по лавкам', //10
    'пробыть сутки', //11
    'Савельич' //12
]
const space = ' ';
const result = array[3] + space + array[7] + array[0] + space + array[8] 
                + space + array[11] + space + array[5] + space + array[9] 
                + space + array[6] + space + array[4] + space + array[1] 
                + space + array[12] + space + array[2] + space + array[10];
console.log(result);