import React from "react";
import Modal from '../Modal';
import history  from "../../history";
import {fetchStream, deleteStream} from '../../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class StreamDelete extends React.Component{
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }
  renderActions(){
    return (
      <>
        <button onClick={()=> this.props.deleteStream(this.props.match.params.id)} className='ui button primary'>Delete</button>
        <Link to='/' className='ui button'>Cancel</Link>
      </>
    )
  }
  render(){
    const des = !this.props.stream ? 'Are you sure you want to delete the stream with title:' : `Are you sure you want to delete the stream with title : ${this.props.stream.title}`;
    return (
      <Modal onDismiss={()=>history.push('/')} title="Delete Stream" description={des} actions={this.renderActions()} />
    );
  }
};

const mapStateToProps = (state,ownProps) => {
  return {
    stream : state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
