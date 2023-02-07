import UserIcon from '../../images/icons/user.svg';

export const AuthBtn = ({ authHandler, width, height }) => {
  return (
    <button type="button" onClick={authHandler}>
      <img src={UserIcon} width={width} height={height} alt="Log in icon" />
      Log In
    </button>
  );
};