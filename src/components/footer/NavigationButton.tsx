'use client'
import React from 'react'
import Link from 'next/link'


interface NavigationButtonProps {
  text: string
  href: string
  children?: React.ReactNode
}

export default function NavigationButton({ text, href, children }: NavigationButtonProps) {
  return (
    <Link href={href} className="text-gray-400 transition duration-150 ease-in-out">{text}{children}</Link>
  )
}