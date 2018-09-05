import {delay} from '../utils/delay'
import key from 'keymaster'
import request from '../utils/request';

export default {

  namespace: 'count',

  state: {
    record: 0,
    current: 0,
    poetryList:[]
  },

   subscriptions: {
      keyboardWatcher({ dispatch }) {
          key('⌘+up, ctrl+up', () => { dispatch({type:'add'}) });
      },
  },

  effects: {
    *addAsync(action, {call, put}){
      yield call(delay,1000)
      yield put({type:'async'})
    },
    *fetch({call, put}){
      let {data} = yield call(request('https://easy-mock.com/mock/5b7fd63f719c7b7241f4e2fa/tangshi/tang-shi'))
      yield put({type:'fetchPoetry',payload:{data:123}})
    }
  },

  reducers: {
    add(state) {
      const newCurrent = state.current + 1;
      return { ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent,
      };
    },
    minus(state) {
      return { ...state, current: state.current - 1 };
    },
    async(state){
      return { ...state, current: state.current + 10 };
    },
    fetchPoetry(state,action){
      console.log(action)
      return {
        ...state,
        poetryList:action.payload
      }
    },
  },

};
