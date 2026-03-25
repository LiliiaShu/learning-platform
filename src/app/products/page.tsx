import Product from "@/types/Product";
import Link from "next/link";

export default async function Products() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    next: { revalidate: 60 }, // если не указали - будет SSG, если написали - ISR
  });
  const products: Product[] = await res.json();
  console.log("Hello");
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// SERVER COMPONENTS
// SSG - static site generation - генерируется один раз при билде - и дальше не меняется
// SSR - server side rendering - на каждый запрос
// ISR - incremental static regeneration - например, по таймеру или при каком-то условии
// {next: {revalidate: 60}} то есть каждые 60 сек обновляется информация
