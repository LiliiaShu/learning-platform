import Category from "@/types/Category";
import Link from "next/link";

export default async function Categories() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories", {
    next: { revalidate: 60 },
  });
  const categories: Category[] = await res.json();
  const cleanCategories = categories.slice(0, 5);
  return (
    <div>
      <ul>
        {cleanCategories.map((category) => (
          <li key={category.id}>
            <Link href={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
