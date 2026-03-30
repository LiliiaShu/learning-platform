import createReviews from "@/app/actions/create-reviews";

export default function CreateReviews() {
  return (
    <div>
      <h2>Create reviews</h2>
      <form action={createReviews}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" placeholder="Title" />
        <label htmlFor="content">Content</label>
        <input type="text" name="content" placeholder="Content" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
