import Category from "../models/category";
import Meal from "../models/meal";

export const CATEGORIES = [
  new Category("c1", "Italiana", "#f5428d"),
  new Category("c2", "Rápido & Fácil", "#f54242"),
  new Category("c3", "Hambúrgueres", "#f5a442"),
  new Category("c4", "Alemã", "#f5d142"),
  new Category("c5", "Leve & Gostosa", "#368dff"),
  new Category("c6", "Exótica", "#41d95d"),
  new Category("c7", "Café da Manhã", "#9eecff"),
  new Category("c8", "Asiática", "#b9ffb0"),
  new Category("c9", "Francesa", "#ffc7ff"),
  new Category("c10", "Verão", "#47fced"),
];

export const MEALS = [
  new Meal(
    "m1",
    ["c1", "c2"],
    "Espaguete com Molho de Tomate",
    "acessível",
    "simples",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    20,
    [
      "4 Tomates",
      "1 Colher de Sopa de Azeite",
      "1 Cebola",
      "250g de Espaguete",
      "Temperos",
      "Queijo (opcional)",
    ],
    [
      "Corte os tomates e a cebola em pedaços pequenos.",
      "Ferva água - adicione sal quando ferver.",
      "Coloque o espaguete na água fervente - deve estar pronto em cerca de 10 a 12 minutos.",
      "Enquanto isso, aqueça um pouco de azeite e adicione a cebola cortada.",
      "Após 2 minutos, adicione os pedaços de tomate, sal, pimenta e outros temperos.",
      "O molho estará pronto quando o espaguete estiver.",
      "Sinta-se à vontade para adicionar um pouco de queijo por cima do prato pronto.",
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    "m2",
    ["c2"],
    "Torrada Havaiana",
    "acessível",
    "simples",
    "https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg",
    10,
    [
      "1 Fatia de Pão Branco",
      "1 Fatia de Presunto",
      "1 Fatia de Abacaxi",
      "1-2 Fatias de Queijo",
      "Manteiga",
    ],
    [
      "Passe manteiga em um lado do pão branco",
      "Coloque o presunto, o abacaxi e o queijo sobre o pão branco",
      "Asse a torrada por cerca de 10 minutos no forno a 200°C",
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    "m3",
    ["c3"],
    "Hambúrguer Clássico",
    "caro",
    "simples",
    "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
    45,
    [
      "300g de Carne Moída",
      "1 Tomate",
      "1 Pepino",
      "1 Cebola",
      "Ketchup",
      "2 Pães de Hambúrguer",
    ],
    [
      "Forme 2 hambúrgueres",
      "Frite os hambúrgueres por cerca de 4 minutos de cada lado",
      "Frite rapidamente os pães por cerca de 1 minuto de cada lado",
      "Passe ketchup nos pães",
      "Sirva o hambúrguer com tomate, pepino e cebola",
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    "m4",
    ["c4"],
    "Wiener Schnitzel",
    "luxuoso",
    "desafiador",
    "https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg",
    60,
    [
      "8 Filés de Vitela",
      "4 Ovos",
      "200g de Farinha de Rosca",
      "100g de Farinha",
      "300ml de Manteiga",
      "100g de Óleo Vegetal",
      "Sal",
      "Rodelas de Limão",
    ],
    [
      "Amasse a vitela até cerca de 2–4mm, e salgue dos dois lados.",
      "Em um prato raso, mexa os ovos brevemente com um garfo.",
      "Cubra levemente os filés com farinha, depois mergulhe no ovo e, finalmente, cubra com farinha de rosca.",
      "Aqueça a manteiga e o óleo em uma grande frigideira (deixe a gordura ficar bem quente) e frite os schnitzels até ficarem dourados de ambos os lados.",
      'Certifique-se de sacudir a frigideira regularmente para que os schnitzels fiquem cercados por óleo e a crosta fique "fofa".',
      "Retire e escorra em papel toalha. Frite a salsa no óleo restante e escorra.",
      "Coloque os schnitzels em um prato aquecido e sirva decorado com salsa e rodelas de limão.",
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    "m5",
    ["c2", "c5", "c10"],
    "Salada com Salmão Defumado",
    "luxuosa",
    "simples",
    "https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg",
    15,
    [
      "Rúcula",
      "Alface-de-Cordeiro",
      "Salsa",
      "Funcho",
      "200g de Salmão Defumado",
      "Mostarda",
      "Vinagre Balsâmico",
      "Azeite",
      "Sal e Pimenta",
    ],
    [
      "Lave e corte a salada e as ervas",
      "Corte o salmão em cubos",
      "Misture a mostarda, o vinagre e o azeite em um molho",
      "Prepare a salada",
      "Adicione os cubos de salmão e o molho",
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    "m6",
    ["c6", "c10"],
    "Deliciosa Mousse de Laranja",
    "acessível",
    "difícil",
    "https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg",
    240,
    [
      "4 Folhas de Gelatina",
      "150ml de Suco de Laranja",
      "80g de Açúcar",
      "300g de Iogurte",
      "200g de Creme de Leite",
      "Raspas de Laranja",
    ],
    [
      "Dissolva a gelatina em uma panela",
      "Adicione o suco de laranja e o açúcar",
      "Retire a panela do fogo",
      "Adicione 2 colheres de sopa de iogurte",
      "Misture a gelatina com o iogurte restante",
      "Esfrie tudo na geladeira",
      "Bata o creme de leite e misture na massa de laranja",
      "Esfrie novamente por pelo menos 4 horas",
      "Sirva com raspas de laranja",
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    "m7",
    ["c7"],
    "Panquecas",
    "acessível",
    "simples",
    "https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg",
    20,
    [
      "1 1/2 Xícaras de Farinha de Trigo",
      "3 1/2 Colheres de Chá de Fermento em Pó",
      "1 Colher de Chá de Sal",
      "1 Colher de Sopa de Açúcar Branco",
      "1 1/4 Xícaras de Leite",
      "1 Ovo",
      "3 Colheres de Sopa de Manteiga, derretida",
    ],
    [
      "Em uma tigela grande, peneire a farinha, o fermento, o sal e o açúcar.",
      "Faça um buraco no centro e despeje o leite, o ovo e a manteiga derretida; misture até ficar homogêneo.",
      "Aqueça uma frigideira levemente untada com óleo em fogo médio-alto.",
      "Despeje ou coloque a massa na frigideira, usando aproximadamente 1/4 de xícara para cada panqueca. Doure dos dois lados e sirva quente.",
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    "m8",
    ["c8"],
    "Curry indiano cremoso de frango",
    "caro",
    "desafiador",
    "https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg",
    35,
    [
      "4 peitos de frango",
      "1 cebola",
      "2 dentes de alho",
      "1 pedaço de gengibre",
      "4 colheres de sopa de amêndoas",
      "1 colher de chá de pimenta caiena",
      "500 ml de leite de coco",
    ],
    [
      "Fatie e frite o peito de frango",
      "Processe a cebola, o alho e o gengibre até formar uma pasta e refogue tudo",
      "Acrescente os temperos e refogue",
      "Adicione o peito de frango + 250 ml de água e cozinhe tudo por 10 minutos",
      "Adicione o leite de coco",
      "Sirva com arroz",
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    "m9",
    ["c9"],
    "Suflê de chocolate",
    "acessível",
    "difícil",
    "https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg",
    45,
    [
      "1 colher de chá de manteiga derretida",
      "2 colheres de sopa de açúcar branco",
      "60g de chocolate amargo 70%, quebrado em pedaços",
      "1 colher de sopa de manteiga",
      "1 colher de sopa de farinha para todos os fins",
      "4 1/3 colheres de sopa de leite frio",
      "1 pitada de sal",
      "1 pitada de pimenta-caiena",
      "1 gema de ovo grande",
      "2 claras de ovo grandes",
      "1 pitada de creme de tártaro",
      "1 colher de sopa de açúcar branco",
    ],
    [
      "Pré-aqueça o forno a 190°C. Forre uma assadeira com papel manteiga.",
      "Pincele levemente o fundo e as laterais de 2 ramequins com 1 colher de chá de manteiga derretida; cubra o fundo e as laterais até a borda.",
      "Adicione 1 colher de sopa de açúcar branco aos ramequins. Gire os ramequins até que o açúcar cubra todas as superfícies.",
      "Coloque os pedaços de chocolate em uma tigela de metal.",
      "Coloque a tigela sobre uma panela com cerca de 3 xícaras de água quente em fogo baixo.",
      "Derreta 1 colher de sopa de manteiga em uma frigideira em fogo médio. Polvilhe a farinha. Bata até que a farinha seja incorporada à manteiga e a mistura engrosse.",
      "Bata o leite frio até que a mistura fique homogênea e engrosse. Transfira a mistura para a tigela com o chocolate derretido.",
      "Adicione sal e pimenta-caiena. Misture bem. Adicione a gema de ovo e misture bem.",
      "Deixe a tigela sobre a água quente (não fervente) para manter o chocolate aquecido enquanto bate as claras em neve",
      "Coloque 2 claras de ovo em uma tigela; adicione o creme de tártaro. Bata até que a mistura comece a engrossar e um fio do batedor permaneça na superfície por cerca de 1 segundo antes de desaparecer na mistura.",
      "Adicione 1/3 do açúcar e bata. Bata mais um pouco de açúcar por cerca de 15 segundos",
      "Bata o restante do açúcar. Continue batendo até que a mistura fique com a espessura de um creme de barbear e com picos macios, de 3 a 5 minutos.",
      "Transfira um pouco menos da metade das claras para o chocolate.",
      "Misture até que as claras estejam completamente incorporadas ao chocolate",
      "Acrescente o restante das claras em neve; incorpore-as delicadamente ao chocolate com uma espátula, levantando do fundo e dobrando por cima",
      "Pare de misturar quando a clara de ovo desaparecer. Divida a mistura entre 2 ramequins preparados. Coloque os ramequins na assadeira preparada.",
      "Asse em forno preaquecido até que os bolinhos estejam inchados e tenham subido acima do topo das bordas, de 12 a 15 minutos",
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    "m10",
    ["c2", "c5", "c10"],
    "Salada de aspargos com tomates-cereja",
    "luxuoso",
    "simples",
    "https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg",
    30,
    [
      "Aspargos brancos e verdes",
      "30g de pinhões",
      "300g de tomates-cereja",
      "Salada",
      "Sal, pimenta e azeite de oliva",
    ],
    [
      "Lave, descasque e corte os aspargos",
      "Cozinhe em água com sal",
      "Sal e pimenta dos aspargos",
      "Assar os pinhões",
      "Corte os tomates ao meio",
      "Misture os aspargos, a salada e o molho",
      "Sirva com baguete",
    ],
    true,
    true,
    true,
    true
  ),
];
