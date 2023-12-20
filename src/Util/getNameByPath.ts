export default function getNameByPath(path: string) {
  const [name, id] = path.split("/");

  if (!id) {
    return name.toUpperCase();
  }

  return name.toUpperCase() + id;
}
