export default function ImgIcon1(props) {
  return (
    <section className="flex">
      <img src={props.src} alt="" />
      <p>{props.name} </p>
    </section>
  );
}


