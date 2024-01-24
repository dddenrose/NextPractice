export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params?.id}`,
    {
      headers: {
        "Content-Type": "application/json",
        "API-Key": "",
      },
    }
  );
  const data = await res.json();

  return Response.json({ data });
}