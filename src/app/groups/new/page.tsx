import { createGroup } from "@/app/actions/create-group";

export default function CreatGroup() {
  return (
    <div>
      <h2>Create Group</h2>
      <form action={createGroup}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Frontend" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
