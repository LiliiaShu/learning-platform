"use client";

import { deleteGroup } from "@/app/actions/delete-group";

interface Props {
  id: number;
}
export default function DeleteGroup({ id }: Props) {
  return (
    <button type="button" onClick={() => deleteGroup(id)} className="ml-auto px-3 py-1  cursor-pointer">
      Delete
    </button>
  );
}
