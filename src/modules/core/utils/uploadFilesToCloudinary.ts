import axios from 'axios'
const cloudName = import.meta.env.VITE_CLOUD_NAME as string
const cloudPreset = import.meta.env.VITE_CLOUD_PRESET

const CLOUD_URL = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload` as const

// -------------------------------------------------------------------------- //
//? Asegúrate de tener las variables de entorno correctas en el archivo .env //
// ------------------------------------------------------------------------- //

// Recibe un archivo de tipo File, puede ser una imagen o un PDF
// Retorna la url segura de la imagen subida a Cloudinary
export const getSimpleImageUrl = async (file: File) => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', cloudPreset)
  try {
    const imageUrl = uploadImage(formData)
    return imageUrl
  } catch (error) {
    console.log(error)
  }
}

// Recibe un arreglo de archivos de tipo File, pueden ser imágenes o PDFs
// Retorna un arreglo de urls seguras de cada imagen subida a Cloudinary
export const getMultiImageUrls = async (fileArray: File[]) => {
  const formDataArray = fileArray.map((file) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', cloudPreset)
    return formData
  })
  const imageUrls = []
  for (const formData of formDataArray) {
    const imageUrl = await uploadImage(formData)
    imageUrls.push(imageUrl)
  }
  return imageUrls
}

const uploadImage = async (formData: FormData) => {
  const response = await axios.post(CLOUD_URL, formData)
  return response.data?.secure_url
}
