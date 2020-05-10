import styled from 'styled-components';
import SearchIcon from '../../../assets/icons/SearchIcon.svg'

const Search = styled.input`
  width: 350px;
  height: 65px;
  padding: 0px 23px 0px 55px;
  background-color: white;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-position: 15px center;
  border: none;
  border-radius: 40px;
  font-size: ${({theme}) => theme.fontSize.m};
  letter-spacing: 0.075em;

  &:focus{
    outline: none;
  }
`;

export default Search;