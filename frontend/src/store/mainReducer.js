import * as actionTypes from './actionTypes.js';
import {updateObject} from './utility.js';

const initialState = {
  authors: false,
  authorsList: {},
  choosenAuthors: {},
  statsSummary: {},
  err: false,
  loading: false,
  loadingStat: false
}

const maninReducer = (state = initialState, action) => {

  let newValue =((
      {
        [actionTypes.ADD_AUTHOR]: addAuthor(state, action.id),
        [actionTypes.REMOVE_AUTHOR]: removeAuthor(state, action.id),
        [actionTypes.COPY_ALL]: copyAll(state),
        [actionTypes.CLEAR_CHOOSEN]: {authorsList: {...state.authors}, choosenAuthors: {}, statsSummary: {}},
        [actionTypes.FETCH_AUTHORS_STATUS]: {loading: true},
        [actionTypes.FETCH_AUTHORS_SUCCESS]: authorsChange(action.data),
        [actionTypes.FETCH_AUTHORS_FAIL]: {err: action.err, loading: false},
        [actionTypes.FETCH_STATS_STATUS]: {loadingStat: true},
        [actionTypes.FETCH_STATS_SUCESS]: {statsSummary: action.data, loadingStat: false},
        [actionTypes.FETCH_STAT_FAIL]: {err: action.err, loadingStat: false},
        [actionTypes.REMOVE_STATS]: {statsSummary:{}},
        [actionTypes.ERROR_RESET]: {err: false}
      }
    )[action.type] || false);



      return newValue ? updateObject(state, newValue) : state;

}

const authorsChange=(data)=>{
    let authorCh = {}
    for(let item in data){
      authorCh[data[item].id_author]=data[item].author
    }
  return {
      authors: authorCh,
      loading: false
    }
}

const addAuthor = (state, id)=> {
  if(id!=='all'){
      let choosen = {...state.choosenAuthors}
          choosen[id] = state.authors[id]
      let authors = {...state.authorsList}
          delete authors[id]
  return {
    authorsList: authors,
    choosenAuthors: choosen
    }
  }else{
    return {
      authorsList: {},
      choosenAuthors: {...state.authors}
    };
  }
}

const removeAuthor = (state, id)=> {
      let updateChosen ={...state.choosenAuthors}
            delete updateChosen[id]
      let updateAuthors = {...state.authorsList}
             updateAuthors[id]=state.authors[id]
              return {
      authorsList: updateAuthors,
      choosenAuthors: updateChosen
    };
 }

const copyAll = (state) =>{
      //console.log('Copy all', [...state.authors])
    return {
      authorsList: {...state.authors}
    };

}

export default maninReducer;
