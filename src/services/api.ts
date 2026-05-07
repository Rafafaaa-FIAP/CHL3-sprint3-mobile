import { Clinic } from '../types/clinic';

export const clinicsMock: Clinic[] = [
  {
    id: 1,
    name: 'Clínica Vida',
    specialty: 'Cardiologia',
    address: 'Av. Paulista, 1000',
    phone: '(11) 99999-9999',
    image:
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3',
    favorite: false,
  },

  {
    id: 2,
    name: 'Care Medical',
    specialty: 'Pediatria',
    address: 'Rua Augusta, 500',
    phone: '(11) 98888-8888',
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514',
    favorite: false,
  },

  {
    id: 3,
    name: 'São Lucas Saúde',
    specialty: 'Ortopedia',
    address: 'Av. Rebouças, 200',
    phone: '(11) 97777-7777',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
    favorite: false,
  },
];