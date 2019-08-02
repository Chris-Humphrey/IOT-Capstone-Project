import { COL_ADD_PLANT, COL_REMOVE_PLANT, DISPLAY_COL_ITEMS} from '../actions/types';

const Initial_State = {
    collection: [],
    addedToCollection: "",
    addedToCollectionError: ""
}

let collectionReducer = (state = Initial_State, action) => {
  
    
    switch(action.type){
        case COL_ADD_PLANT:
            console.log(`inside of reducer ${action.payload}`)
            return {
                ...state,
                collection: state.collection.concat({
                    plant: action.payload
                })
            }
        case DISPLAY_COL_ITEMS:
            return {
                ...state,
                collection: state.collection.concat({
                    plant: action.payload
                })
            }
            
        case COL_REMOVE_PLANT:

            console.log(`inside of col remove plant ${action.payload}`)

            let newCollection = state.collection.filter((plant)=>{
                return plant.name !== action.payload.name
                })
            return  {
                ...state,
                collection: newCollection
            }
        default:
            return state;
    }
}

export default collectionReducer;