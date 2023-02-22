import React, { useRef, useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { Editor } from '@tinymce/tinymce-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

type Inputs = {
  file: string;
  title: string;
};

function Create_Blog() {
  const route = useRouter();
  const cookie = new Cookies().get('token');
  const editorRef = useRef<any>(null);
  let schema = yup.object().shape({
    title: yup.string().min(2).required('Entre Your title'),
    file: yup.string().required('Entre Your file'),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = async data => {
    fetch('http://localhost:4000/blog/write', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        auth: `ut ${cookie}`,
      },
      body: JSON.stringify({
        title: data.title,
        content: editorRef.current.getContent(),
        imgurl: data.file,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        {
          data
            ? toast.success('Blog Added Succecfully')
            : toast.error('Error !');
        }
        route.push('/dashboard');
      });
  };

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-center flex-col gap-2">
          <input
            type="text"
            placeholder="Subject"
            {...register('title', { required: true })}
            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 w-full"
          />{' '}
          <input
            type="text"
            placeholder="image"
            {...register('file', { required: true })}
            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 w-full"
          />
          <button className="btn bg-[#03C988] btn-block">Add Blog</button>
        </div>
        <div className="pt-2">
          <Editor
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>Enter your text ...</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist',
                'autolink',
                'lists',
                'link',
                'image',
                'charmap',
                'preview',
                'anchor',
                'searchreplace',
                'visualblocks',
                'code',
                'fullscreen',
                'insertdatetime',
                'media',
                'table',
                'code',
                'help',
                'wordcount',
              ],
              toolbar:
                'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style:
                'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default Create_Blog;
