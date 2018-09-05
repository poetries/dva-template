import {
    queryPoetry
} from '../services';

export default {
  namespace: 'poetry',
  state: {
    poetryList:[]
  },
   subscriptions: {
     
  },
  reducers: {
    savePoetryList(state,action){
      return {
        ...state,
        poetryList:action.payload.list
      }
    },
  },
  effects: {
        // 异步 dispatch(fetchPoetry())最后返回的结果经由savePoetryList处理
    *fetchPoetry(action,{call, put}){
        let list = yield call(()=>queryPoetry())
        yield put({type:'savePoetryList',payload:{list}})
        }
    }
};
