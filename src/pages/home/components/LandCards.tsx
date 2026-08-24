function LandCards(props: {
  className?: string;
  header: string;
  description: string;
}) {
  return (
    <div
      className={`${props.className} w-full rounded-lg text-white px-4 flex items-center h-25.5`}
    >
      <span className="space-y-1">
        <p className="text-2xl font-bold">{props.header}</p>
        <p className="text-xs">{props.description}</p>
      </span>
    </div>
  );
}

export default LandCards;
