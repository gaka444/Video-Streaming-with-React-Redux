import React from "react";
import {connect} from 'react-redux';
import flv from 'flv.js';
import {fetchStream} from '../../actions';

class StreamShow extends React.Component{
  constructor(props){
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }

  componentWillUnmount(){
    this.player.destroy();
  }

  componentDidUpdate(){
    this.player = flv.createPlayer({
      type : 'flv',
      url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }
  render(){
    if(!this.props.stream)
      return <div>Loading..</div>
    return(
      <>
      <video ref={this.videoRef} controls style={{width: '100%'}}/>
      <div>{this.props.stream.title}</div>
      <div>{this.props.stream.description}</div>
      </>
    )
  }
}

const mapStateToProps = (state,ownProps) => {
    return {
      stream : state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream})(StreamShow);
