import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
export default function HomePage({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  console.log('API_URL:', API_URL);
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  // return events
  return {
    props: { events },
    revalidate: 1,
  };
}
