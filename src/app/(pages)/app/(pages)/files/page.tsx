import Documents from '~/components/app/documents';

export default async function Page() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Files</h1>
      <Documents />
    </div>
  );
}
