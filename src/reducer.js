export const initialState = {
          basket : []
}

//reduce method to sum up the total
export const getBasketTotal = (basket)=>
    basket?.reduce((initial,addedItem)=>addedItem.price + initial, 0)

const reducer = (state, action)=>{

          console.log(action)

          switch(action.type){
                    case 'ADD_TO_BASKET':
                              return{
                                        ...state,
                                        basket: [...state.basket, action.item]
                              }

                              default:
                                return state;
          }
}

export default reducer