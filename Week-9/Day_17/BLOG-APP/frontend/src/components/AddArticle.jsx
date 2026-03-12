import React from 'react'
import { useForm } from 'react-hook-form'
function AddArticle() {
  const {register, handleSubmit, reset}=useForm()
  const onSubmit=(data)=>{
    console.log(data)
    reset()
  }
  return (
    <div>
      <h1>AddArticle</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name='title' placeholder="Title" {...register('title')} />
        <select name="category" id="" {...register('category')}>
          <option value="technology">Technology</option>
          <option value="sports">Sports</option>
          <option value="entertainment">Entertainment</option>
        </select>
        <textarea name='content' placeholder="Content" {...register('content')} />
        <button type="submit">Publish Article</button>
      </form>
    </div>
  )
}

export default AddArticle