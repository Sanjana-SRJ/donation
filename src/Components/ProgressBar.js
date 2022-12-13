import ProgressBar from 'react-bootstrap/ProgressBar';

function AnimatedExample(props) {
  return <ProgressBar animated now={props.percent} />;
}

export default AnimatedExample;