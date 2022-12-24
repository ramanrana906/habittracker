// All the Actions to be Done
export const addHabit = (data) =>{

    return {
        type: "ADD_HABIT",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }

}

export const deleteHabit = (id) =>{

    return {
        type: "DELETE_HABIT",
        id
    }

}