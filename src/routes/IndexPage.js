import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';

class IndexPage extends React.Component {
  render() {
    const { dispatch, count } = this.props;
    
    return (
      <div className={styles.normal}>
        <div className={styles.record}>
         Highest Record: {count.record} 
        </div>
        <div className={styles.current}>
         {count.current}
        </div>
        <div className={styles.button}>
          <button onClick={() => dispatch({ type: 'count/add' }) } >
                 +
          </button>
          <button onClick={() => dispatch({ type: 'count/minus' }) } >
                 -
          </button>
          <button onClick={() => dispatch({ type: 'count/async' }) } >
              addAsync
          </button>
          <button onClick={() => dispatch({ type: 'count/fetchPoetry' }) } >
          fetchPoetry
         </button>
          
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { count: state.count };
} // 获取state

export default connect(mapStateToProps)(IndexPage);

