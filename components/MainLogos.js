import Image from "next/image";

export function MainLogos() {
  return (
    <div className="fullcenter">
      <div className="logos">
        <Image
          className="logo"
          src="/logo.png"
          alt="Pablo engo logo"
          width={280}
          height={280}
          priority />
        <Image
          className="loop"
          src="/loop-portada.gif"
          alt="Portada tipo video"
          width={280}
          height={280}
          priority />

        <h2 className="dop">director of photography</h2>
      </div>
    </div>
  );
}
