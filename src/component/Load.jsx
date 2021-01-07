import React, {useState } from 'react';
import ReusableComponent from './ReusableComponent';
import PostComponent from './PostComponent';
import UsersComponent from './UsersComponent';

const Load = () => {
    const [userPage, setUserPage] = useState(1);
    const [postPage, setPostPage] = useState(1);
    return (
        <div>
            <div class="py-12 bg-white">
                <h3 class="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-10 sm:mb-16">Our<span class="text-indigo-600"> Posts</span> </h3>
                <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">
                    <div class="mx-auto">
                        <ReusableComponent url={'posts'} Card={PostComponent} page={userPage}>

                        </ReusableComponent>
                        <div class="flex flex-col items-center py-8">
                            <button class="button" onClick={() => setUserPage(e => { return ++e })}>Load More</button>
                        </div>

                    </div>
                </div>
            </div>


            <div class="py-12 bg-white">
                <h3 class="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-10 sm:mb-16">Our<span class="text-indigo-600"> Users</span> </h3>
                <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">
                    <div class="mx-auto">
                        <ReusableComponent url={'users'} Card={UsersComponent} page={postPage}>
                        </ReusableComponent>
                        <div class="flex flex-col items-center py-8">
                            <button class="button" onClick={() => setPostPage(e => { return ++e })}>Load More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Load;