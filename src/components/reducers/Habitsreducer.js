// Reducers For Adding a Habit a Deleting oNe
const initialData ={
    habitlist:[]
}


const HabitReducer  = (state=initialData,action ) =>{


    switch(action.type){
        case "ADD_HABIT":
            const {id,data} = action.payload;

            return {
                ...state,
                habitlist:[
                    ...state.habitlist,
                    {
                        id:id,
                        data:data
                }
            ]
            }


            case "DELETE_HABIT":
            
         const newList =   state.habitlist.filter((elem) => elem.id !== action.id)

            return {
                ...state,
               habitlist:newList
            }


            default :return state;

    }

}

export  default HabitReducer;