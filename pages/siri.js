import { withRouter } from "next/router";

export default withRouter(props => {
  const q = props.router.query.q || "...drawing a blank, here";

  return <p>Say it loud, I'm a disembodied intelligence and I'm {q}!</p>;
});
