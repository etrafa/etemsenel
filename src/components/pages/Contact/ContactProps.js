import { Animated } from "react-animated-css";
import emailjs from "emailjs-com";

const ContactProps = (props) => {
  const sendEmailHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bb59fs9",
        "template_s9q0d1t",
        e.target,
        "PUeQmZQnpZGccvH3S"
      )
      .then(
        () => {
          alert("Thank you for contacting me!");
        },
        () => {
          alert("An error happened. Please try again.");
        }
      );
    e.target.reset();
  };

  return (
    <Animated animationIn={props.animationName} animationInDuration={4000}>
      <div className="py-32 lg:h-[calc(100vh_-_56px)] lg:flex lg:flex-col lg:justify-center lg:items-center lg:pb-40">
        <h3 className="text-3xl font-bold text-center font-metro text-main-pink-color">
          Contact
        </h3>
        <form
          onSubmit={sendEmailHandler}
          className="w-full md:w-8/12 lg:w-6/12 xl:w-4/12 md:mx-auto mt-12"
        >
          <input
            className="w-11/12 h-12 block mx-auto my-6 bg-white rounded-smForContact placeholder:pl-2"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="w-11/12 h-12 block mx-auto my-6 bg-white rounded-smForContact placeholder:pl-2"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            className="w-11/12 h-36 block mx-auto my-6 bg-white rounded-smForContact placeholder:p-2"
            cols="30"
            rows="10"
            name="message"
            required
            placeholder="You can always say hi to me :)"
          ></textarea>
          <button className="w-24 h-9 bg-white hover:bg-main-pink-color hover:text-black border border-black font-overpass font-bold text-sm block ml-auto mx-6">
            Send
          </button>
        </form>
        <div className="flex w-full justify-center items-center gap-12 mt-8">
          <a
            href="https://www.linkedin.com/in/etem-senel/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="w-10 h-10 fill-white cursor-pointer hover:fill-main-pink-color"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
            </svg>
          </a>
          <a href="https://github.com/etrafa" target="_blank" rel="noreferrer">
            <svg
              className="w-10 h-10 fill-white cursor-pointer hover:fill-main-pink-color"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
            </svg>
          </a>
          <a href="https://codepen.io/etrafa" target="_blank" rel="noreferrer">
            <svg
              className="w-10 h-10 fill-white cursor-pointer hover:fill-main-pink-color"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z" />
            </svg>
          </a>
        </div>
      </div>
    </Animated>
  );
};

export default ContactProps;
