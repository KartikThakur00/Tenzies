function Die(props) {
    const styles={
        backgroundColor: props.isHeld ? "#59E391" : "#ffffff"
    }
  return (
    <div
      className="die-face"
      style={styles}
      onClick={props.handle}
    >
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
}
export default Die;
