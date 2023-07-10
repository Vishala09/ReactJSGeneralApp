import { createSlice, isAnyOf ,createAction} from '@reduxjs/toolkit';

const login = createAction('LOGIN_USER')
const logout = createAction('LOGOUT_USER')

const loginSlice = createSlice({
    name: 'login',
    initialState: {username:localStorage.getItem('fullname'),email:localStorage.getItem('email')},
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(login, (state, action) => {
                localStorage.setItem('fullname',action.payload.fullname)
                localStorage.setItem('email',action.payload.email)
                state.username= action.payload.fullname;
                state.email= action.payload.email;
                return state;
        })
        .addCase(logout, (state, action) => {
                        localStorage.removeItem('fullname');localStorage.removeItem('email')
                        state={}
                        return state;
        })
        .addDefaultCase((state, action) => {return state})
    },
  })
  loginSlice.actions = {login,logout}
  export {login,logout}
  export default loginSlice.reducer;


// const loginSlice = createSlice({
//     name: "login",
//     initialState: {
//         username:localStorage.getItem('fullname'),
//         email:localStorage.getItem('email')
//     },
//     reducers: {
//         save: (state, param) => {
//             const { payload } = param;
//             state = {...state, payload};
//         },
//     },
//     extraReducers: (builder) => {
//         return builder.addMatcher(
//           isAnyOf(
//             'LOGOUT_USER','GET_USER'
//           ),
//           (state, action) => {
//             switch(action.type)
//             {
//                 case 'LOGOUT_USER':
//                     {
//                         localStorage.removeItem('fullname');localStorage.removeItem('email')
//                         state={}
//                         return {...state};
//                     }
//                 case 'GET_USER':
//                     {
//                         return {...state};
//                     }
//                 default:
//                     {
//                         return state;
//                     }
//             }
//           }
//         );
//       }
// });
// const { actions, reducer } = loginSlice;
// export const { save } = actions;
// export default reducer;

// let initialState = {
//     username:localStorage.getItem('fullname'),
//     email:localStorage.getItem('email')
// }

// const LoginReducer = (state=initialState,action) => {
//     switch(action.type)
//     {
//         case 'LOGIN_USER':
//             {
//                 localStorage.setItem('fullname',action.payload.fullname)
//                 localStorage.setItem('email',action.payload.email)
//                 state.username= action.payload.fullname;
//                 state.email= action.payload.email;
//                 return {...state};
//             }
//         case 'GET_USER':
//             {
//                 return {...state};
//             }
//         case 'LOGOUT_USER':
//             {
//                 localStorage.removeItem('fullname');localStorage.removeItem('email')
//                 state=initialState;
//                 return {...state};
//             }
//         default:
//              return state;
//     }
// }

// export default LoginReducer;