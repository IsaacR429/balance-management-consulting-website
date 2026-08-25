import Container from "../../../components/ui/Container.jsx";
import heroImage from "../../../assets/images/impact/impact-hero.webp";

function ImpactHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#020B1C] text-white">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.2]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#020B1C] via-[#020B1C]/94 to-[#03142E]/65"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <Container className="relative">
        <div className="grid min-h-[450px] items-end gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-24 lg:py-24">
          <div>
            <div className="mb-6 h-px w-11 bg-[#6FA8FF]" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#79ACFF]">
              Creating Impact
            </p>

            <h1 className="mt-7 max-w-[850px] text-[3rem] font-medium leading-[1.02] tracking-[-0.055em] sm:text-[3.8rem] lg:text-[4.4rem]">
              Turning transformation
              <br />
              into measurable
              <br />
              business impact.
            </h1>
          </div>

          <p className="max-w-[590px] text-[1.05rem] leading-8 text-[#B5C3D6] lg:pb-2">
            Balance focuses transformation on the outcomes that matter:
            stronger resilience, better control, reduced technology risk and
            more effective execution.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default ImpactHeroSection;
