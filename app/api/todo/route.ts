export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
    headers: {
      "Content-Type": "application/json",
      "API-Key": "",
    },
  });
  const data = await res.json();

  return Response.json({ data });
}