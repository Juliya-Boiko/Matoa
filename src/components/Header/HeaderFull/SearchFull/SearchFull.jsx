import { SearchBtn } from "components/buttons/SearchBtn";
import { FullForm, FullInput } from './SearchFull.styled';

export const SearchFull = () => { 
  return (
    <FullForm>
      <FullInput type="text" placeholder="search..." />
      <SearchBtn width="20" height="20" />
    </FullForm>
  );
};