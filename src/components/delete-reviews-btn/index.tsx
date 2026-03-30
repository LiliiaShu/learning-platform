"use client";

import { deleteReviews } from "@/app/actions/delete-reviews";

interface Props {
  id: number;
}

export default function DeleteReviews({ id }: Props) {
  return (
    <button type="button" onClick={() => deleteReviews(id)} className="ml-auto px-3 py-1  cursor-pointer">
      Delete
    </button>
  );
}
