export interface AuthState {
  errorMessage: string;
  token: string | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
}

type AuthAction = 
  | {type: 'signIn', payload: {token: string}}
  | {type: 'signUp', payload
  : string}
  | {type: 'addError', payload: string}
  | {type: 'removeError'}
  | {type: 'notAuthenticated'}
  | {type: 'logout'}
  | {type: 'registerPatient', payload: string}
  | {type: 'registerHistory', payload: string}


  export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
      case 'addError':
        return {
          ...state,
          token: null,
          status: 'not-authenticated',
          errorMessage: action.payload
        }
      case 'removeError':
        return {
          ...state,
          errorMessage: ''
        }
      
      case 'signIn': 
        return {
          ...state,
          errorMessage: '',
          status: "authenticated",
          token: action.payload.token
        }

      case 'signUp': 
        return {
          ...state,
          errorMessage: '',
          status: "not-authenticated",
          token: null
        }
      
      case 'registerPatient': 
        return {
          ...state,
          status: 'authenticated',
          errorMessage: action.payload
        }

      case 'logout':
      case 'notAuthenticated': 
        return {
          ...state,
          status: "not-authenticated",
          token: null
        }
    
      default:
        return state;
    }
  }