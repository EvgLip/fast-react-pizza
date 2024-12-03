export default function LoadingIndicator ()
{
  return (
    <div className="absolute inset-0 bg-slate-200/40 backdrop-blur-sm flex justify-center items-center a">
      <div className="loader"></div>
    </div>
  );
}
