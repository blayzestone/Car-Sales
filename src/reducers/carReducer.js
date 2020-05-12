import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/featureActions';

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

export const carReducer = (state = initialState, action) => {
  const getPriceOfAdditionals = (additionals = []) => {
    return additionals.reduce((accumulator, additionals) => {
      return accumulator + additionals.price;
    }, 0);
  }

  switch (action.type) {
    case ADD_FEATURE:
      const feature = state.additionalFeatures.find(feature => {
        return feature.id === action.payload;
      });
      const uniqueFeatures = [ // Creates a new array from the car features array that has no duplicates
        ...new Set([
          ...state.car.features,
          feature
        ])
      ]
      return {
        ...state,
        additionalPrice: getPriceOfAdditionals(uniqueFeatures),
        car: {
          ...state.car,
          features: uniqueFeatures
        }
      }
    case REMOVE_FEATURE:
      const filteredFeatures = state.car.features.filter(feature => {
        return feature.id !== action.payload;
      });

      return {
        ...state,
        additionalPrice: getPriceOfAdditionals(filteredFeatures),
        car: {
          ...state.car,
          features: filteredFeatures
        }
      }
    default:
      return state;
  }
}