import { CompactForm, CompactInput } from './SearchCompact.styled';
import { SearchBtn } from '../../../buttons/SearchBtn';

export const SearchCompact = () => {
  return (
    <CompactForm>
      <CompactInput type="text" placeholder='search...' />
      <SearchBtn width="20" height="20" />
    </CompactForm>
  );
};