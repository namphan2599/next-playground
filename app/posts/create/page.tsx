'use client'

import { FormEvent } from "react"



export default function PostCreate() {


  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(e)
  }

  return (
    <div>
      <h1>Create new post</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="w-2/5 flex flex-col">
        <input type="text" placeholder="Title" required />
        <input type="text" placeholder="Body" required />
        <button>Submit</button>
      </form>
    </div>
  )
}