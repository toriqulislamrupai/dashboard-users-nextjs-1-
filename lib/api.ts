export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string; suite: string; city: string; zipcode: string;
    geo: { lat: string; lng: string };
  };
  company: { name: string; catchPhrase: string; bs: string };
};

const BASE = "https://jsonplaceholder.typicode.com";

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch(`${BASE}/users`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export async function fetchUser(id: string): Promise<User> {
  const res = await fetch(`${BASE}/users/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
}
