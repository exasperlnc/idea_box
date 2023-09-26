// Ideas.js
import Card from '../Card/Card';
import './Ideas.css';

function Ideas(props){
  const { name } = props;

  return (
      <div className='ideas-container'>
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Ideas;