import React from 'react';
const PostComponent = ({ detail }) => {
   return (<li class="group border p-5 py-16 text-center hover:shadow-xl transition">
      <a href="#">
         <div class="flex flex-col items-center">
            <div class="mt-6 group-hover:text-white">
               <h4 class="text-lg leading-6 font-semibold text-gray-900">{detail.title}</h4>
               <p class="mt-2 text-base leading-6 text-gray-500">
                  {detail.body}
               </p>
            </div>
         </div>
      </a>
   </li>)
}

export default PostComponent;