import { db } from "@/db";
import { groupsTable } from "@/db/schema";

export default async function Groups() {
  const groups = await db.select().from(groupsTable);
  return (
    <div>
      <h2 className="text-center text-3xl text-blue-500 font-bold">Groups</h2>
      <ul className="flex flex-col gap-4 p-4 font-bold">
        {groups.map((group) => (
          <li key={group.id} className="border rounded-2xl text-center w-30 h-10 text-blue-400 bg-gray-100 shadow">{group.name}</li>
        ))}
      </ul>
    </div>
  );
}
