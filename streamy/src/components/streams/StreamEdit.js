import React from "react";
import {connect} from 'react-redux';
import {fetchStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component  {
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues)=>{
    console.log(formValues)
  }
  render(){
    if(!this.props.stream)
      return <div>Loading...</div>
    return (<div>
      <h3>Edit a Stream</h3>
      <StreamForm onSubmit={this.onSubmit} />
      </div>);
  }
};

const mapStateToProps = (state,ownProps) => {
  const x = ownProps.match.params.id;
  return {
    stream: state.streams[x]
  };
}

export default connect(mapStateToProps,{fetchStream})(StreamEdit);
