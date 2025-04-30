import React from "react"
import Link from "next/link"
import { Button } from "./ui/button"

export default function MainSection() {
    return (
        <>
            <main className="overflow-hidden">
                <section className="relative bg-[#F3F4F6]">
                    <div className="relative py-46">
                        <div className="mx-auto max-w-7xl px-6 md:px-12">
                            <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
                                <h1 className="mt-8 text-4xl font-semibold md:text-5xl xl:text-5xl xl:[line-height:1.125] text-[#1F2937]">
                                    Lorem ipsum dolor sit. <br /> Consectetur adipisicing elit.
                                </h1>
                                <p className="mx-auto mt-8 hidden max-w-2xl text-wrap text-lg sm:block text-[#4B5563]">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et culpa nihil fugit odit eaque esse eos deleniti autem quibusdam placeat.
                                </p>
                                <p className="mx-auto mt-6 max-w-2xl text-wrap sm:hidden text-[#4B5563]">
                                    Highly customizable components for building modern websites and applications, with your personal spark.
                                </p>

                                <div className="mt-8">
                                    <Button
                                        size="lg"
                                        asChild
                                        className="bg-[#C81D25] hover:bg-[#a8141c] text-white"
                                    >
                                        <Link href="#">
                                            <span className="text-nowrap">Lorem Hehe</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}