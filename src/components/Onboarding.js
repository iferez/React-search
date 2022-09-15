import phone from "../assets/phonee.png";

function Onboarding() {
  return (
    <section className="pt-5">
      <div className="row d-flex align-items-center">
        <div className="col-8">
          <h1 className="text-center">
            The most efficient search engine <br/> for your pocket
          </h1>
          <h5 className="text-center">
            Periodically updated information. So that you never miss the true
            value of our cryptos.
          </h5>
        </div>
        <div className="col-4">
          <img src={phone} alt="Logo bank" />
        </div>
      </div>
    </section>
  );
}

export default Onboarding;
