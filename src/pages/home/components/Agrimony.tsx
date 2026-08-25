import { assets } from "../../../assets/assets";

function Agrimony() {
  return (
    <div
      id="agtech-operations"
      className="relative w-full h-85 overflow-hidden"
    >
      <img
        src={assets.agrimony}
        alt="Agronomy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 h-full max-w-6xl mx-auto flex flex-col justify-center px-6">
        <span className="text-xs uppercase tracking-widest text-limetext">
          Agtech & Operations
        </span>

        <h1 className="mt-3 text-3xl md:text-4xl font-medium text-white">
          Where Engineering Meets Agronomy.
        </h1>

        <p className="mt-2 max-w-lg text-sm text-white/90">
          At Ile-Nia, we believe the key to defeating seasonal inflation and
          crop failure is technical precision.
        </p>
      </div>
    </div>
  );
}

export default Agrimony;
