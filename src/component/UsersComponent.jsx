import React from 'react';
const UsersComponent = ({detail}) => {
    return (<li class="group border p-5 py-5 hover:shadow-xl transition">
        <a href="#">
            <div class="flex flex-col items-center">
                <div class="group-hover:text-white">
                    <div class="text-lg leading-6"><span class="font-semibold text-gray-900">Name:</span> {detail.name}</div>
                    <div class="text-lg leading-6"><span class="font-semibold text-gray-900">Email:</span>{detail.email}</div>
                    <div class="text-lg leading-6"><span class="font-semibold text-gray-900">Gender:</span> {detail.gender}</div>
                </div>
            </div>
        </a>
    </li>)
}
export default UsersComponent