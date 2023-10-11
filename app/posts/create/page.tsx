


export default function PostCreate() {


  async function create(formData: FormData) {
    console.log(formData)
  }

  return (
    <div>
      <h1>Create new post</h1>
      <form className="w-2/5 flex flex-col">
        <input type="text" placeholder="Title" required />
        <input type="text" placeholder="Body" required />
        <button>Submit</button>
      </form>
    </div>
  )
}