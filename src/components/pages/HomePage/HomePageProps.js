// import { Animated } from "react-animated-css";

// const HomePageProps = (props) => {
//   return (
//     <Animated
//       animationIn={props.animationName}
//       animationInDuration={4000}
//       className="flex w-full flex-col justify-center items-centers h-[calc(100vh_-_56px)]"
//     >
//       <header>
//         <h1 className="font-metro text-main-pink-color text-8xl developer-name text-center lg:mb-8">
//           etem Senel
//         </h1>
//         <h4 className="text-center font-nerko text-white text-5xl lg:mb-8">
//           Front-End Developer
//         </h4>
//       </header>
//     </Animated>
//   );
// };

// export default HomePageProps;
import { Animated } from "react-animated-css";

const HomePageProps = (props) => {
  return (
    <Animated
      animationIn={props.animationName}
      animationInDuration={4000}
      className="flex w-full flex-col justify-center lg:pt-36 items-centers h-[calc(100vh_-_56px)]"
    >
      <header className="mb-64">
        <h1 className="font-metro text-main-pink-color text-8xl developer-name text-center">
          etem Senel
        </h1>
        <h4 className="text-center font-nerko text-white text-5xl lg:mb-8">
          Front-End Developer
        </h4>
      </header>
    </Animated>
  );
};

export default HomePageProps;
