import styled from 'styled-components';

const Card = styled.div`
    background-color: ${props => 
        props.myTheme === 'dark' ? 'black' : 'blue'};
    color:white;
    padding:10px;
    margin:5px;
`;

// const Card = () => {
//     return (
//         <div></div>
//     );
// };

export default Card;