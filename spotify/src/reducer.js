export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item : null,
    token : "BQCIFMwUw8Wn4mfQOdFew1c9jTjabeH8_oFs6FMCEBmjYfkDnxloTGUCRkLHSxSldK1XxQSQ2Aw9ITXHYl035xJ9k_moye_bxNCN8X0LmYZxMiqZSxr-rY-2gabR5QH0EwqfDBYHAE_UX-MsVV5LwazFBu3png2JGaSPK2l_vmNk3-6N3-lAjxbUe9Ds-49Q0c3iyeDwlnAFnu9bSjt3vg"
};

export const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            }

        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
        default:
            return state;
            
    }

};

export default reducer;