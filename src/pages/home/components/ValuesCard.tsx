function ValuesCard(props: {
  icon: string;
  header: string;
  subHeader: string;
  description: string;
}) {
  return (
    <div className="h-full w-full bg-white border border-borderline rounded-2xl shadow-sm p-6 space-y-2.5">
      <img src={props.icon} alt="icon" />

      <span className="flex flex-col gap-1.5">
        <p className="text-[20px] font-bold">{props.header}</p>
        <p className="text-sub font-semibold tracking-widest text-xs">
          {props.subHeader.toUpperCase()}
        </p>
      </span>

      <p className="text-sm">{props.description}</p>
    </div>
  );
}

export default ValuesCard;
