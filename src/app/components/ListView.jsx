import { Suspense } from "react";

const ListView = () => {
  return (
    <div>
      <Suspense fallback="loading...">
        <FetchData />
      </Suspense>
    </div>
  );
};

export default ListView;

const FetchData = async () => {
  // "use server";
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products.map((product, index) => (
    <div key={index}>{product.brand}</div>
  ));
};
