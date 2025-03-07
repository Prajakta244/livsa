import { useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { CiCircleRemove } from "react-icons/ci";
import { FaUpload } from "react-icons/fa";

const Dropfiles = ({ className, setfile, uplFile, form, isMultifile, field }) => {
    useEffect(() => { form.setValue(field, uplFile) }, [uplFile])
    const onDrop = acceptedFiles => {
        if (acceptedFiles.length) {
            setfile(previousFiles => [
                ...previousFiles,
                ...acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file), filename: `${file.name}-${previousFiles.length + 1}` }))
            ])
        }
    }
    const removeFile = name => {
        setfile(files => files.filter(file => file.filename !== name))
    }
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ accept: "image/*",onDrop })
    return (
        <>
            <div className='w-80'>
                {(uplFile.length && !isMultifile) ? <div className='flex flex-col items-center relative rounded-md shadow-lg mb-10'><img
                    src={uplFile.length && uplFile[0].preview}
                    alt="card-image"
                    class="w-80 h-40 rounded-md"
                /><button
                    type='button'
                    className='w-7 h-7 border border-secondary-400 bg-secondary-400 rounded-full flex justify-center items-center absolute -top-3 -right-3 hover:bg-white transition-colors'
                    onClick={() => removeFile(uplFile[0].filename)}
                >
                        <CiCircleRemove size={40} color='red' />
                    </button></div> :
                    <div {...getRootProps({ className })}>
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                                <div className='flex flex-col items-center mt-6'><p className='text-[12px] items-center mt-2'><FaUpload size={35} /></p></div> :
                                <div className='flex flex-col items-center mt-10'><p className='text-[12px]'>Drag 'n' drop some files here, or click to select files</p></div>
                        }
                    </div>
                }
            </div>
            {/* {preview} */}
            <div>
                {isMultifile && <section className='mt-10'>
                    <div className='flex gap-4'>
                        <h2 className='text-lg sm:text-xl tracking-wide'>Preview</h2>
                        <ul className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10'>
                            {uplFile && uplFile.map((file, i) => (
                                <li key={`${file.filename}-${i}`} className='relative h-20 xl:h-32 rounded-md shadow-lg'>
                                    <img
                                        src={file.preview}
                                        alt="card-image"
                                        class="h-full w-full object-contain rounded-md"
                                    />
                                    <button
                                        type='button'
                                        className='w-7 h-7 border border-secondary-400 bg-secondary-400 rounded-full flex justify-center items-center absolute -top-3 -right-3 hover:bg-white transition-colors'
                                        onClick={() => removeFile(file.filename)}
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
                </section>}
            </div></>
    )
}

export default Dropfiles