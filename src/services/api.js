export function loadLists() {
  return [
    {
      title: 'To Do',
      creatable: true,
      phrase: 'Add tasks to do!',

      cards: [
        {
          id: 1,
          content: 'Estudar módulo 03 do BootCamp',
          priority: 'Medium',
          labels: ['#5BC25B'],
          user:
            'https://raw.githubusercontent.com/diegoAndrade777/rocketfy/master/src/assets/diego-fernandes.png'
        },
        {
          id: 2,
          content: 'Ver o vídeo de susgestão de projetos do Filipe',
          priority: 'Neutra',
          labels: ['#3490D1'],
          user:
            'https://github.com/diegoAndrade777/rocketfy/blob/master/src/assets/filipe-deschamps.png'
        },
        {
          id: 3,
          content: 'Terminar os estudos do back-end do GoBarber',
          priority: 'Alta prioridade',
          date: '15/03/2020 18:00',
          dateCard: 'Mar, 03',
          labels: ['#7159c1'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 4,
          content: 'Terminar meu website',
          priority: 'Neutra',
          labels: ['#3490D1'],
          user:
            'https://github.com/diegoAndrade777/rocketfy/blob/master/src/assets/avatar.jpg'
        }
      ]
    },
    {
      title: 'Tasks I am doing...',
      creatable: true,
      phrase: 'Tasks you working now!',
      cards: [
        {
          id: 5,
          content: 'Recriando clone do Pipefy',
          priority: 'Crítica',
          date: '29/02/2020 16:25',
          dateCard: 'Feb, 29',
          labels: ['#000'],
          user:
            'https://github.com/diegoAndrade777/rocketfy/blob/master/src/assets/avatar.jpg'
        }
      ]
    },
    {
      title: 'Paused',
      creatable: true,
      phrase: 'Paused tasks here.',
      cards: [
        {
          id: 6,
          content:
            'Estudar sobre a diferença dos pré-processadores SASS x LESS',
          priority: 'Alta prioridade',
          date: '29/02/2020 17:05',
          dateCard: 'Fev, 29',
          labels: ['#7159c1'],
          user:
            'https://github.com/diegoAndrade777/rocketfy/blob/master/src/assets/filipe-deschamps.png'
        },
        {
          id: 7,
          content: 'Atualizar as extensões do VSCode',
          priority: 'Neutra',
          labels: ['#3490D1'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 8,
          content: 'Entender melhor sobre as diferentes medidas do CSS',
          priority: 'Indefinida',
          labels: ['#EAEDF1']
        }
      ]
    },
    {
      title: 'Done!',
      creatable: true,
      done: true,
      phrase: 'All tasks are done!',
      cards: [
        {
          id: 9,
          content:
            'Postar artigo sobre O que meu Eu de agora diria ao meu Eu de 7 anos atrás',
          priority: 'Indefinida',
          labels: ['#EAEDF1']
        },
        {
          id: 10,
          content: 'Entender um pouco mais sobre o Docker',
          priority: 'Crítica',
          labels: ['#000000']
        },
        {
          id: 11,
          content: 'Lotion e Notion para realizar anotações',
          priority: 'Alta prioridade',
          labels: ['#7159c1']
        }
      ]
    }
  ];
}
