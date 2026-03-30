import DeleteReviews from "@/components/delete-reviews-btn";
import { db } from "@/db";
import { reviewsTable } from "@/db/schema";

export default async function Reviews() {
  const reviews = await db.select().from(reviewsTable);
  return (
    <div>
      <h2 className="text-center text-4xl font-bold">Reviews</h2>
      <ul className="flex flex-col flex-wrap gap-4 p-4 font-bold">
        {reviews.map((reviews) => (
          <li key={reviews.id} className="flex flex-col items-center w-full transition-all justify-between p-4 h-auto border rounded-2xl text-blue-400 bg-gray-100 shadow">
            {reviews.title}
            <DeleteReviews id={reviews.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
