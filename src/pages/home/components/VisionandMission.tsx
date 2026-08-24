function VisionandMission(props: {
  image: string;
  header: string;
  description: string;
}) {
  return (
    <div className="group w-full h-130.75 rounded-2xl shadow-sm relative overflow-hidden cursor-pointer">
      <img
        src={props.image}
        alt="icon"
        className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
      />

      <div className="w-full px-3 absolute bottom-12 flex flex-col gap-2 text-white">
        <p className="text-2xl font-semibold">{props.header}</p>
        <p className="text-sm">{props.description}</p>
      </div>
    </div>
  );
}

export default VisionandMission;
