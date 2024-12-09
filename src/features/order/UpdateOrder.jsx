import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';

export default function UpdateOrder ({ order })
{
  const fetcher = useFetcher();

  return (
    <fetcher.Form method='PATCH' className="float-right">
      <Button type="primarySmall">
        Добавить приоритетность
      </Button>
    </fetcher.Form>
  );
}
