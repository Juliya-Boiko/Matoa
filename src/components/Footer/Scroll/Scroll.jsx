import LogoIcon from '../../../images/icons/logo-footer.svg';
import { SlArrowUp } from "react-icons/sl";
import { ScrollContainer } from './Scroll.styled';

export const Scroll = () => {

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };

  return (
    <ScrollContainer onClick={goToTop}>
      <img src={LogoIcon} width={120} height={15} alt="Logo" />
      <SlArrowUp size={30} />
      <span>scroll to top</span>
    </ScrollContainer>
  );
};