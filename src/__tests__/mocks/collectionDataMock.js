import suit from '../../features/_shared/assets/images/suit.jpg';
import shoes from '../../features/_shared/assets/images/shoes.jpg';
import watch from '../../features/_shared/assets/images/watch.jpg';
import wed from '../../features/_shared/assets/images/wed.jpg';
import afri from '../../features/_shared/assets/images/afri.jpg';

export default {
  categories: [
    {
      id: 1,
      name: 'Languages',
      image: suit,
      alt: 'suit',
      items: ['HTML/CSS/SAAS', 'Javascript', 'Java', 'Python', 'Go'],
    },
    {
      id: 2,
      name: 'Data',
      image: wed,
      alt: 'gown',
      items: ['MySQL', 'Mongo DB', 'SQLlite', 'Realm'],
    },
    {
      id: 3,
      name: 'Libraries/Frameworks',
      image: shoes,
      alt: 'shoe',
      items: ['Loafers', 'Sandals'],
    },
    {
      id: 4,
      name: 'African Prints',
      image: afri,
      alt: 'african',
      items: ['Jumper', 'Kaba'],
    },
    {
      id: 5,
      name: 'Accesories',
      image: watch,
      alt: 'watch',
      items: ['Watches', 'Cufflings'],
    },
  ],

  filterCategories: [
    {
      id: 0,
      name: 'All',
      image: null,
      alt: null,
      items: null,
    },
    {
      id: 1,
      name: 'Suits',
      image: suit,
      alt: 'suit',
      items: ['Women suit', 'Men suit'],
    },
    {
      id: 2,
      name: 'Wedding gowns',
      image: wed,
      alt: 'gown',
      items: ['Ball gown', 'Shealth'],
    },
    {
      id: 3,
      name: 'Shoes',
      image: shoes,
      alt: 'shoe',
      items: ['Loafers', 'Sandals'],
    },
    {
      id: 4,
      name: 'African Prints',
      image: afri,
      alt: 'african',
      items: ['Jumper', 'Kaba'],
    },
    {
      id: 5,
      name: 'Accesories',
      image: watch,
      alt: 'watch',
      items: ['Watches', 'Cufflings'],
    },
  ],

  collection: [
    {
      name: 'Suit',
      price: 204,
      categoryId: 1,
      altUrl: suit,
      url:
        'https://images.unsplash.com/photo-1556909114-9375e78a2305?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    },
    {
      name: 'Shoe',
      price: 110,
      categoryId: 3,
      altUrl: shoes,
      url:
        'https://images.unsplash.com/photo-1563373011-d9b2e9af4167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    },
    {
      name: 'Watch',
      price: 350,
      categoryId: 5,
      altUrl: watch,
      url:
        'https://images.unsplash.com/photo-1563433308968-b70adf493e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1472&q=80',
    },
    {
      name: 'Wedding Gown',
      price: 559,
      categoryId: 2,
      altUrl: wed,
      url:
        'https://images.unsplash.com/photo-1563283136-2fbdbf408199?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
    },
    {
      name: 'African wear',
      price: 120,
      categoryId: 4,
      altUrl: afri,
      url:
        'https://images.unsplash.com/photo-1563313269-9dba50bb2203?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
    },
    {
      name: 'Suit',
      price: 50,
      categoryId: 1,
      altUrl: suit,
      url:
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    },
  ],
};
