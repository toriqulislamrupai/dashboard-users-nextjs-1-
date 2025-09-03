import UserDetailClient from "@/components/UserDetailClient";
import { fetchUser } from "@/lib/api";

type Props = { params: { id: string } };

export default async function UserDetailPage({ params }: Props) {
  const user = await fetchUser(params.id);

  return <UserDetailClient user={user} />;
}
