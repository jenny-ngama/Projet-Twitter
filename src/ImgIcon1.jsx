export default function ImgIcon1(props) {
  return (
    <section className="flex gap-5 pt-5 ml-40">
      <img src={props.src} alt="" />
      <p>{props.name} </p>
    </section>
  );
}


