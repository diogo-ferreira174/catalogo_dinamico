const database = [
    {
        id: 1,
        titulo: "Grand Theft Auto IV",
        categoria: "Jogo",
        imagem: "https://observatoriodegames.com.br/wp-content/uploads/2022/08/GTA-4.jpg",
        pequenadescrição: "A jornada brutal de Niko Bellic em Liberty City, tentando escapar de seu passado de guerra e encontrar o verdadeiro 'Sonho Americano'.",
        descrição: "Enganado pelas promessas de riqueza de seu primo Roman, Niko Bellic chega a Liberty City e é forçado a entrar no submundo do crime para protegê-lo. O jogo é um marco por seu tom realista e sombrio, apresentando uma física de jogo avançada e uma narrativa madura sobre traição, sobrevivência e a busca por redenção em uma metrópole indiferente.",
        nota: 9.8,
        extra: "Lançamento: 2008 | Desenvolvedora: Rockstar North | Plataformas: PC, PS3, Xbox 360",
        personagem: "Niko Bellic",
        historia: "Imigrante do Leste Europeu, Niko chega a Liberty City em busca do sonho americano. Ele se envolve com o submundo do crime para proteger a família e o primo Roman, enfrentando traições e dilemas morais enquanto luta por redenção.",
        galeria: [
            "https://cdn.cloudflare.steamstatic.com/steam/apps/12230/ss_eb5aaae178bccdb81d5ec91f846da111f91e8f1b.1920x1080.jpg",
            "https://cdn.cloudflare.steamstatic.com/steam/apps/12230/ss_32d4d19b77ad052799ed10e5d3d17b5e7a4645d0.1920x1080.jpg",
            "https://cdn.cloudflare.steamstatic.com/steam/apps/12230/ss_7e48caf1a922293d04d1f5abbd7427b8f895dff4.1920x1080.jpg"
        ]
    },
    {
        id: 2,
        titulo: "Dexter",
        categoria: "Série",
        imagem: "https://m.media-amazon.com/images/I/81JKXT1j0OL._AC_UF1000,1000_QL80_.jpg",
        pequenadescrição: "A vida dupla de um analista forense que atua secretamente como um assassino em série focado em aplicar sua própria justiça.",
        descrição: "Dexter Morgan trabalha para a polícia de Miami como especialista em padrões de dispersão de sangue. Porém, sob sua fachada de homem pacato, esconde-se um psicopata. Para canalizar seus instintos violentos, seu pai adotivo o ensinou um código rígido: matar apenas criminosos que conseguiram escapar do sistema judicial, tornando-se um anti-herói fascinante.",
        nota: 8.8,
        extra: "Temporadas: 8 | Emissora: Showtime | Ano: 2006-2013",
        personagem: "Dexter Morgan",
        historia: "Um analista de sangue na polícia de Miami que esconde sua necessidade de matar sob um código moral estreito. Sua jornada é sobre justiça e a luta contra a escuridão dentro de si.",
        galeria: [
            "https://images-na.ssl-images-amazon.com/images/I/81sHkC1FhZL._AC_SL1500_.jpg",
            "https://www.outridereview.com.br/wp-content/uploads/2018/10/dexter-season-8.jpg",
            "https://media.sensacine.com/r759x/submissions/1/7/5/15175/15175_810931.jpg"
        ]
    },
    {
        id: 3,
        titulo: "Batman: O Cavaleiro das Trevas",
        categoria: "Filme",
        imagem: "https://rollingstone.com.br/wp-content/uploads/batman_o_cavaleiro_das_trevas_2.jpg",
        pequenadescrição: "O confronto definitivo e psicológico entre Batman e seu maior arqui-inimigo, o Coringa, que busca mergulhar Gotham City na anarquia pura.",
        descrição: "Com a ajuda do tenente Jim Gordon e do promotor público Harvey Dent, Batman continua sua guerra contra o crime organizado em Gotham. No entanto, a chegada do Coringa, um gênio anarquista e psicopata, testa os limites morais do herói e transforma a cidade em um tabuleiro de terror psicológico. O filme é amplamente considerado uma obra-prima do cinema, imortalizado pela atuação lendária e oscarizada de Heath Ledger.",
        nota: 9.7,
        extra: "Ano: 2008 | Diretor: Christopher Nolan | Duração: 152 min",
        personagem: "Bruce Wayne / Batman",
        historia: "Bruce Wayne enfrenta seu maior antagonista enquanto tenta manter a ordem em Gotham. Sua história combina sacrifício pessoal e responsabilidade heroica em um mundo que parece estar caindo em anarquia.",
        galeria: [
            "https://br.web.img3.acsta.net/c_310_420/pictures/14/11/05/11/28/493175.jpg",
            "https://sm.ign.com/ign_br/screenshot/default/batman-the-dark-knight-2008-1024x768-000000_blcg.jpg",
            "https://static3.cinepop.com.br/2020/12/0C5C3E3B-E095-4A0C-BCA3-F6B87011546F-840x450.jpeg"
        ]
    },
    {
        id: 4,
        titulo: "Breaking Bad",
        categoria: "Série",
        imagem: "https://static.wikia.nocookie.net/assista-series/images/5/56/Breaking-Bad.jpg/revision/latest/scale-to-width-down/1200?cb=20150528205254&path-prefix=pt-br",
        pequenadescrição: "Um professor de química diagnosticado com câncer decide fabricar drogas para garantir o futuro financeiro de sua família.",
        descrição: "Walter White, um professor de química de 50 anos, é diagnosticado com câncer terminal. Para garantir o futuro financeiro de sua família, ele começa a fabricar metanfetamina junto com seu ex-aluno Jesse Pinkman.",
        nota: 9.9,
        extra: "Temporadas: 5 | Emissora: AMC | Ano: 2008-2013",
        personagem: "Walter White",
        historia: "Um professor de química que se transforma em fabricante de metanfetamina para salvar sua família. Sua jornada revela como o poder e o medo podem transformar um homem comum em inimigo público.",
        galeria: [
            "https://static.wikia.nocookie.net/assista-series/images/5/56/Breaking-Bad.jpg/revision/latest/scale-to-width-down/1200?cb=20150528205254&path-prefix=pt-br",
            "https://s2.glbimg.com/kYJHZE2uFug2hp82iSmLwHQ5-L0=/0x0:1200x900/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e21/internal_photos/bs/2020/f/V/lmgHtgGH1d4iMHHeX5Vw/breakingbad.jpg",
            "https://uploads.metropoles.com/wp-content/uploads/2022/05/18130038/Breaking-Bad.jpg"
        ]
    },
    {
        id: 5,
        titulo: "Red Dead Redemption 2",
        categoria: "Jogo",
        imagem: "https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg",
        pequenadescrição: "O crepúsculo da era dos fora da lei no Velho Oeste americano, acompanhando a jornada de lealdade e redenção de Arthur Morgan.",
        descrição: "Em 1899, após um roubo dar errado na cidade de Blackwater, Arthur Morgan e a gangue Van der Linde são forçados a fugir pelos Estados Unidos. Caçados por agentes federais e pelos melhores caçadores de recompensas, o grupo precisa roubar e lutar para sobreviver. Conforme divisões internas ameaçam despedaçar a gangue, Arthur enfrenta o dilema entre seus próprios ideais e a lealdade ao homem que o criou, em uma narrativa emocionante com realismo técnico sem precedentes.",
        nota: 9.7,
        extra: "Lançamento: 2018 | Desenvolvedora: Rockstar Games | Plataformas: PS4, Xbox One, PC",
        personagem: "Arthur Morgan",
        historia: "Leal membro da gangue Van der Linde, Arthur defende seus amigos enquanto questiona sua própria moralidade. A jornada dele reflete a mudança dos foras-da-lei para uma América cada vez mais moderna.",
        galeria: [
            "https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg",
            "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/ss_80a7d8b0d59700752db9d4c701c7e86c8de823e2.1920x1080.jpg",
            "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/ss_1392afa0ee1ef1a7c8e42f61f19dd421ded29795.1920x1080.jpg"
        ]

    },
    {
        id: 6,  
        titulo: "Clube da Luta",
        categoria: "Filme",
        imagem: "https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg",
        pequenadescrição: "Um trabalhador insone e um vendedor de sabão carismático criam um clube de luta subterrâneo que evolui para uma organização anarquista perigosa.",
        descrição: "O narrador, um homem comum sufocado pelo consumismo e pela insônia, vê sua vida mudar ao conhecer o enigmático Tyler Durden. Juntos, eles fundam o 'Clube da Luta', um espaço para homens extravasarem frustrações através da violência física. O movimento cresce e se transforma no 'Projeto Mayhem', uma rede terrorista anticonsumista que foge do controle, culminando em uma das reviravoltas mais icônicas da história do cinema.",
        nota: 9.0,
        extra: "Ano: 1999 | Diretor: David Fincher | Duração: 139 min",
        personagem: "O Narrador / Tyler Durden",
        historia: "Um homem anônimo descobre em Tyler Durden a liberdade e a violência que sempre quis. Sua história é uma crítica à identidade moderna e à necessidade de quebrar padrões.",
        galeria: [
            "https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg",
            "https://i0.wp.com/www.omelete.com.br/app/uploads/2018/05/clube-da-luta-1.jpg",
            "https://img.elo7.com.br/product/zoom/1633DD7/quadro-clube-da-luta-2-50x70cm-inverno-arte.jpg"
        ]
  },
  {
      id: 7,
      titulo: "O Poderoso Chefão",
      categoria: "Filme",
      imagem: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/93/20/20120876.jpg",
      pequenadescrição: "A saga épica da família Corleone, liderada por Vito e depois por seu filho Michael, navegando pelo mundo do crime organizado.",
      descrição: "Vito Corleone é o poderoso chefe de uma família mafiosa ítalo-americana. Quando ele recusa um pedido de ajuda para entrar no tráfico de drogas, sua família é atacada, levando seu filho mais novo, Michael, a se envolver no negócio da família. O filme é uma exploração profunda de poder, lealdade e corrupção, mostrando a transformação de Michael de um outsider relutante para um implacável líder do crime.",
      nota: 9.2,
      extra: "Ano: 1972 | Diretor: Francis Ford Coppola | Duração: 175 min",
      personagem: "Michael Corleone",
      historia: "Michael emerge como herdeiro relutante da família Corleone após um ataque aos seus. Sua transformação de herói de guerra para chefe da máfia mostra poder e família.",
      galeria: [
          "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/93/20/20120876.jpg",
          "https://upload.wikimedia.org/wikipedia/pt/2/2c/Corleone.jpg",
          "https://m.media-amazon.com/images/I/61m0rhI4hWL._AC_SY679_.jpg"
      ]
  },
  {
      id: 8,
      titulo: "Game of Thrones",    
      categoria: "Série",
      imagem: "https://t2.tudocdn.net/237989?w=1920",
      pequenadescrição: "Intrigas políticas, batalhas épicas e dragões em uma luta pelo controle dos Sete Reinos de Westeros.",
      descrição: "Em um mundo onde as estações podem durar anos, várias famílias nobres lutam pelo controle do Trono de Ferro. A série é conhecida por suas reviravoltas chocantes, personagens complexos e uma narrativa que mistura fantasia medieval com intrigas políticas, explorando temas de poder, lealdade e sobrevivência em um cenário brutal e imprevisível.",
      nota: 8.6,
      extra: "Temporadas: 8 | Emissora: HBO | Ano: 2011-2019",
      personagem: "Jon Snow",
      historia: "Jon Snow luta para unir o Norte e sobreviver contra forças sobrenaturais. Sua jornada é marcada por descobertas sobre sua origem e dever no destino de Westeros.",
      galeria: [
          "https://t2.tudocdn.net/237989?w=1920",
          "https://images6.fanpop.com/image/photos/34700000/Game-of-Thrones-game-of-thrones-34793312-1920-1080.jpg",
          "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/04/Battle-of-the-Bastards.jpg"
      ]
  },
  {
      id: 9,
      titulo: "The Legend of Zelda: Ocarina of Time",
      categoria: "Jogo",
      imagem: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_7/SI_N64_LegendOfZeldaOcarinaOfTime.jpg",
      pequenadescrição: "A jornada de Link para salvar a princesa Zelda e derrotar o malvado Ganondorf em um mundo de fantasia épico.",
      descrição: "Link, um jovem herói, é convocado para salvar o reino de Hyrule da ameaça de Ganondorf, um poderoso feiticeiro. Armado com a Ocarina do Tempo, Link viaja entre o passado e o futuro para reunir as forças necessárias para derrotar o mal. O jogo é aclamado por sua inovação em design de jogos 3D, narrativa envolvente e uma trilha sonora memorável, tornando-se um dos títulos mais influentes e amados da história dos videogames.",
      nota: 10,
      extra: "Lançamento: 1998 | Desenvolvedora: Nintendo | Plataformas: Nintendo 64",
      personagem: "Link",
      historia: "Escolhido para proteger Hyrule, Link viaja entre passado e futuro para impedir que Ganondorf conquiste o reino. Sua coragem e habilidade com a Ocarina do Tempo definem a jornada épica.",
      galeria: [
          "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_7/SI_N64_LegendOfZeldaOcarinaOfTime.jpg",
          "https://cdn.mos.cms.futurecdn.net/htEvUcc1M2ApjgeZ4roZQ9-1200-80.jpg",
          "https://www.sfgate.com/wp-content/uploads/sites/6/2020/07/ocarinaoftime.jpg"
      ]
  },
  {
      id: 10,
      titulo: "The Witcher 3: Wild Hunt",
      categoria: "Jogo",
      imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
      pequenadescrição: "Geralt de Rívia explora um continente cheio de monstros, intriga política e escolhas que mudam o destino.",
      descrição: "O caçador de monstros Geralt aceita uma missão perigosa que o leva a território devastado pela guerra, onde caça feras e enfrenta lendas humanas. Com narrativa ramificada, missões emocionantes e um mundo aberto vibrante, o jogo define padrão para RPGs de última geração.",
      nota: 9.9,
      extra: "Lançamento: 2015 | Desenvolvedora: CD Projekt RED | Plataformas: PC, PS4, Xbox One, Switch",
      personagem: "Geralt de Rívia",
      historia: "Um caçador de monstros de uma escola antiga, Geralt aceita uma missão para encontrar a criança da profecia. Sua jornada equilibra decisões morais, relacionamentos complexos e combate contra criaturas sobrenaturais.",
      galeria: [
          "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_ba5e1de2f1e3e842db4782cc4d7d7b61235a32cc.1920x1080.jpg",
          "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_6d56ecb3680a4bc9f35fa96cc83e9f6fa5d1a385.1920x1080.jpg",
          "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_0dea1c4ef0e5e1a49d2f7f9d272f11d6e73d3976.1920x1080.jpg"
      ]
  },
  {
      id: 11,
      titulo: "God of War (2018)",
      categoria: "Jogo",
      imagem: "https://cdn2.unrealengine.com/egs-godofwar-ps5-barao-01-1920x1080-524a9a0f3cbc.jpg",
      pequenadescrição: "Pai e filho enfrentam deuses, monstros e um passado violento na mitologia nórdica.",
      descrição: "Kratos vive uma nova vida como pai, mas seu passado sangrento o persegue. Quando ele e Atreus partem em uma jornada para cumprir a última vontade da mãe, descobrem segredos antigos e confrontam deuses nórdicos em combates épicos.",
      nota: 9.6,
      extra: "Lançamento: 2018 | Desenvolvedora: Santa Monica Studio | Plataformas: PS4, PS5",
      personagem: "Kratos",
      historia: "Após uma vida sangrenta na Grécia, Kratos tenta ser pai em terras nórdicas. Quando forças antigas reaparecem, ele precisa proteger o filho e encarar o próprio passado.",
      galeria: [
          "https://cdn2.unrealengine.com/egs-godofwar-ps5-barao-01-1920x1080-524a9a0f3cbc.jpg",
          "https://cdn1.epicgames.com/offer/a7d8fa103d8740f38f3614472ef1e5da/EGS_GodofWar_SantaMonicaStudio_S2_2560x1440-5207afb8db0aac2d5ebec2214d5e4b5d",
          "https://images.pushsquare.com/09c059ee566858cad988a091debe96a4f0e50cad/ps4/screenshot/god-of-war-2018-review.jpg"
      ]
  },
  {
      id: 12,
      titulo: "Stranger Things",
      categoria: "Série",
      imagem: "https://occ-0-4681-988.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5SsmO0/AAAABaNMv3N3XnDFwA0G5UvPzlbqqf2fiSTL7Y-bj9rP3KbTZv8VPlUryKE6zHdn0n14pgXJNXvBf1ta2SqB8cwN0N1pY726.webp?r=05a",
      pequenadescrição: "Uma cidade pequena é tomada por forças sobrenaturais, e um grupo de amigos enfrenta um mundo invertido.",
      descrição: "Em Hawkins, Indiana, uma criança desaparece e uma menina com poderes sobrenaturais aparece. Enquanto o Departamento de Energia tenta encobrir o mistério, um grupo de amigos e a mãe determinada investigam coisas ainda mais sombrias.",
      nota: 8.7,
      extra: "Temporadas: 4 | Emissora: Netflix | Ano: 2016-presente",
      personagem: "Eleven",
      historia: "Uma garota com habilidades psíquicas ajuda seus amigos a enfrentar o Mundo Invertido e perigos sobrenaturais. Ela busca entender sua origem e encontrar sua família.",
      galeria: [
          "https://occ-0-4681-988.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5SsmO0/AAAABaNMv3N3XnDFwA0G5UvPzlbqqf2fiSTL7Y-bj9rP3KbTZv8VPlUryKE6zHdn0n14pgXJNXvBf1ta2SqB8cwN0N1pY726.webp?r=05a",
          "https://br.web.img3.acsta.net/pictures/16/08/01/15/25/500416.jpg",
          "https://s2.glbimg.com/GbzH4D6Wf74e8cVeTQAlvuQwGbo=/0x0:1200x900/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e21/internal_photos/bs/2022/h/Q/IJ9Gj1XPTsv3IvwxyKag/stranger-things-5.jpg"
      ]
  },
  {
      id: 13,
      titulo: "Interestelar",
      categoria: "Filme",
      imagem: "https://br.web.img3.acsta.net/c_310_420/pictures/17/08/31/14/15/373907.jpg",
      pequenadescrição: "Uma missão espacial busca salvamento humano atravessando buracos de minhoca e dimensões temporais.",
      descrição: "Em um futuro onde os recursos da Terra se esgotam, um grupo de astronautas liderado por Cooper atravessa um buraco de minhoca em busca de um novo lar. O filme mistura ciência, emoção e a exploração dos laços entre pai e filha.",
      nota: 9.4,
      extra: "Ano: 2014 | Diretor: Christopher Nolan | Duração: 169 min",
      personagem: "Cooper",
      historia: "Um piloto e ex-engenheiro que viaja por um buraco de minhoca para encontrar um novo planeta habitável. Sua luta é motivada pelo amor a sua filha e a esperança de salvar a humanidade.",
      galeria: [
          "https://br.web.img3.acsta.net/c_310_420/pictures/17/08/31/14/15/373907.jpg",
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8I37d6xmEuH7uZVhrQC8qlriptg.jpg",
          "https://cdn.cineshow.com.br/uploads/2024/03/Interstellar-2.jpg"
      ]
  },
  {
      id: 14,
      titulo: "Parasita",
      categoria: "Filme",
      imagem: "https://br.web.img3.acsta.net/c_310_420/pictures/19/07/09/14/10/2884300.jpg",
      pequenadescrição: "Uma família pobre invade a casa de uma família rica com planos que saem de controle.",
      descrição: "Os Kim vivem em um porão úmido até que o filho consegue emprego como tutor em uma mansão. Aos poucos, toda a família se infiltra na casa dos Park, e a situação evolui para uma crítica social intensa e chocante sobre desigualdade.",
      nota: 9.5,
      extra: "Ano: 2019 | Diretor: Bong Joon-ho | Duração: 132 min",
      personagem: "Ki-taek",
      historia: "O pai da família Kim que busca uma vida melhor trabalhando para os ricos Park. Sua história expõe as profundas desigualdades sociais entre classes.",
      galeria: [
          "https://br.web.img3.acsta.net/c_310_420/pictures/19/07/09/14/10/2884300.jpg",
          "https://media.fstatic.com/PXySjlzVQ5Q2S8WlD7UdYw0fH5w=/290x478/smart/media/movies/covers/2019/07/2dfc4f95-0009-4ee2-96f2-312cbe2ca2bd.jpg",
          "https://images.uncut.com.br/filmes-kinopoisk-cover/parasite-new-poster-1560097308.jpg"
      ]
  },
  {
      id: 15,
      titulo: "Dark",
      categoria: "Série",
      imagem: "https://br.web.img3.acsta.net/pictures/19/11/13/16/38/2761411.jpg",
      pequenadescrição: "Viagens no tempo expõem segredos de quatro famílias em uma pequena cidade alemã.",
      descrição: "Quando duas crianças desaparecem, a cidade de Winden é abalada por segredos que conectam quatro famílias através de gerações. A série combina suspense, drama e paradoxos temporais em uma história complexa e envolvente.",
      nota: 9.0,
      extra: "Temporadas: 3 | Emissora: Netflix | Ano: 2017-2020",
      personagem: "Jonas Kahnwald",
      historia: "Jonas é um jovem marcado pela viagem no tempo e pela tentativa de quebrar o ciclo de tragédias em Winden. Sua história mostra como escolhas passadas ecoam através das gerações.",
      galeria: [
          "https://br.web.img3.acsta.net/pictures/19/11/13/16/38/2761411.jpg",
          "https://upload.wikimedia.org/wikipedia/pt/6/6b/Logo-dark-netflix.png",
          "https://media.fstatic.com/7mF8FLigH8YFDdqQGTANuXUtktc=/290x478/smart/media/movies/covers/2018/11/6b3c2f6f-040f-40c3-a0af-892c3b7b23d3.jpg"
      ]
  }
];


const filtros = {
    categoria: 'Todos',
    termo: ''
};

const categorias = ['Todos', ...new Set(database.map(item => item.categoria))];

function obterCategoriaDaUrl() {
    const parametros = new URLSearchParams(window.location.search);
    const categoriaUrl = parametros.get('categoria');
    return categoriaUrl && categorias.includes(categoriaUrl) ? categoriaUrl : null;
}

function ativarMenuAtual() {
    const menuLinks = document.querySelectorAll('.site-menu .menu-link');
    menuLinks.forEach(link => {
        const url = new URL(link.href, window.location.origin);
        const categoriaLink = url.searchParams.get('categoria');

        const ehHome = !categoriaLink && filtros.categoria === 'Todos';
        const ehCategoria = categoriaLink === filtros.categoria;

        if (ehHome || ehCategoria) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Identifica qual container existe na tela atual para rodar o script correto
    const homeContainer = document.getElementById('lista-itens');
    const detalhesContainer = document.getElementById('detalhes-item');

    if (homeContainer) {
        const filtrosContainer = document.getElementById('filtros-categorias');
        const buscaInput = document.getElementById('busca');

        const categoriaUrl = obterCategoriaDaUrl();
        if (categoriaUrl) {
            filtros.categoria = categoriaUrl;
        }

        renderizarFiltros(filtrosContainer);
        ativarMenuAtual();
        buscaInput.addEventListener('input', event => {
            filtros.termo = event.target.value;
            renderizarHome(homeContainer);
        });

        renderizarHome(homeContainer);
    }

    if (detalhesContainer) {
        renderizarDetalhes(detalhesContainer);
    }
});

function gerarEstrelas(nota) {
    const estrelas = Math.round(nota / 2);
    return '★'.repeat(estrelas) + '☆'.repeat(5 - estrelas);
}

function renderizarFiltros(container) {
    const botoes = categorias.map(categoria => {
        const activeClass = categoria === filtros.categoria ? 'active' : '';
        return `<button type="button" class="filtro-botao ${activeClass}" data-categoria="${categoria}">${categoria}</button>`;
    }).join('');

    container.innerHTML = botoes;
    container.querySelectorAll('.filtro-botao').forEach(botao => {
        botao.addEventListener('click', () => {
            filtros.categoria = botao.dataset.categoria;
            renderizarFiltros(container);
            renderizarHome(document.getElementById('lista-itens'));
        });
    });
}

function renderizarHome(container) {
    const termo = filtros.termo.toLowerCase().trim();
    const itensFiltrados = database.filter(item => {
        const correspondeCategoria = filtros.categoria === 'Todos' || item.categoria === filtros.categoria;
        const correspondeTermo =
            item.titulo.toLowerCase().includes(termo) ||
            item.categoria.toLowerCase().includes(termo) ||
            item.extra.toLowerCase().includes(termo) ||
            item.pequenadescrição.toLowerCase().includes(termo);

        return correspondeCategoria && correspondeTermo;
    });

    container.innerHTML = '';

    if (!itensFiltrados.length) {
        container.innerHTML = `
            <div class="no-results">
                <h2>Nenhum resultado encontrado</h2>
                <p>Tente outro termo ou categoria para encontrar algo novo.</p>
            </div>
        `;
        return;
    }

    itensFiltrados.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img src="${item.imagem}" alt="Imagem de ${item.titulo}" class="card-img">
            <div class="card-content">
                <h2>${item.titulo}</h2>
                <p class="tag">${item.categoria}</p>
                <div class="rating">
                    <span class="stars">${gerarEstrelas(item.nota)}</span>
                    <span class="rating-value">${item.nota}</span>
                </div>
                <p>${item.pequenadescrição}</p>
                <p class="card-meta">${item.extra}</p>
                <a href="detalhes.html?id=${item.id}" class="btn">Ver Detalhes</a>
            </div>
        `;

        container.appendChild(card);
    });
}

function renderizarDetalhes(container) {

    const parametrosUrl = new URLSearchParams(window.location.search);
    const idItem = parseInt(parametrosUrl.get('id'));


    const itemEncontrado = database.find(item => item.id === idItem);

    if (itemEncontrado) {
        const personagemHtml = itemEncontrado.personagem ? `<p><strong>Personagem principal:</strong> ${itemEncontrado.personagem}</p>` : '';
        const historiaHtml = itemEncontrado.historia ? `<div class="detalhes-historia"><h3>História</h3><p>${itemEncontrado.historia}</p></div>` : '';
        const galeriaHtml = itemEncontrado.galeria && itemEncontrado.galeria.length ? `
            <div class="detalhes-galeria">
                ${itemEncontrado.galeria.map(imagem => `<img src="${imagem}" alt="${itemEncontrado.titulo} imagem">`).join('')}
            </div>
        ` : '';

        container.innerHTML = `
            <div class="detalhes-card">
                <div class="detalhes-media">
                    <img src="${itemEncontrado.imagem}" alt="${itemEncontrado.titulo}" class="detalhes-img">
                    ${galeriaHtml}
                </div>
                <div class="detalhes-info">
                    <h1>${itemEncontrado.titulo}</h1>
                    <p class="tag">${itemEncontrado.categoria}</p>
                    <div class="det-rating">
                        <span class="det-stars">${gerarEstrelas(itemEncontrado.nota)}</span>
                        <span class="det-rating-value">${itemEncontrado.nota}/10</span>
                    </div>
                    <div class="outras-informacoes">
                        <h3>Sobre</h3>
                        <p>${itemEncontrado.descrição}</p>
                        ${personagemHtml}
                        ${historiaHtml}
                        <hr>
                        <p><strong>Ficha Técnica:</strong> ${itemEncontrado.extra}</p>
                    </div>
                    <a href="index.html" class="btn btn-voltar">← Voltar para Home</a>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="erro">
                <h2>Item não encontrado!</h2>
                <p>O ID passado na URL não existe no nosso banco de dados.</p>
                <a href="index.html" class="btn">Voltar para Home</a>
            </div>
        `;
    }
}
