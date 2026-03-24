import Category from "@/types/Category";

export default async function Categories() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories", {
    next: { revalidate: 60 },
  });
  const categories: Category[] = await res.json();
  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}
