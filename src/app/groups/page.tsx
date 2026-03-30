import DeleteGroup from "@/components/delete-group-btn";
import { db } from "@/db";
import { groupsTable } from "@/db/schema";

export default async function Groups() {
  const groups = await db.select().from(groupsTable);
  return (
    <div>
      <h2 className="text-center text-4xl text-blue-500 font-bold tracking-wide">
        Groups
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 font-bold">
        {groups.map((group) => (
          <li
            key={group.id}
            className="flex flex-col items-center w-full transition-all justify-between p-4 h-auto border rounded-2xl text-blue-400 bg-gray-100 shadow"
          >
            {group.name}
            <DeleteGroup id={group.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
