import { useRouter } from "next/router";
import NotFound from "../components/NotFound";

const Error404 = () => {
  const router = useRouter();

  //   useEffect(() => {
  //     setTimeout(() => {
  //       router.push("/pokedex/pokemon");
  //     }, 100000);
  //   }, []);
  return (
    <div className="">
      <NotFound />
    </div>
  );
};

export default Error404;
