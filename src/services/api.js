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
            'https://raw.githubusercontent.com/diegoAndrade777/rocketfy/master/src/assets/filipe-deschamps.png'
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
            'https://raw.githubusercontent.com/diegoAndrade777/rocketfy/master/src/assets/avatar.jpg'
        }
      ]
    },
    {
      title: 'Tasks I am doing...',
      creatable: true,
      phrase: 'Tasks I am working now, need to finish!',
      cards: [
        {
          id: 5,
          content: 'Recriando clone do Pipefy',
          priority: 'Crítica',
          date: '29/02/2020 16:25',
          dateCard: 'Feb, 29',
          labels: ['#000'],
          user:
            'https://raw.githubusercontent.com/diegoAndrade777/rocketfy/master/src/assets/avatar.jpg'
        }
      ]
    },
    {
      title: 'Paused',
      creatable: true,
      phrase: 'Paused tasks here. Dont forget',
      cards: [
        {
          id: 6,
          content:
            'Desafio: 10 projetos rápidos para treinar Programação e conseguir um Emprego',
          priority: 'Alta prioridade',
          date: '29/02/2020 17:05',
          dateCard: 'Feb, 29',
          labels: ['#7159c1'],
          user:
            'https://raw.githubusercontent.com/diegoAndrade777/rocketfy/master/src/assets/filipe-deschamps.png'
        },
        {
          id: 7,
          content: 'Estudar Gatsby',
          priority: 'Neutra',
          labels: ['#3490D1'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 8,
          content: 'Estudar AWS, Google Cloud',
          priority: 'Indefinida',
          labels: ['#EAEDF1']
        }
      ]
    },
    {
      title: 'Done!',
      creatable: true,
      done: true,
      phrase: 'Finished, tasks done!',
      cards: [
        {
          id: 9,
          content: 'Subir no NetFly estudos sobre flexbox - Twiter clone',
          priority: 'Indefinida',
          labels: ['#EAEDF1']
        },
        {
          id: 10,
          content: 'Subir no Netfly estudo sobre responsibilidade',
          priority: 'Crítica',
          labels: ['#000000']
        },
        {
          id: 11,
          content: 'Enviar emails importantes',
          priority: 'Alta prioridade',
          labels: ['#7159c1']
        }
      ]
    }
  ];
}
