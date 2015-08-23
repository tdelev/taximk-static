(function () {
  'use strict';
  angular.module('taximk', ['ui.router', 'taximk.config', 'taximk.data']);

})();
(function () {
  'use strict';
  angular
    .module('taximk')
    .controller('Company', Company);

  function Company(taxi, place) {
    var vm = this;
    vm.taxi = taxi;
    vm.place = place;
  }
})();
(function () { 
 return angular.module('taximk.config', [])
.constant('version', {"number":"1.0.0","rev":"c91a62f"});

})();

(function () { 
 return angular.module('taximk.data', [])
.constant('places', {"version":1,"data":[{"id":15,"name":"Берово","slug":"berovo"},{"id":4,"name":"Битола","slug":"bitola"},{"id":16,"name":"Богданци","slug":"bogdanci"},{"id":24,"name":"Валандово","slug":"valandovo"},{"id":12,"name":"Велес","slug":"veles"},{"id":25,"name":"Виница","slug":"vinica"},{"id":8,"name":"Гевгелија","slug":"gevgelija"},{"id":23,"name":"Гостивар","slug":"gostivar"},{"id":7,"name":"Демир Капија","slug":"demir-kapija"},{"id":22,"name":"Кавадарци","slug":"kavadarci"},{"id":14,"name":"Кичево","slug":"kichevo"},{"id":6,"name":"Кочани","slug":"kochani"},{"id":3,"name":"Куманово","slug":"kumanovo"},{"id":18,"name":"Неготино","slug":"negotino"},{"id":2,"name":"Охрид","slug":"ohrid"},{"id":20,"name":"Пехчево","slug":"pehchevo"},{"id":9,"name":"Прилеп","slug":"prilep"},{"id":17,"name":"Пробиштип","slug":"probishtip"},{"id":13,"name":"Ресен","slug":"resen"},{"id":19,"name":"Свети Николе","slug":"sveti-nikole"},{"id":1,"name":"Скопје","slug":"skopje"},{"id":27,"name":"Струга","slug":"struga"},{"id":11,"name":"Струмица","slug":"strumica"},{"id":5,"name":"Тетово","slug":"tetovo"},{"id":21,"name":"Ќустендил (Бугарија)","slug":"kjustendil-(bugarija)"},{"id":10,"name":"Штип","slug":"shtip"}]})
.constant('taxi', {"version":1,"data":[{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"ВИП","description":null,"address":"бул.АСНОМ 72/1","phone":"070 219651","phone2":"","slug":"vip"},{"place":{"id":17,"name":"Пробиштип","slug":"probishtip"},"name":"Сателит","description":null,"address":"Вељко Влаховиќ 3/13","phone":"032 480900","phone2":"032 482808","slug":"satelit"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Валентино Такси","description":null,"address":"Христо Батанџиев 72-1/12 (Социјалистичка зора)","phone":"070 254231","phone2":"071 211759","slug":"valentino-taksi"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Вардар 15-165","description":null,"address":"бул.8-ми Септември 8","phone":"02 15165","phone2":"","slug":"vardar-15-165"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Вардар 15-195","description":null,"address":"Франклин Рузвелт б.б.","phone":"02 15195","phone2":"072 302222","slug":"vardar-15-195"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Водно-15-191","description":null,"address":"Душан Тасковиќ б.б.","phone":"02 3230775","phone2":"02 3215003","slug":"vodno-15-191"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Волт-15-174","description":null,"address":"Фан Ноли 137 (Вергино)","phone":"02 2628628","phone2":"02 2630630","slug":"volt-15-174"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Глобал","description":null,"address":"бул.Крсте Мисирков 14-1/1","phone":"02 15180","phone2":"070 515180","slug":"global"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Де Лукс-15-187","description":null,"address":"Мите Богоевски 4/1","phone":"02 2431500","phone2":"071 228822","slug":"de-luks-15-187"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Експрес 15196","description":null,"address":"Козле 88/2 лок.7","phone":"02 3086286","phone2":"02 3086286","slug":"ekspres-15196"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Елита унион 15-164","description":null,"address":"Тале Христов 1/5","phone":"02 2626918","phone2":"","slug":"elita-union-15-164"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Елитте 15-169","description":null,"address":"бул.АСНОМ 56","phone":"02 15169","phone2":"071 210900","slug":"elitte-15-169"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Еуро Такси 15-184","description":null,"address":"ТЦ Живко Брајковски лок.46 лам.3","phone":"02 2613111","phone2":"071 215184","slug":"euro-taksi-15-184"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Јелоу 15-185","description":null,"address":"Никола Парапунов 3-а-1/6","phone":"02 15185","phone2":"3067367","slug":"jelou-15-185"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Класик 15-167","description":null,"address":"Ѓорче Петров 45","phone":"02 2032265","phone2":"02 2032253","slug":"klasik-15-167"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Коммак Комерц-15-193","description":null,"address":"Душан Тасковиќ 24","phone":"02 2612277","phone2":"02 2612277","slug":"kommak-komerc-15-193"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Лотус Транспорт","description":null,"address":"Методија Андонов Ченто 13 (Антон Попов)","phone":"02 15157","phone2":"02 3122174","slug":"lotus-transport"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"ЛВД","description":null,"address":"Руѓер Бошковиќ 8","phone":"070 939629","phone2":"","slug":"lvd"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Наше Такси 15-152","description":null,"address":"Перо Наков б.б., п.фах 18","phone":"02 15152","phone2":"","slug":"nashe-taksi-15-152"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Палас 15-166","description":null,"address":"Козле 88-б/1-4/6","phone":"02 15166","phone2":"02 3086200","slug":"palas-15-166"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Панорама 15-199","description":null,"address":"бул.В.С.Бато 11 лок.3","phone":"02 15199","phone2":"071 315199","slug":"panorama-15-199"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Парк","description":null,"address":"Коста Новаковиќ 50/4","phone":"02 15158","phone2":"","slug":"park"},{"place":{"id":18,"name":"Неготино","slug":"negotino"},"name":"Браќа Петридови","description":null,"address":"Вељко Влаховиќ 18","phone":"043 365365","phone2":"075 365365","slug":"brakja-petridovi"},{"place":{"id":18,"name":"Неготино","slug":"negotino"},"name":"ТП Цило","description":null,"address":"Вељко Влаховиќ 18","phone":"043 365365","phone2":"","slug":"tp-cilo"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Плава лагуна 15-192","description":null,"address":"Петар Поп Арсов 17 лок.12","phone":"02 15192","phone2":"","slug":"plava-laguna-15-192"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Потрчко","description":null,"address":"Лазар Димитров 29-б","phone":"02 5211416","phone2":"02 5211416","slug":"potrchko"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Примус","description":null,"address":"Локов 3-1/3","phone":"02 2722777","phone2":"070 216765","slug":"primus"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Пролет 15-160","description":null,"address":"Јани Лукровски 8-1/3","phone":"02 15160","phone2":"","slug":"prolet-15-160"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Пулсар 15-197","description":null,"address":"бул.К.Ј.Питу 22","phone":"02 15197","phone2":"","slug":"pulsar-15-197"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Пулстарс 15-177","description":null,"address":"Васил Ѓоргов 29/1","phone":"02 3134499","phone2":"","slug":"pulstars-15-177"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Рива 15-161","description":null,"address":"Скупи б.б.","phone":"02 15161","phone2":"","slug":"riva-15-161"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Ројал","description":null,"address":"Кленоец 61-б-1/1","phone":"02 3080938","phone2":"02 3080938","slug":"rojal"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Сики Ексклузив Транспорт","description":null,"address":"Локов 3-1/3","phone":"070 216765","phone2":"02 2722777","slug":"siki-ekskluziv-transport"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Сити такси-са","description":null,"address":"Христијан Тодоровски Карпош 1","phone":"02 15181","phone2":"071 373383","slug":"siti-taksi-sa"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Сонце","description":null,"address":"Партение Зографски 77-а","phone":"02 15100","phone2":"072 252525","slug":"sonce"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Сребрена ѕвезда 15-171","description":null,"address":"бул.В.С.Бато 8-в","phone":"02 15171","phone2":"","slug":"srebrena-dzvezda-15-171"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Старо Водно 15-188","description":null,"address":"Георги Димитров лок.8 лам.2","phone":"02 15188","phone2":"070 309188","slug":"staro-vodno-15-188"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Такси Еуроком 151-62","description":null,"address":"Георги Попхристов б.б.","phone":"072 215162","phone2":"078 215162","slug":"taksi-eurokom-151-62"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Такси Илинден","description":null,"address":"нас.Илинден б.б.","phone":"02 15055","phone2":"072 245734","slug":"taksi-ilinden"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Такси ИН","description":null,"address":"Кеј 13-ти Ноември 28","phone":"02 15551","phone2":"078 215551","slug":"taksi-in"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Тахо 15-198","description":null,"address":"Георги Димитров б.б.","phone":"02 15198","phone2":"071 315179","slug":"taho-15-198"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Теникс 15-194","description":null,"address":"Ѓорче Петров 71-1/2","phone":"02 15194","phone2":"071 209194","slug":"teniks-15-194"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Трансфер Сервис","description":null,"address":"Волгоградска 1/17","phone":"070 217123","phone2":"","slug":"transfer-servis"},{"place":{"id":2,"name":"Охрид","slug":"ohrid"},"name":"Актуел","description":null,"address":"Шар Планина 13","phone":"046 271290","phone2":"046 1583","slug":"aktuel"},{"place":{"id":2,"name":"Охрид","slug":"ohrid"},"name":"Бел Мерцедес 15-80","description":null,"address":"Париска Комуна 15","phone":"046 263807","phone2":"","slug":"bel-mercedes-15-80"},{"place":{"id":2,"name":"Охрид","slug":"ohrid"},"name":"Бос","description":null,"address":"Гоце Делчев 233","phone":"046 1591","phone2":"046 270942","slug":"bos"},{"place":{"id":1,"name":"Скопје","slug":"skopje"},"name":"Такси Насковиќ Марјан","description":"Такси сервис со луксузно возило","address":"Мите Богоевски 12/13","phone":"070 591032","phone2":"","slug":"taksi-naskovikj-marjan"},{"place":{"id":2,"name":"Охрид","slug":"ohrid"},"name":"Даниго Веб","description":null,"address":"Мирче Ацев 33-a","phone":"078 222397","phone2":"","slug":"danigo-veb"},{"place":{"id":2,"name":"Охрид","slug":"ohrid"},"name":"Делукс 1588","description":null,"address":"Клаудија втора б.б.","phone":"046 266088","phone2":"046 264097","slug":"deluks-1588"},{"place":{"id":2,"name":"Охрид","slug":"ohrid"},"name":"Мерцедес 1592","description":null,"address":"Ѓорче Петров 7","phone":"046 269192","phone2":"046 256956","slug":"mercedes-1592"},{"place":{"id":2,"name":"Охрид","slug":"ohrid"},"name":"Моби дик 15-95","description":null,"address":"7-ми Ноември 254","phone":"046 231800","phone2":"046 231800","slug":"mobi-dik-15-95"},{"place":{"id":2,"name":"Охрид","slug":"ohrid"},"name":"Нова 13-000","description":null,"address":"15-ти Корпус б.б.","phone":"076 404040","phone2":"","slug":"nova-13-000"},{"place":{"id":2,"name":"Охрид","slug":"ohrid"},"name":"Сузуки мт-1599","description":null,"address":"бул.Македонски Просветители лок.15","phone":"046 266237","phone2":"046 266237","slug":"suzuki-mt-1599"},{"place":{"id":2,"name":"Охрид","slug":"ohrid"},"name":"Такси Тренд","description":null,"address":"бул.Македонски Просветители б.б. лок.15","phone":"046 13444","phone2":"046 266237","slug":"taksi-trend"},{"place":{"id":3,"name":"Куманово","slug":"kumanovo"},"name":"Ало-такси","description":null,"address":"ул.4 бр.28","phone":"031 1591","phone2":"078 754777","slug":"alo-taksi"},{"place":{"id":3,"name":"Куманово","slug":"kumanovo"},"name":"Делукс 15-82","description":null,"address":"ул.500 бр.55","phone":"031 431432","phone2":"031 431432","slug":"deluks-15-82"},{"place":{"id":3,"name":"Куманово","slug":"kumanovo"},"name":"Зоне-компани","description":null,"address":"бул.3-та Македонска Ударна Бригада 144","phone":"031 414288","phone2":"031 414288","slug":"zone-kompani"},{"place":{"id":3,"name":"Куманово","slug":"kumanovo"},"name":"Принц 15-84","description":null,"address":"ул.103 бр.1, Рајкова куќа","phone":"031 445790","phone2":"","slug":"princ-15-84"},{"place":{"id":3,"name":"Куманово","slug":"kumanovo"},"name":"Радевски-компанија","description":null,"address":"Мирче Ацев 38","phone":"031 415160","phone2":"031 414544","slug":"radevski-kompanija"},{"place":{"id":3,"name":"Куманово","slug":"kumanovo"},"name":"Спид","description":null,"address":"Косовски бригади 5","phone":"031 1596","phone2":"031 438190","slug":"spid"},{"place":{"id":3,"name":"Куманово","slug":"kumanovo"},"name":"Стара Бима","description":null,"address":"Есперанто 14-а","phone":"031 414370","phone2":"031 1580","slug":"stara-bima"},{"place":{"id":4,"name":"Битола","slug":"bitola"},"name":"Алфа 15-95","description":null,"address":"Кланица 7/10","phone":"047 1595","phone2":"","slug":"alfa-15-95"},{"place":{"id":4,"name":"Битола","slug":"bitola"},"name":"Монгол 15-92","description":null,"address":"Краварски пат б.б.","phone":"047 1592","phone2":"072 252092","slug":"mongol-15-92"},{"place":{"id":4,"name":"Битола","slug":"bitola"},"name":"Пелси 15-93","description":null,"address":"Кавала 12","phone":"047 236749","phone2":"075 311593","slug":"pelsi-15-93"},{"place":{"id":4,"name":"Битола","slug":"bitola"},"name":"Тамара 15-91","description":null,"address":"Јорго Костовски 14","phone":"075 451591","phone2":"078 261591","slug":"tamara-15-91"},{"place":{"id":4,"name":"Битола","slug":"bitola"},"name":"Теа 15-54","description":null,"address":"нас.Кланица 6/2","phone":"047 1554","phone2":"072 261554","slug":"tea-15-54"},{"place":{"id":4,"name":"Битола","slug":"bitola"},"name":"Фаворит 15-91","description":null,"address":"Младинска 201","phone":"047 1591","phone2":"070 351456","slug":"favorit-15-91"},{"place":{"id":4,"name":"Битола","slug":"bitola"},"name":"Цагер 15-86","description":null,"address":"Цар Самоил 75","phone":"047 236735","phone2":"047 202621","slug":"cager-15-86"},{"place":{"id":5,"name":"Тетово","slug":"tetovo"},"name":"Арбекс-15-78","description":null,"address":"Дервиш Цара 28","phone":"044 332116","phone2":"070 256589","slug":"arbeks-15-78"},{"place":{"id":5,"name":"Тетово","slug":"tetovo"},"name":"Бени","description":null,"address":"Киро Ристоски-Дрнц 33","phone":"044 1575","phone2":"044 330014","slug":"beni"},{"place":{"id":5,"name":"Тетово","slug":"tetovo"},"name":"Бране-компани 15-77","description":null,"address":"ул.151 бр.3","phone":"044 340626","phone2":"","slug":"brane-kompani-15-77"},{"place":{"id":5,"name":"Тетово","slug":"tetovo"},"name":"Ват Арбекс такси","description":null,"address":"Дервиш Цара 28","phone":"044 1578","phone2":"071 319446","slug":"vat-arbeks-taksi"},{"place":{"id":5,"name":"Тетово","slug":"tetovo"},"name":"Гаги комерц","description":null,"address":"Ван Вардарска 14","phone":"044 1599","phone2":"044 344394","slug":"gagi-komerc"},{"place":{"id":5,"name":"Тетово","slug":"tetovo"},"name":"Зоки комерц","description":null,"address":"В.С.Бато б.б","phone":"044 1591","phone2":"044 331767","slug":"zoki-komerc"},{"place":{"id":5,"name":"Тетово","slug":"tetovo"},"name":"Краљ","description":null,"address":"Караорман 30","phone":"044 1570","phone2":"044 331289","slug":"kralj"},{"place":{"id":5,"name":"Тетово","slug":"tetovo"},"name":"Латиф-комерц","description":null,"address":"с.Слатино","phone":"070 240086","phone2":"","slug":"latif-komerc"},{"place":{"id":5,"name":"Тетово","slug":"tetovo"},"name":"Флорида","description":null,"address":"Дервиш Цара 28","phone":"070 256589","phone2":"044 341477","slug":"florida"},{"place":{"id":5,"name":"Тетово","slug":"tetovo"},"name":"Хак 15-96","description":null,"address":"Илинденска 115","phone":"044 1596","phone2":"044 330017","slug":"hak-15-96"},{"place":{"id":6,"name":"Кочани","slug":"kochani"},"name":"Асови М&М","description":null,"address":"Павлина Вељанова 26","phone":"033 277659","phone2":"","slug":"asovi-m&m"},{"place":{"id":6,"name":"Кочани","slug":"kochani"},"name":"Буба мара","description":null,"address":"Ленинова б.б.","phone":"033 1588","phone2":"033 274985","slug":"buba-mara"},{"place":{"id":6,"name":"Кочани","slug":"kochani"},"name":"Изида 15-95","description":null,"address":"с.Оризари","phone":"033 274988","phone2":"078 341595","slug":"izida-15-95"},{"place":{"id":6,"name":"Кочани","slug":"kochani"},"name":"Уникат 15-92","description":null,"address":"Рајко Жинзифов 1","phone":"033 271270","phone2":"033 274128","slug":"unikat-15-92"},{"place":{"id":7,"name":"Демир Капија","slug":"demir-kapija"},"name":"Астор","description":null,"address":"Партизанска 9","phone":"043 366252","phone2":"070 637535","slug":"astor"},{"place":{"id":8,"name":"Гевгелија","slug":"gevgelija"},"name":"Ас 15-35","description":null,"address":"11-ти Октомври б.б.","phone":"070 361535","phone2":"078 361535","slug":"as-15-35"},{"place":{"id":8,"name":"Гевгелија","slug":"gevgelija"},"name":"М.Ј. Компани","description":null,"address":"11-ти Октомври 6-a","phone":"034 215888","phone2":"","slug":"m.j.-kompani"},{"place":{"id":8,"name":"Гевгелија","slug":"gevgelija"},"name":"Хит 15-48","description":null,"address":"Деко Ковачев 17","phone":"034 611555","phone2":"","slug":"hit-15-48"},{"place":{"id":9,"name":"Прилеп","slug":"prilep"},"name":"Ат-Ива 15-81","description":null,"address":"Александар Македонски 103","phone":"048 428033","phone2":"070 308998","slug":"at-iva-15-81"},{"place":{"id":9,"name":"Прилеп","slug":"prilep"},"name":"Елен","description":null,"address":"Јоска Јорданоски 76/6","phone":"048 1571","phone2":"048 437701","slug":"elen"},{"place":{"id":9,"name":"Прилеп","slug":"prilep"},"name":"Милениум 15-73","description":null,"address":"Александар Македонски 124","phone":"048 416218","phone2":"048 416219","slug":"milenium-15-73"},{"place":{"id":9,"name":"Прилеп","slug":"prilep"},"name":"Палас 1575","description":null,"address":"Пенка Котеска 89","phone":"048 1575","phone2":"048 422989","slug":"palas-1575"},{"place":{"id":9,"name":"Прилеп","slug":"prilep"},"name":"Пет 15-55","description":null,"address":"Тризла 48","phone":"048 420460","phone2":"048 424430","slug":"pet-15-55"},{"place":{"id":9,"name":"Прилеп","slug":"prilep"},"name":"Роман","description":null,"address":"Илија Василевски 12","phone":"048 430001","phone2":"070 259499","slug":"roman"},{"place":{"id":9,"name":"Прилеп","slug":"prilep"},"name":"Роман 15-81","description":null,"address":"Нил Армстронг 12","phone":"070 349191","phone2":"048 415679","slug":"roman-15-81"},{"place":{"id":10,"name":"Штип","slug":"shtip"},"name":"Бако 15-97","description":null,"address":"Сутјеска б.б.","phone":"032 381597","phone2":"072 311597","slug":"bako-15-97"},{"place":{"id":10,"name":"Штип","slug":"shtip"},"name":"Биг смајли","description":null,"address":"Борис Крајгер б.б.","phone":"032 1592","phone2":"","slug":"big-smajli"},{"place":{"id":10,"name":"Штип","slug":"shtip"},"name":"Де лукс 15-60","description":null,"address":"Нобелова 3","phone":"032 1560","phone2":"032 392560","slug":"de-luks-15-60"},{"place":{"id":10,"name":"Штип","slug":"shtip"},"name":"Ла коста 15-77","description":null,"address":"Загребска 9","phone":"032 1577","phone2":"032 609277","slug":"la-kosta-15-77"},{"place":{"id":10,"name":"Штип","slug":"shtip"},"name":"Ортакси 15-88","description":null,"address":"Васил Доганджиски 57","phone":"032 1588","phone2":"","slug":"ortaksi-15-88"},{"place":{"id":11,"name":"Струмица","slug":"strumica"},"name":"Бамби дримс 2","description":null,"address":"Младинска 201","phone":"034 1591","phone2":"070 218591","slug":"bambi-drims-2"},{"place":{"id":11,"name":"Струмица","slug":"strumica"},"name":"Блек-шмек 1566","description":null,"address":"Братство Единство 36","phone":"034 347175","phone2":"070 310660","slug":"blek-shmek-1566"},{"place":{"id":11,"name":"Струмица","slug":"strumica"},"name":"Екстра-1598","description":null,"address":"Маршал Тито 172","phone":"034 1598","phone2":"078 291598","slug":"ekstra-1598"},{"place":{"id":10,"name":"Штип","slug":"shtip"},"name":"Ново такси","description":"8-ми Ноември Булевар ЈНА до градинка","address":"бул.ЈНА 26-а лок.4","phone":"032 1599","phone2":"","slug":"novo-taksi"},{"place":{"id":10,"name":"Штип","slug":"shtip"},"name":"Нивито 15-82","description":"До полицијата","address":"бул.ЈНА б.б.","phone":"032 1582","phone2":"","slug":"nivito-15-82"},{"place":{"id":10,"name":"Штип","slug":"shtip"},"name":"Див Сеат","description":"Сењак","address":"Сајбие Демир б.б.","phone":"032 1565","phone2":"","slug":"div-seat"},{"place":{"id":9,"name":"Прилеп","slug":"prilep"},"name":"Такси-Нова 15-78","description":"во близина на биро за вработување","address":"Егејска 58","phone":"048 1578","phone2":"","slug":"taksi-nova-15-78"},{"place":{"id":9,"name":"Прилеп","slug":"prilep"},"name":"Такси Лион 15-77","description":null,"address":"Ладо Лапецот 19","phone":"048 412528","phone2":"","slug":"taksi-lion-15-77"},{"place":{"id":9,"name":"Прилеп","slug":"prilep"},"name":"Палас 15-75","description":"на рид","address":"Пенка Котеска 89","phone":"048 422989","phone2":"","slug":"palas-15-75"},{"place":{"id":9,"name":"Прилеп","slug":"prilep"},"name":"Нова 15-78","description":null,"address":"Егејска 58","phone":"048 428474","phone2":"","slug":"nova-15-78"},{"place":{"id":9,"name":"Прилеп","slug":"prilep"},"name":"Мише Шпед","description":null,"address":"Мирче Ацев 99","phone":"076 296030","phone2":"","slug":"mishe-shped"},{"place":{"id":9,"name":"Прилеп","slug":"prilep"},"name":"Лион 15-77","description":null,"address":"Ладо Лапецот 19","phone":"048 412528","phone2":"","slug":"lion-15-77"},{"place":{"id":9,"name":"Прилеп","slug":"prilep"},"name":"Евро Такси Компани 15-93","description":"зграда Табана","address":"Самоилова 13-4/17","phone":"048 401222","phone2":"","slug":"evro-taksi-kompani-15-93"},{"place":{"id":9,"name":"Прилеп","slug":"prilep"},"name":"Де-ни Такси","description":null,"address":"Александар Македонски 160","phone":"048 419195","phone2":"","slug":"de-ni-taksi"},{"place":{"id":3,"name":"Куманово","slug":"kumanovo"},"name":"Ндерими","description":null,"address":"Поток Серава 71","phone":"031 414121","phone2":"","slug":"nderimi"},{"place":{"id":4,"name":"Битола","slug":"bitola"},"name":"Гонзалес-15-77","description":null,"address":"Јанко Палигора б.б.","phone":"070 207576","phone2":"","slug":"gonzales-15-77"},{"place":{"id":5,"name":"Тетово","slug":"tetovo"},"name":"Коки Такси","description":"Стара библиотека","address":"Маршал Тито 134","phone":"044 1590","phone2":"","slug":"koki-taksi"},{"place":{"id":11,"name":"Струмица","slug":"strumica"},"name":"Есперо 15-51","description":null,"address":"Маршал Тито б.б., Ново Село","phone":"034 355185","phone2":"","slug":"espero-15-51"},{"place":{"id":11,"name":"Струмица","slug":"strumica"},"name":"Љашо","description":null,"address":"с.Ангелци б.б.","phone":"034 353015","phone2":"034 329008","slug":"ljasho"},{"place":{"id":11,"name":"Струмица","slug":"strumica"},"name":"Радио такси 1588","description":null,"address":"11-ти Октомври 17/а","phone":"034 1588","phone2":"070 253250","slug":"radio-taksi-1588"},{"place":{"id":11,"name":"Струмица","slug":"strumica"},"name":"Радио Такси 15-60","description":null,"address":"Маршал Тито 161","phone":"034 1560","phone2":"070 358444","slug":"radio-taksi-15-60"},{"place":{"id":12,"name":"Велес","slug":"veles"},"name":"Бамби дрим 15-91","description":null,"address":"Благој Ѓорев б.б.","phone":"043 222291","phone2":"078 769352","slug":"bambi-drim-15-91"},{"place":{"id":12,"name":"Велес","slug":"veles"},"name":"Денс","description":null,"address":"Благој Ѓорев 13","phone":"043 222188","phone2":"043 221815","slug":"dens"},{"place":{"id":12,"name":"Велес","slug":"veles"},"name":"Ирена","description":null,"address":"Димко Најдов 60","phone":"043 1590","phone2":"075 222190","slug":"irena"},{"place":{"id":12,"name":"Велес","slug":"veles"},"name":"Мартин Травел","description":null,"address":"Борис Трајковски 18 (Ленинова)","phone":"043 222255","phone2":"043 212116","slug":"martin-travel"},{"place":{"id":12,"name":"Велес","slug":"veles"},"name":"Пан такси 15-92","description":null,"address":"Борис Трајковски 18 (Ленинова)","phone":"043 222192","phone2":"043 212116","slug":"pan-taksi-15-92"},{"place":{"id":12,"name":"Велес","slug":"veles"},"name":"Такси Здружение 1593","description":null,"address":"Тодор Јанев 30-а","phone":"043 222171","phone2":"043 211193","slug":"taksi-zdruzhenie-1593"},{"place":{"id":12,"name":"Велес","slug":"veles"},"name":"Такси Нова 1595","description":null,"address":"Благој Ѓорев 104-а","phone":"043 222170","phone2":"078 251595","slug":"taksi-nova-1595"},{"place":{"id":13,"name":"Ресен","slug":"resen"},"name":"Бејран-1516","description":null,"address":"Мите Богоевски б.б.","phone":"047 451616","phone2":"","slug":"bejran-1516"},{"place":{"id":13,"name":"Ресен","slug":"resen"},"name":"Конзул 15-14","description":null,"address":"с.Царев Двор","phone":"047 489501","phone2":"","slug":"konzul-15-14"},{"place":{"id":14,"name":"Кичево","slug":"kichevo"},"name":"Бела","description":null,"address":"Тане Цалески 11","phone":"045 1593","phone2":"045 221033","slug":"bela"},{"place":{"id":14,"name":"Кичево","slug":"kichevo"},"name":"В.Ангел","description":null,"address":"Мито Јовески 22","phone":"045 223119","phone2":"","slug":"v.angel"},{"place":{"id":14,"name":"Кичево","slug":"kichevo"},"name":"Пане","description":null,"address":"Солунска б.б.","phone":"070 533350","phone2":"","slug":"pane"},{"place":{"id":14,"name":"Кичево","slug":"kichevo"},"name":"Срна","description":null,"address":"4-ти Јули 184/4","phone":"045 221484","phone2":"","slug":"srna"},{"place":{"id":15,"name":"Берово","slug":"berovo"},"name":"Блато","description":null,"address":"Брдославица б.б., нас. Блато","phone":"033 470025","phone2":"033 471666","slug":"blato"},{"place":{"id":15,"name":"Берово","slug":"berovo"},"name":"Централ 15-30","description":null,"address":"Илинденска 2","phone":"033 1530","phone2":"033 470373","slug":"central-15-30"},{"place":{"id":16,"name":"Богданци","slug":"bogdanci"},"name":"Боби","description":null,"address":"Мирчо Џочков 3","phone":"034 223333","phone2":"077 577429","slug":"bobi"},{"place":{"id":16,"name":"Богданци","slug":"bogdanci"},"name":"Гоки","description":null,"address":"Маршал Тито б.б.","phone":"034 223355","phone2":"070 925922","slug":"goki"},{"place":{"id":16,"name":"Богданци","slug":"bogdanci"},"name":"Мил зоран","description":null,"address":"Егејска 37","phone":"034 222522","phone2":"078 747244","slug":"mil-zoran"},{"place":{"id":17,"name":"Пробиштип","slug":"probishtip"},"name":"Бо-ком 15-52","description":null,"address":"28-ми Август 17","phone":"032 481996","phone2":"","slug":"bo-kom-15-52"},{"place":{"id":17,"name":"Пробиштип","slug":"probishtip"},"name":"Д`гна","description":null,"address":"9-ти Мај 4","phone":"032 480880","phone2":"032 480880","slug":"d`gna"},{"place":{"id":19,"name":"Свети Николе","slug":"sveti-nikole"},"name":"Буба Мара 15-30","description":null,"address":"Крсте Мисирков 26","phone":"078 737576","phone2":"078 451530","slug":"buba-mara-15-30"},{"place":{"id":20,"name":"Пехчево","slug":"pehchevo"},"name":"Буби","description":null,"address":"Борис Кидрич 42","phone":"033 441496","phone2":"","slug":"bubi"},{"place":{"id":22,"name":"Кавадарци","slug":"kavadarci"},"name":"Веднаш","description":null,"address":"1-ви Мај 16","phone":"043 419999","phone2":"043 416001","slug":"vednash"},{"place":{"id":22,"name":"Кавадарци","slug":"kavadarci"},"name":"Викни","description":null,"address":"27-ми Март 69","phone":"071 234222","phone2":"078 445554","slug":"vikni"},{"place":{"id":22,"name":"Кавадарци","slug":"kavadarci"},"name":"Виножито Бис","description":null,"address":"Бел Камен 16","phone":"043 410564","phone2":"070 219191","slug":"vinozhito-bis"},{"place":{"id":22,"name":"Кавадарци","slug":"kavadarci"},"name":"Виножито ВБ","description":null,"address":"Мито Хаџивасилев 91","phone":"043 415100","phone2":"075 320100","slug":"vinozhito-vb"},{"place":{"id":22,"name":"Кавадарци","slug":"kavadarci"},"name":"Екстра","description":null,"address":"Сремски Фронт 2","phone":"043 400300","phone2":"043 400301","slug":"ekstra"},{"place":{"id":22,"name":"Кавадарци","slug":"kavadarci"},"name":"Екстрабус","description":null,"address":"Илинденска 115","phone":"043 420020","phone2":"043 420020","slug":"ekstrabus"},{"place":{"id":22,"name":"Кавадарци","slug":"kavadarci"},"name":"Кам смарк","description":null,"address":"бул.Македонија 3-ѓ","phone":"043 1568","phone2":"070 219555","slug":"kam-smark"},{"place":{"id":22,"name":"Кавадарци","slug":"kavadarci"},"name":"Комета","description":null,"address":"Моша Пијаде 6-3/4","phone":"043 418555","phone2":"","slug":"kometa"},{"place":{"id":22,"name":"Кавадарци","slug":"kavadarci"},"name":"Лаки 1577","description":null,"address":"Бошавска 10","phone":"043 412456","phone2":"","slug":"laki-1577"},{"place":{"id":22,"name":"Кавадарци","slug":"kavadarci"},"name":"Петкови Експрес","description":null,"address":"Диме Чекоров 15","phone":"075 431059","phone2":"071 354111","slug":"petkovi-ekspres"},{"place":{"id":22,"name":"Кавадарци","slug":"kavadarci"},"name":"Такси Буги","description":null,"address":"Мито Хаџивасилев б.б.","phone":"043 13555","phone2":"071 299955","slug":"taksi-bugi"},{"place":{"id":23,"name":"Гостивар","slug":"gostivar"},"name":"Голди Експрес","description":null,"address":"Никола Парапунов 39","phone":"042 1591","phone2":"075 215215","slug":"goldi-ekspres"},{"place":{"id":23,"name":"Гостивар","slug":"gostivar"},"name":"Далас","description":null,"address":"ЈНА 231","phone":"042 1581","phone2":"042 222110","slug":"dalas"},{"place":{"id":23,"name":"Гостивар","slug":"gostivar"},"name":"Пинк","description":null,"address":"Никола Парапунов 6","phone":"042 1508","phone2":"078 286019","slug":"pink"},{"place":{"id":23,"name":"Гостивар","slug":"gostivar"},"name":"Пони експрес","description":null,"address":"18-ти Ноември 8","phone":"042 1582","phone2":"042 212473","slug":"poni-ekspres"},{"place":{"id":23,"name":"Гостивар","slug":"gostivar"},"name":"Рио","description":null,"address":"Светозар Пеповски 8","phone":"042 1595","phone2":"042 222847","slug":"rio"},{"place":{"id":23,"name":"Гостивар","slug":"gostivar"},"name":"Такси Гранде","description":null,"address":"Гече Гаврилоски 18","phone":"042 1585","phone2":"078 351585","slug":"taksi-grande"},{"place":{"id":23,"name":"Гостивар","slug":"gostivar"},"name":"Такси Еуро","description":null,"address":"Младен Симоновски 26","phone":"042 1589","phone2":"071 638528","slug":"taksi-euro"},{"place":{"id":23,"name":"Гостивар","slug":"gostivar"},"name":"Такси 77","description":null,"address":"Тоде Богданоски 1","phone":"042 1577","phone2":"075 488266","slug":"taksi-77"},{"place":{"id":24,"name":"Валандово","slug":"valandovo"},"name":"Дане","description":null,"address":"Маршал Тито 15","phone":"034 381464","phone2":"","slug":"dane"},{"place":{"id":25,"name":"Виница","slug":"vinica"},"name":"Делта-1545","description":null,"address":"Григор Прличев 26","phone":"033 360195","phone2":"","slug":"delta-1545"},{"place":{"id":25,"name":"Виница","slug":"vinica"},"name":"Пјер","description":null,"address":"Климент Охридски 8","phone":"070 781313","phone2":"","slug":"pjer"},{"place":{"id":27,"name":"Струга","slug":"struga"},"name":"Марјан 15-65","description":null,"address":"ЈНА 2/1","phone":"046 780185","phone2":"070 859333","slug":"marjan-15-65"},{"place":{"id":27,"name":"Струга","slug":"struga"},"name":"Оскар","description":null,"address":"Маршал Тито 117","phone":"046 1578","phone2":"070 262070","slug":"oskar"},{"place":{"id":21,"name":"Ќустендил (Бугарија)","slug":"kjustendil-(bugarija)"},"name":"Валентин Андонов","description":"Такси за Софија","address":"П.Славејков 10","phone":"359 887306241","phone2":"359 7851796","slug":"valentin-andonov"},{"place":{"id":2,"name":"Охрид","slug":"ohrid"},"name":"Камен Джонев","description":"Такси за Софија","address":"Ќустендил","phone":"359 888700381","phone2":"","slug":"kamen-dzhonev"},{"place":{"id":12,"name":"Велес","slug":"veles"},"name":"Перка 15-94","description":null,"address":"Ордан Џинот 40","phone":"043 222194","phone2":"","slug":"perka-15-94"},{"place":{"id":12,"name":"Велес","slug":"veles"},"name":"Бинго","description":"Над Трговскиот","address":"Партение Зографски 4/33 (Првомајска)","phone":"043 222183","phone2":"","slug":"bingo"},{"place":{"id":11,"name":"Струмица","slug":"strumica"},"name":"Такси Нима","description":"центар","address":"с.Мокриево","phone":"034 352120","phone2":"","slug":"taksi-nima"},{"place":{"id":11,"name":"Струмица","slug":"strumica"},"name":"Радио Такси 15-90","description":"спроти кино Балкан","address":"Братство Единство 36","phone":"034 1590","phone2":"","slug":"radio-taksi-15-90"},{"place":{"id":11,"name":"Струмица","slug":"strumica"},"name":"Радио такси 15-52","description":"центар","address":"Маршал Тито 38","phone":"034 355112","phone2":"","slug":"radio-taksi-15-52"},{"place":{"id":11,"name":"Струмица","slug":"strumica"},"name":"Радио такси Стил 15-85","description":"во близина на нова болница","address":"Братство Единство 51","phone":"034 346023","phone2":"","slug":"radio-taksi-stil-15-85"},{"place":{"id":11,"name":"Струмица","slug":"strumica"},"name":"Коби 15-93","description":"до детска болница","address":"Панче Пешев 27","phone":"034 349193","phone2":"","slug":"kobi-15-93"},{"place":{"id":11,"name":"Струмица","slug":"strumica"},"name":"Зорген","description":"трговскиот до новата болница","address":"Браќа Миладинови 31","phone":"034 1587","phone2":"","slug":"zorgen"},{"place":{"id":10,"name":"Штип","slug":"shtip"},"name":"Роки 15-83","description":"спроти Туш маркет","address":"Сутјеска б.б","phone":"032 1583","phone2":"","slug":"roki-15-83"},{"place":{"id":27,"name":"Струга","slug":"struga"},"name":"Такси Маријан","description":null,"address":"ЈНА б.б.","phone":"070 859333","phone2":"046 1565","slug":"taksi-marijan"},{"place":{"id":23,"name":"Гостивар","slug":"gostivar"},"name":"Такси Мики","description":"Najdobroto taksi vo gradot","address":"Боге Вељаноски 78","phone":"042 1555","phone2":"078 217207","slug":"taksi-miki"},{"place":{"id":5,"name":"Тетово","slug":"tetovo"},"name":"Сити 15-60","description":"Najdobroto taksi vo gradot","address":"Иво Лола Рибар 219","phone":"044 331191","phone2":"076 221560","slug":"siti 15-60"},{"place":{"id":4,"name":"Битола","slug":"bitola"},"name":"Грич","description":null,"address":"Филип Втори Македонски 96/14 (Иван Милутиновиќ)","phone":"076 815121","phone2":null,"slug":"grich"},{"place":{"id":4,"name":"Битола","slug":"bitola"},"name":"Чоко 75","description":null,"address":"Филип Втори Македонски 96/14 (Иван Милутиновиќ)","phone":"076 815121","phone2":null,"slug":"choko-75"},{"place":{"id":3,"name":"Куманово","slug":"kumanovo"},"name":"Џокер 15-97","description":null,"address":"Тане Георгиевски 23","phone":"031 1597","phone2":null,"slug":"djoker-15-97"},{"place":{"id":6,"name":"Кочани","slug":"kochani"},"name":"Џокер","description":null,"address":"Вера Которка 73","phone":"033 1597","phone2":"078 331597","slug":"djoker"},{"place":{"id":14,"name":"Кичево","slug":"kichevo"},"name":"Шпреса","description":null,"address":"Веле Змејкоски 52","phone":"045 223200","phone2":"070 310678","slug":"shpresa"},{"place":{"id":8,"name":"Гевгелија","slug":"gevgelija"},"name":"Сити Такси АС 15-35","description":null,"address":"11-ти Октомври б.б.","phone":"034 211050","phone2":null,"slug":"siti-taksi-as-15-35"},{"place":{"id":8,"name":"Гевгелија","slug":"gevgelija"},"name":"Мастер компани 15-31","description":null,"address":"Ристо Чавдаров б.б.","phone":"034 211245","phone2":"075 331531","slug":"master-kompani-15-31"},{"place":{"id":27,"name":"Струга","slug":"struga"},"name":"Ваку","description":null,"address":"с.Велешта","phone":"070 232748","phone2":null,"slug":"vaku"},{"place":{"id":27,"name":"Струга","slug":"struga"},"name":"Џокер класик-15 70","description":null,"address":"Ристо Крле б.б.","phone":"046 1570","phone2":"070 828474","slug":"djoker-klasik-15-70"},{"place":{"id":21,"name":"Ќустендил (Бугарија)","slug":"kjustendil-(bugarija)"},"name":"Камен Джонев-такси за Софија","description":null,"address":"","phone":"+359 888700381","phone2":"+359 7843109","slug":"kamen-dzhonov-taksi-za-sofija"},{"place":{"id":21,"name":"Ќустендил (Бугарија)","slug":"kjustendil-(bugarija)"},"name":"Кире-такси за Софија","description":null,"address":"","phone":"+359 888230081","phone2":null,"slug":"kire-taksi-za-sofija"},{"place":{"id":21,"name":"Ќустендил (Бугарија)","slug":"kjustendil-(bugarija)"},"name":"Росен-такси за Софија","description":null,"address":"","phone":"+359 887418459","phone2":null,"slug":"rosen-taksi-za-sofija"},{"place":{"id":15,"name":"Берово","slug":"berovo"},"name":"Шливка 15-36","description":null,"address":"Смојмирски пат б.б.","phone":"033 470100","phone2":null,"slug":"shlivka-15-36"}]});

})();

(function () {
  'use strict';
  $(document).ready(function () {
    $('[data-toggle=offcanvas]').click(function () {
      $('.row-offcanvas').toggleClass('active');
    });
  });
})();
(function () {
  'use strict';
  angular
    .module('taximk')
    .controller('Main', Main);

  function Main(version) {
    var vm = this;
    vm.version = version;
  }
})();
(function () {
  'use strict';
  angular
    .module('taximk')
    .controller('Places', Places);

  function Places(places) {
    var vm = this;
    vm.places = places.data;
  }
})();
(function () {
  'use strict';
  angular
    .module('taximk')
    .config(States);

  function States($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('index', {
      url: '/',
      templateUrl: 'views/companies.html',
      controller: 'Company',
      controllerAs: 'company',
      resolve: {
        taxi: function (taxi) {
          return taxi.data;
        },
        place: function () {
          return null;
        }
      }
    }).state('taxi', {
      url: '/taxi/:placeId/:slug?',
      templateUrl: 'views/companies.html',
      controller: 'Company',
      controllerAs: 'company',
      resolve: {
        taxi: function ($stateParams, $filter, taxi) {
          if ($stateParams.placeId) {
            var filtered = $filter('filter')(taxi.data, function (value, index) {
              return value.place.id == $stateParams.placeId;
            });
            return filtered;
          } else {
            return taxi.data;
          }
        },
        place: function ($stateParams, $filter, places) {
          if ($stateParams.placeId) {
            var filtered = $filter('filter')(places.data, function (value, index) {
              return value.id == $stateParams.placeId;
            });
            return filtered[0];
          } else {
            return null;
          }
        }
      }
    });
  }

})();