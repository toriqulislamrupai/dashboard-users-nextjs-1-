import { fetchUsers } from "@/lib/api";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import UserList from "@/components/UserList";

type Props = {
  searchParams: { q?: string; page?: string };
};

const PAGE_SIZE = 5;

export default async function UsersPage({ searchParams }: Props) {
  const q = (searchParams.q ?? "").toLowerCase();
  const page = Math.max(1, parseInt(searchParams.page ?? "1", 10));
  const users = await fetchUsers();

  const filtered = users.filter((u) => {
    const hay = `${u.name} ${u.email}`.toLowerCase();
    return hay.includes(q);
  });

  const start = (page - 1) * PAGE_SIZE;
  const paged = filtered.slice(start, start + PAGE_SIZE);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <h1 className="text-2xl text-white animate-pulse font-semibold">Users</h1>
        <div className="w-full md:w-80">
          <SearchBar />
        </div>
      </div>

      {/* Animation moved into UserList */}
      <UserList users={paged} />

      <Pagination total={filtered.length} pageSize={PAGE_SIZE} />
    </div>
  );
}
