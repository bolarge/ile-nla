function CropCatalog(props: {
  title: string;
  titlesub: string;
  className: string;
}) {
  return (
    <div
      className={`${props.className} h-10.5 w-full rounded-t-lg shadow-sm flex items-center justify-center text-sm`}
    >
      <p className="hidden md:block">{props.title}</p>
      <p className="md:hidden">{props.titlesub}</p>
    </div>
  );
}

export default CropCatalog;
