"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(() => { return import("react-animated-numbers") }, { ssr: false })
const achievementList = [
    {
        prefix: "",
        metric: "Projects",
        value: "4",
        postfix: "+"
    },
    {
        prefix: "",
        metric: "Awards",
        value: "2",
        postfix: "+"
    },
    {
        prefix: "",
        metric: "Years",
        value: "1",
        postfix: ""
    }
]

const AchievementSection = () => {
    return (
        <div
            className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <div className='border-[#33353F] border rounded-md py-8 px-17 flex flex-row items-center justify-between'>
                {
                    achievementList.map((achievement, index) => {
                        return (
                            <div key={index} className="flex flex-col justify-center items-center mx-4">
                                <h2 className="text-white text-4xl font-bold  flex flex-row">
                                    {achievement.prefix}
                                    <AnimatedNumbers
                                        includeComma
                                        animateToNumber={parseInt(achievement.value)}
                                        locale='en-us'
                                        className='text-white text-4xl font-bold'
                                    />
                                    {achievement.postfix}
                                </h2>
                                <p className="text-[#ADB7BE] text-base">
                                    {achievement.metric}
                                </p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default AchievementSection