const Contact = ({ page }) => {
  return page === 5 ? (
    <section className="py-12">
      <h3 className="text-3xl font-bold text-center font-metro text-main-pink-color">
        Contact
      </h3>
      <form className="w-full md:w-8/12 lg:w-6/12 xl:w-4/12 md:mx-auto mt-12">
        <input
          className="w-11/12 h-12 block mx-auto my-6 bg-white rounded-smForContact placeholder:pl-2"
          type="text"
          placeholder="Name"
        />
        <input
          className="w-11/12 h-12 block mx-auto my-6 bg-white rounded-smForContact placeholder:pl-2"
          type="text"
          placeholder="Email"
        />
        <textarea
          className="w-11/12 h-36 block mx-auto my-6 bg-white rounded-smForContact placeholder:p-2"
          cols="30"
          rows="10"
          placeholder="You can always say hi to me :)"
        ></textarea>
        <button className="w-24 h-9 text-white border border-black font-overpass font-bold text-sm block ml-auto mx-6">
          Send
        </button>
      </form>
    </section>
  ) : null;
};

export default Contact;
