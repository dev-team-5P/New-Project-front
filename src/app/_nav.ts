import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    name: 'list etablissement',
    url: '/superadmin/listetablissement',
    icon: 'icon-star',
  },
  {
    name: 'Chat',
    url: '/chat',
    icon: 'icon-speedometer',
  },
  {
    name: 'Etablissement',
    url: '/etablissemnt',
    icon: 'icon-star',
    children: [
      {
        name: 'Add candidat',
        url: '/etablissement/addcandidat',
        icon: 'icon-star',
      },
      {
        name: 'List candidat',
        url: '/etablissement/listcandidat',
        icon: 'icon-star',
      },
      {
        name: 'Mailing',
        url: '/etablissement/mailing',
        icon: 'icon-star',
      },
    ],
  },
  {
    name: 'Setting',
    url: '/Setting',
    icon: 'icon-star',
  },
  {
    name: 'Setting',
    url: '/Settingetab',
    icon: 'icon-star',
  },
  {
    name: 'Setting',
    url: '/candidat',
    icon: 'icon-speedometer',
  },
];
