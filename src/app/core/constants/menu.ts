import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'SportSync',
      separator: false,
      items: [
        {
<<<<<<< HEAD
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
=======
          // icon: 'assets/icons/heroicons/outline/chart-pie.svg',
>>>>>>> matchFront
          label: 'Dashboard',
          route: '/dashboard',
         
        },
        {
<<<<<<< HEAD
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
=======
          // icon: 'assets/icons/heroicons/outline/lock-closed.svg',
>>>>>>> matchFront
          label: 'Auth',
          route: '/auth',
          children: [
            { label: 'Sign up', route: '/auth/sign-up' },
            { label: 'Sign in', route: '/auth/sign-in' },
            { label: 'Forgot Password', route: '/auth/forgot-password' },
            { label: 'New Password', route: '/auth/new-password' },
            { label: 'Two Steps', route: '/auth/two-steps' },
          ],
        },
       
      ],
    },


    {
      group: 'Gestion users',
      separator: true,
      items: [
        {
<<<<<<< HEAD
          icon: 'assets/icons/heroicons/outline/download.svg',
=======
          // icon: 'assets/icons/heroicons/outline/download.svg',
>>>>>>> matchFront
          label: 'users',
          route: '/download',
        },
       
        
      ],
    },

    {
      group: 'Gestion Catalogue',
      separator: true,
      items: [
        {
<<<<<<< HEAD
          icon: 'assets/icons/heroicons/outline/cube.svg',
=======
          // icon: 'assets/icons/heroicons/outline/cube.svg',
>>>>>>> matchFront
          label: 'Catégories',
          route: '/categories',
        },
        {
<<<<<<< HEAD
          icon: 'assets/icons/heroicons/outline/cube-transparent.svg',
=======
          // icon: 'assets/icons/heroicons/outline/cube-transparent.svg',
>>>>>>> matchFront
          label: 'Produits',
          route: '/produits',
        },
      ],
    },
  
    {
      group: 'Commandes et Paniers',
      separator: true,
      items: [
        {
<<<<<<< HEAD
          icon: 'assets/icons/heroicons/outline/shopping-cart.svg',
=======
          // icon: 'assets/icons/heroicons/outline/shopping-cart.svg',
>>>>>>> matchFront
          label: 'Panier',
          route: '/panier',
        },
        {
<<<<<<< HEAD
          icon: 'assets/icons/heroicons/outline/clipboard-check.svg',
=======
          // icon: 'assets/icons/heroicons/outline/clipboard-check.svg',
>>>>>>> matchFront
          label: 'Commandes',
          route: '/commandes',
        },
      ],
    },
  
    {
      group: 'Livraison',
      separator: true,
      items: [
        {
<<<<<<< HEAD
          icon: 'assets/icons/heroicons/outline/truck.svg',
=======
          // icon: 'assets/icons/heroicons/outline/truck.svg',
>>>>>>> matchFront
          label: 'Suivi Livraison',
          route: '/livraison',
        },
      ],
    },
  
    {
      group: 'Statistiques',
      separator: true,
      items: [
        {
<<<<<<< HEAD
          icon: 'assets/icons/heroicons/outline/chart-bar.svg',
=======
          // icon: 'assets/icons/heroicons/outline/chart-bar.svg',
>>>>>>> matchFront
          label: 'Ventes',
          route: '/stats-ventes',
        },
        {
<<<<<<< HEAD
          icon: 'assets/icons/heroicons/outline/trending-up.svg',
=======
          // icon: 'assets/icons/heroicons/outline/trending-up.svg',
>>>>>>> matchFront
          label: 'Performance Produits',
          route: '/performances',
        },
      ],
    },

   
    {
      group: 'Locaux et Evénements ',
      separator: true,
      items: [
        {
<<<<<<< HEAD
          icon: 'assets/icons/heroicons/outline/cog.svg',
=======
          // icon: 'assets/icons/heroicons/outline/cog.svg',
>>>>>>> matchFront
          label: 'Locaux',
          route: '/local',
        },
        {
<<<<<<< HEAD
          icon: 'assets/icons/heroicons/outline/bell.svg',
=======
          // icon: 'assets/icons/heroicons/outline/bell.svg',
>>>>>>> matchFront
          label: 'Evénements',
          route: '/events',
        },
     
      ],
    },
 
 
    {
      group: 'Équipe Match  ',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'Equipe',
<<<<<<< HEAD
          route: '/local',
=======
          route: '/dashboard/equipe',
>>>>>>> matchFront
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Match',
<<<<<<< HEAD
          route: '/events',
        },
     
=======
          route: '/dashboard/match',
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Terrain',
          route: '/dashboard/terrain',
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Planning',
          route: '/dashboard/planning',
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Session',
          route: '/dashboard/session',
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'SessionJeu',
          route: '/dashboard/sessionJeu',
        },
>>>>>>> matchFront
      ],
    },

    {
      group: ' Réservation des Matériels ',
      separator: true,
      items: [
        {
<<<<<<< HEAD
          icon: 'assets/icons/heroicons/outline/cog.svg',
=======
          // icon: 'assets/icons/heroicons/outline/cog.svg',
>>>>>>> matchFront
          label: 'Réservation des équipements ',
          route: '/local',
        },
        {
<<<<<<< HEAD
          icon: 'assets/icons/heroicons/outline/bell.svg',
=======
          // icon: 'assets/icons/heroicons/outline/bell.svg',
>>>>>>> matchFront
          label: 'Gestion de l’inventaire ',
          route: '/events',
        },
     
      ],
    },





    {
      group: ' Médical  ',
      separator: true,
      items: [
        {
<<<<<<< HEAD
          icon: 'assets/icons/heroicons/outline/cog.svg',
=======
          // icon: 'assets/icons/heroicons/outline/cog.svg',
>>>>>>> matchFront
          label: 'Suivi médical des joueurs ',
          route: '/local',
        },
        {
<<<<<<< HEAD
          icon: 'assets/icons/heroicons/outline/bell.svg',
=======
          // icon: 'assets/icons/heroicons/outline/bell.svg',
>>>>>>> matchFront
          label: 'Gestion des autorisations médicales  ',
          route: '/events',
        },
     
      ],
    },

    {
      group: 'Blogging',
      separator: true,
      items: [
        {
<<<<<<< HEAD
          icon: 'assets/icons/heroicons/outline/cog.svg',
=======
          // icon: 'assets/icons/heroicons/outline/cog.svg',
>>>>>>> matchFront
          label: 'Blog',
          route: '/settings',
        },
        {
<<<<<<< HEAD
          icon: 'assets/icons/heroicons/outline/bell.svg',
=======
          // icon: 'assets/icons/heroicons/outline/bell.svg',
>>>>>>> matchFront
          label: 'Comments',
          route: '/gift',
        },
       
      ],
    },
   
  ];
}