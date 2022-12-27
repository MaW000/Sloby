import {useSession} from '@supabase/auth-helpers-react'
import React from 'react'
import DashboardStats from './DashboardStats'
import Image from 'next/image'
import DashboardProjectPreview from "./DashboardProjectPreview";


export default function DashboardUserDetails() {
    const session = useSession()
    console.log(session?.user.user_metadata.avatar_url);
    return (
        <div className='flex flex-col gap-10 p-8 mt-8 ml-4 text-white'>
            <div className='text-4xl lg:text-7xl font-bold flex gap-36'>
                Good Morning, <br/>{session?.user.user_metadata.name}
                <img src={session?.user.user_metadata.avatar_url} alt="" className='w-[180px] h-[180px] rounded-full'/>
            </div>
            <div className={"flex gap-20"}>
                <div>
                    <DashboardStats title={"Total visits"} subTitle={"Over the past 2 weeks"} value={1234}
                                    valueEnd={"visits"} lightColor={"bg-blue-perfect"} darkColor={"bg-blurple"}/>
                </div>
                <div>
                    <DashboardStats title={"Hours spent using Sloby"} value={1234} valueEnd={"hours"}
                                    lightColor={"bg-green-light"} darkColor={"bg-green-dark"}/>
                </div>
                <div className={"flex-center flex-col text-center rounded-large gap-4 font-bold w-80"}
                     style={{background: "linear-gradient(106.99deg, rgba(137, 45, 153, 0.6) -1.46%, rgba(109, 38, 125, 0.57125) 25.4%, rgba(48, 18, 133, 0.564) 85.95%);"}}>
                    <p className={"text-4xl"}>Upgrade</p>
                    <p className='text-lg text-white/30'>Upgrade to unlock the full functionality of
                        Sloby</p>
                    <button className={"bg-[#782588] rounded-full p-2 px-4 transition-transform ease-in-out hover:scale-110"}>Upgrade</button>
                </div>
            </div>
            <p className={"text-5xl font-bold flex gap-36"}>Recent Projects</p>
            <div className={"flex gap-20"}>
                <DashboardProjectPreview previewImage={"/images/preview1.webp"} title={"My Project 1"}/>
                <DashboardProjectPreview previewImage={"/images/preview2.webp"} title={"My Project 2"}/>
                <DashboardProjectPreview previewImage={"/images/preview3.webp"} title={"My Project 3"}/>
            </div>
        </div>
    )
}