import LogoIcon from '../../images/icons/logo-footer.svg'
import { SlArrowUp } from "react-icons/sl";
import { ScrollContainer } from './Scroll.styled';

export const Scroll = () => {
  return (
    <ScrollContainer>
      <img src={LogoIcon} width={120} height={15} alt="Logo" />
      <SlArrowUp size={30} />
    </ScrollContainer>
  );
};