import './Title.css';
import Icon from '../Icons/Icon';

const Title = ({ level, text, icon }) => {
  return (
    <>
      {icon && <Icon type={icon} />}
      {level === 'h1' && <h1>{text}</h1>}
      {level === 'h2' && <h2>{text}</h2>}
      {level === 'h3' && <h3>{text}</h3>}
    </>
  );
};

export default Title;