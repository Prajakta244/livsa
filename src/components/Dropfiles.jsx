import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { CiCircleRemove } from "react-icons/ci";
import { FaUpload } from "react-icons/fa";

const Dropfiles = ({ className }) => {
    const [files, setFiles] = useState([])

    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles.length) {
            setFiles(previousFiles => [
                ...previousFiles,
                ...acceptedFiles.map(file => Object.assign(file, { preview: URL.createObjectURL(file) }))
            ])
        }
    }, [])
    const removeFile = name => {
        setFiles(files => files.filter(file => file.name !== name))
      }
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    return (
        <>
            <div {...getRootProps({ className })}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <div className='flex flex-col items-center mt-2 lg:mt-2'><FaUpload size={35}  /><p>Drag 'n' drop some files here, or click to select files</p></div>
                }
            </div>
            {/* {preview} */}
            <section className='mt-10'>
                <div className='flex gap-4'>
                <h2 className='text-lg sm:text-xl tracking-wide'>Preview</h2>
                    <ul className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10'>
                        {files.map(file => (
                            <li key={file.name} className='relative h-32 rounded-md shadow-lg'>
                                <img
                                    src={file.preview}
                                    alt="card-image"

                                    class="h-full w-full object-contain rounded-md"
                                />
                                <button
                                    type='button'
                                    className='w-7 h-7 border border-secondary-400 bg-secondary-400 rounded-full flex justify-center items-center absolute -top-3 -right-3 hover:bg-white transition-colors'
                                    onClick={() => removeFile(file.name)}
                                >
                                    <CiCircleRemove size={40} color='red' />
                                </button>
                                <p className='mt-2 text-neutral-500 text-[12px] font-medium'>
                                    {file.name}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Dropfiles