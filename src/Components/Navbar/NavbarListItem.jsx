const NavbarListItem = (props) => {
  const { handleScroll, attr } = props;

  return (
    <li className="nav-list-item" onClick={(e) => handleScroll(attr)}>
      {props.text}
    </li>
  );
};

export default NavbarListItem;
