export default function Info({ data }) {
  console.log(data);
  return !data
    ? "No Data"
    : data?.works
        ?.filter((w) => w.type === "Song")
        ?.map((w) => <div>{w.title}</div>);
}
