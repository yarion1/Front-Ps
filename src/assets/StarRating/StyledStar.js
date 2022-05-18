import styled from 'styled-components'

export const Select = styled.input `
type="radio" 
value={ratingValue} 
onClick={() => setRating(ratingValue)}    
display:none
`;

export const Base = styled.label `
margin: 5px 0px 0px 8px;
`;