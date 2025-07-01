import InputField from '../components/InputField'
import SelectedField from '../components/SelectedField'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { useAddVinylMutation } from '../redux/API/vinylAPI.js'

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const [imageFile, setImageFile] = useState(null)
  const [addVinyl, { isLoading, isError }] = useAddVinylMutation()
  const [imageFileName, setImageFileName] = useState('')

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImageFile(file)
      setImageFileName(file.name)
    }
  }

  const onSubmit = async (data) => {
    const NewProductData = {
      ...data,
      //  coverImage: imageFileName,
    }
    console.log('DATA', NewProductData)
    try {
      await addVinyl(NewProductData).unwrap()
      Swal.fire({
        title: 'Product added',
        text: 'Product is uploaded successfully!',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: "Yes, It's Okay!",
      })
      reset()
      setImageFileName('')
      setImageFile(null)
    } catch (error) {
      console.error(error)
      alert('Failed to add product. Please try again.')
    }
  }

  return (
    <>
      <div className="   mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md ml-60">
        <h2 className="text-2xl font-bold text-primary mb-4 flex justify-center">
          Add New Product
        </h2>

        <hr class="mb-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25" />

        <form onSubmit={handleSubmit(onSubmit)} className="">
          <InputField
            label="Title"
            name="title"
            placeholder="Enter plate title"
            register={register}
          />

          <InputField
            label="Description"
            name="description"
            placeholder="Enter plate description"
            type="textarea"
            register={register}
          />

          <SelectedField
            label="Category"
            name="category"
            options={[
              { value: '', label: 'Choose a Category' },
              { value: 'techno', label: 'Techno' },
              { value: 'house', label: 'House' },
              { value: 'disco', label: 'Disco' },
              { value: 'reggae', label: 'Reggae' },
              { value: 'hiphop', label: 'Hip Hop' },
            ]}
            register={register}
          />

          <InputField
            label="Price"
            name="newPrice"
            type="number"
            placeholder="Price"
            register={register}
          />

          {/* <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Cover Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mb-2 w-full"
            />
            {imageFileName && (
              <p className="text-sm text-gray-500">Selected: {imageFileName}</p>
            )}
          </div> */}

          <div>
            <InputField
              label="Cover image file name"
              name="coverImage"
              type="text"
              placeholder="Cover image filename"
              register={register}
            />

            <p className="text-xs -mt-3">
              Upload Cover Image File into folder src/assets/vinyl
            </p>
          </div>

          {/* <div className="mb-4">
            <label className="block text-lg font-bold text-gray-700">
              Cover Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mb-2 w-full"
            />
            {imageFileName && (
              <p className="text-sm text-gray-500">Selected: {imageFileName}</p>
            )}
          </div> */}

          <button
            type="submit"
            className="w-full py-2 bg-primary hover:bg-primary/90 mt-4  text-white font-bold rounded-md cursor-pointer"
          >
            {isLoading ? (
              <span className="">Adding.. </span>
            ) : (
              <span>Add Product</span>
            )}
          </button>
        </form>
      </div>
    </>
  )
}

export default AddProduct
