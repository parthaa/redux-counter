import {connect} from "react-redux";
import Counter from "./Counter";
import {increaseAction, decreaseAction} from "./actions";

function mapStateToProps(state) {
  return {
    countValue: state.count
  };
}
 
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    increaseCount: function() {
      return dispatch(increaseAction);
    },
    decreaseCount: function() {
      return dispatch(decreaseAction);
    }
  };
}
 
// The HOC
var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
 
export default connectedComponent;
