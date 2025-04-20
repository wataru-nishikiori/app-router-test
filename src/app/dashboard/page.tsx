'use client';

import { useAuth } from "@/features/auth/hooks/useAuth";

export default function DashboardPage() {
  const { user, isLoading, isError } = useAuth();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load user info</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user.name}！</p>
      <p>email：{user.email}</p>
    </div>
  );
}
