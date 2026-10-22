export default function DetailView() {
  return (
    <>
      <FetchDataById />
    </>
  );
}

const FetchDataById = async ({ params }) => {
  "use server";
  console.log(params);
};
