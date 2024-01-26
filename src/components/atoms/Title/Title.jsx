import './Title.css';
import Icon from '../Icons/Icon';
import classnames from 'classnames';

const Title = ({ level, text, icon , subtitle}) => {
    const textClasses = classnames('icon-text', {
        hasIcontext: icon
    });

    return (
        <>
            {icon && <Icon className={textClasses} type={icon} />}
            {level === 'h1' && <h1>{text}</h1>}
            {level === 'h2' && <h2>{text}</h2>}
            {level === 'h3' && <h3>{text}</h3>}
            {subtitle && <p>{subtitle}</p> }
        </>
    );
};

export default Title;
