import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import Swal from 'sweetalert2'
import axios from 'axios'
import { useNavigate } from 'react-router'

import InputField from '../components/InputField'
import SelectedField from '../components/SelectedField'
import {
  useFetchVinylByIdQuery,
  useUpdateVinylMutation,
} from '../redux/API/vinylAPI.js'

import getBaseUrl from '../utils/getBackendUrl'
import Loading from '../components/Loader.jsx'

const UpdateProduct = () => {
  const { id } = useParams()
  const { register, handleSubmit, setValue, reset } = useForm()

  const [updateVinyl] = useUpdateVinylMutation()
  const navigate = useNavigate()

  const {
    data: vinylData,
    isLoading,
    isError,
    refetch,
  } = useFetchVinylByIdQuery(id)

  useEffect(() => {
    if (vinylData) {
      setValue('title', vinylData.title)
      setValue('description', vinylData.description)
      setValue('category', vinylData.category)
      setValue('newPrice', vinylData.newPrice)
      setValue('coverImage', vinylData.coverImage)
    }
  }, [vinylData, setValue])

  const onSubmit = async (data) => {
    const updateVinylData = {
      title: data.title,
      description: data.description,
      category: data.category,
      newPrice: data.newPrice,
      coverImage: data.coverImage,
    }
    try {
      await axios.put(
        `${getBaseUrl()}/api/vinyls/edit/${id}`,
        updateVinylData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      Swal.fire({
        title: 'Product Updated',
        text: 'Product is updated successfully',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: "Yes, It's Okay!",
      })
      await refetch()
      navigate('/dashboard/control-vinyls')
    } catch (error) {
      console.log('Failed to update product.', error)
      alert('Failed to update product.')
    }
  }

  if (isLoading) return <Loading />
  if (isError) return <div>Error update product</div>
  return (
    <>
      <div className="min-w-md mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md ml-20">
        <h2 className=" font-bold  mb-4 flex justify-center text-primary text-3xl">
          Update Product
        </h2>

        <hr class="mb-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25" />

        <form onSubmit={handleSubmit(onSubmit)} action="">
          <InputField
            label="Title"
            name="title"
            placeholder="Enter product title"
            register={register}
          />

          <InputField
            label="Description"
            name="description"
            placeholder="Product description"
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

          <button
            type="submit"
            className="w-full py-2 bg-primary hover:bg-primary/90 mt-4  text-white font-bold rounded-md cursor-pointer"
          >
            {isLoading ? (
              <span className="">Adding.. </span>
            ) : (
              <span>Update Product</span>
            )}
          </button>
        </form>
      </div>
    </>
  )
}

export default UpdateProduct
