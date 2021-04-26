import { useRouter } from 'next/router';

export default function EventPage() {
  const router = useRouter();
  console.log('router:', router)
  return (
    <div>
      <h1>My Event</h1>
      <h3>{router.query.id}</h3>
    </div>
  );
}
