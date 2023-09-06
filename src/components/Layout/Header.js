import classes from "./Header.module.css";
import heroBanner from "../../assets/images/meals.jpg";
function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>Vue Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={heroBanner} alt="A table that is full of delicious food" />
      </div>
    </>
  );
}

export default Header;
