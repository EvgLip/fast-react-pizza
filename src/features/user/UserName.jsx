import { useSelector } from "react-redux";

export default function UserName ()
{
  const userName = useSelector(state => state.user.username);

  if (!userName) return null;

  return (
    <p className="text-sm font-semibold">
      {userName}
    </p>
  );
}
