import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

class Statement extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { statementList } = this.props;
    return (
      <div>
        <h1>{statementList.statement}</h1>
      </div>
    );
  }
}

Statement.propTypes = {
  statementList: PropTypes.object
}

const mapStateToProps = (state) => ({
  statementList: state
});

export default connect(mapStateToProps)(Statement);