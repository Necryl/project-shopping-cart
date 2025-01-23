import "./App.css";
import PropTypes from "prop-types";

function App({ dataPage }) {
  return <div id="App">{dataPage}</div>;
}

App.propTypes = {
  dataPage: PropTypes.string,
};

export default App;
