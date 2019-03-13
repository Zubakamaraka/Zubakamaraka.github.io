# Цели и задачи проекта
Основная задача создаваемой формы - это сбор информации о потенциальных клиентах страховой компании и реализация возможности заказа полиса автострахования через сайт.
# Инструменты для разработки проекта
При разработке проекта использовались следующие инструменты:
1) Axure RP - программное обеспечение для создания прототипв и спецификацие вебсайтов и прилоений. 
Именно спомощью этого приложения был создан прототип сайта  проекта.

2) NetBeans - свободная интегрированная среда разработки приложений на языках программирования.
Данная среда разработки использовалась для описания проекта с испльзованием синтаксиса языков HTML и JavaScript.

Для установки Axure RP необходимо перейти на сайт https://www.axure.com/ и нажать на кнопку "Download free trial" если вы хотите установить бесплатную пробную версию, для установки комерческой версии вам необходимо прейти по ссылке https://www.axure.com/buy после чего выбрать подходящий для вас пакет, оплатить и скачать комерческую версию.
Пакет Axure RP позволяет быстро и наглядно создать макет будущего сайта, после чего можно сгенерировать комплекс программ, которые будут отображать сайт и иммитировать его работу.
Недостатком этого способа создания программ проекта является то, что для отображения элементов сайта исползуется абсалютное позицианирование, т.е. нет возможности реализации динамических элементов на сайте, в связи с чем возникла необходимость "ручного" написания программ.

Для написания программ была выбрана среда азработки NetBeans. Для установки данной среды разработки необходимо перейти по ссылке https://netbeans.org/ и нажать клавишу "Download" на странице загузки выбрать подходящую для вас версию, после чего скачать её.
Для устаовки и корректной работы данного пакета может потребоваться установка пакета Java для разработчиков (JDK). 
Для его установки нужно перейти по ссылке https://www.oracle.com/technetwork/java/javase/downloads/index.html выбрать подходящую вам версию загрузить на компьютер и установить.
# Концепция и реализация проекта
В связи с ограничением по времени на реализацию проекта, было принято решение реализовать из исходного прототипа проекта только форму запроса данных необходимых для оформления полиса автострахования.
Форма реализована в одном файле **index.html** в  который интегрировано описание минимального набора стилей визуальных элементов.
Основная концепция формы- это табличный ввод данных в поля, которые сгруппированы в тематические блоки:
- Данные по автомобилю 
- Данные о страхователе 
- Данные о водителях
При оформлении полиса автострахования, его можно оформить без ограничений,т.е. не указывая данные о водителях.
Для реализации этой возможности в форме проекта была создана функция динамического сокрытия блоков ввода данных о водителях.
Кроме того, в форме реализована возможность добавления блоков ввода данных о 2-м,3-м,4-м и 5-м водителях.

# Работа динамической части формы обеспечивается функциями, написанными на JavaScript:
- **addDriver** функция, добавляющая блок ввода данных об очередном водителе. Добавление блока происходит благодаря изменению значения свойства display в стиле отображения соответствующего блока данных (присваивается значение 'block').
- **removeDriver** функция, удаляющая блок ввода данных о водителе. Удаление блока происходит благодаря изменению значения свойства display в стиле отображения соответствующего блока данных (присваивается значение 'none'). Следует отметить, что удалить можно только последний блок ввода данных о водителе в списке водителей
- **removeAllDrivers** функция установки признака оформления полиса автострахования без ограничений. Функция скрывает все блоки ввода данных о водителях. 
- **switchDrivers** функция переключает режим оформления полиса автострахования, устанавливая или снимая признак оформления полиса без ограничений. Для этого она использует либо вызов функции removeAllDrivers, либо вызов функции addDriver.
После ввода даннх, необходимых для оформления полиса, требуется нажать кнопку **Заказать полис**. При этом на экране будет показано всплывающее информационное окно, которое иммитирует запись введённой информации в базу данных.
