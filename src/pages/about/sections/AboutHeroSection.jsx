import Container from "../../../components/ui/Container.jsx";
import heroImage from "../../../assets/images/about/about-hero.webp";

function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#020B1C] text-white">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.36]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#020B1C] via-[#020B1C]/88 to-[#020B1C]/30"
      />

      <Container className="relative">
        <div className="grid min-h-[450px] items-end gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24 lg:py-24">
          <div>
            <div className="mb-6 h-px w-11 bg-[#6FA8FF]" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#79ACFF]">
              About Balance
            </p>

            <h1 className="mt-7 max-w-[820px] text-[2.7rem] font-medium leading-[1.02] tracking-[-0.055em] sm:text-[3.8rem] lg:text-[4.4rem]">
              Where technology
              <br />
              ambition meets
              <br />
              <span className="whitespace-nowrap">human judgment.</span>
            </h1>
          </div>

          <p className="max-w-[580px] text-[1.05rem] leading-8 text-[#C0CDDC] lg:pb-2">
            Balance combines technology expertise, business understanding and
            practical execution to help organizations navigate complex change
            with greater clarity, confidence and control.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default AboutHeroSection;
